import { useHook } from "@/components/useHook";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { getDcCaptchaGetApi, defaultUserJoinApi } from "@/lib/api";
import { isNotEmpty, showMessage } from "@/utils";
// import { UserManual } from "@/components/CustomHeader";
import TAInput from "@/components/CustomForm/TAInput";
import TASelect from "@/components/CustomForm/TASelect";
import isEmail from "validator/lib/isEmail";
import { TAForm, TAFormItem } from "@/components/CustomForm/TAForm";
import SideWin from "@/components/ComSideWin";
import { connectMetaMask } from "@/utils/ethereum";
interface ChainType {
  label: string;
  value: number;
}
export function ChainAccess({ chainType }: { chainType: Array<ChainType> }) {
  const { t } = useHook(["website", "public"]);
  const [validateCodeNum, setValidateCodeNum] = useState<number>(0);
  const [open, setOpen] = useState(false);
  const timerRef = useRef(null);
  const [selected, setSelected] = useState([chainType[0]]);
  const [dataInfo, setDataInfo] = useState<{
    email: string;
    captcha: string;
    chainId: number[];
  }>({
    email: "",
    captcha: "",
    chainId: [],
  });

  const [TAForms, setTAForms] = useState({
    help: {
      email: "",
      captcha: "",
      chainId: [],
    },
  });
  useEffect(() => {
    setOpen(() => {
      console.log(open);
      return open;
    });
  }, [open]);
  useEffect(() => {
    setDataInfo(() => {
      return {
        ...dataInfo,
        chainId: selected.map((obj) => Number(obj.value)),
      };
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);
  const toReset = () => {
    setDataInfo({
      email: "",
      captcha: "",
      chainId: selected.map((obj) => Number(obj.value)),
    });
    setTAForms({
      help: {
        email: "",
        captcha: "",
        chainId: [],
      },
    });
  };
  const validate = (attribute: string, value: string | number | []) => {
    let errMessage = "";
    switch (attribute) {
      case "email":
        if (!isNotEmpty(value))
          errMessage = t("PUB_Pleased").replace("****", t("Website_021"));
        else if (!isEmail(value + ""))
          errMessage = t("PUB_Correct").replace("****", t("PUB_Mailbox"));
        break;
      case "captcha":
        if (!isNotEmpty(value))
          errMessage = t("PUB_Pleased").replace("****", t("Website_002"));
        break;
      default:
        break;
    }
    setTAForms(() => {
      return {
        help: {
          ...TAForms.help,
          [attribute]: errMessage,
        },
      };
    });
    return errMessage;
  };
  useEffect(() => {
    if (validateCodeNum === 0) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      clearTimeout(timerRef.current); //
      setValidateCodeNum(0); //
    }
  }, [validateCodeNum]);
  const saveSetVerificationCodeNum = (num: number) => {
    setValidateCodeNum(() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      timerRef.current = setTimeout(() => {
        if (num <= 0) return setValidateCodeNum(0);
        saveSetVerificationCodeNum(num - 1);
      }, 1000);
      return num;
    });
  };

  const getVerificationCode = async () => {
    if (validate("email", dataInfo.email)) return;
    const params = {
      email: dataInfo.email,
    };
    const res = await getDcCaptchaGetApi(params);

    if (res.data.code !== 1) return;
    saveSetVerificationCodeNum(60);
  };

  const saveFoundation = async () => {
    dataInfo.chainId = dataInfo.chainId.filter((item) => {
      return item !== 0;
    });
    if (dataInfo.chainId.length == 0)
      return showMessage("warning", "ChainList cannot be empty", "warning");
    if (
      validate("email", dataInfo.email) ||
      validate("captcha", dataInfo.captcha)
    )
      return;
    const params = {
      email: dataInfo.email,
      chainList: dataInfo.chainId,
      captchaCode: dataInfo.captcha,
    };
    const res = await defaultUserJoinApi(params);
    if (res.data.code != 1) return;
    toReset();
    setValidateCodeNum(0);
    showMessage(
      "success",
      "We will send you access information about NC Chains via email !",
      "success"
    );
  };

  return (
    <div className="mb-40">
      <div id="" className="pt-12">
        <div className="text-xl md:text-4xl font-bold md:mt-14">
          Chain Access
        </div>
        <div className="mt-10 grid grid-cols gap-x-4 lg:flex pt-6 text-base md:text-2xl font-bold md:mt-14 underline">
          <div className="lg:flex-auto">
            <div
              onClick={() => {
                setOpen(!open);
              }}
              className="text-theme cursor-pointer underline"
            >
              {t("Website_020")}
            </div>
          </div>
          <div className="lg:flex-auto">
            <span
              className="hidden md:inline-block text-theme cursor-pointer underline"
              onClick={() => {
                connectMetaMask();
              }}
            >
              {t("Website_023")}
            </span>
          </div>
          <div className="lg:flex-auto">
            <Link href={"/main/top-up-gas"}>
              <span className=" text-theme cursor-pointer underline">
                {t("Website_032")}
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-2xl px-4 py-8 md:px-36 md:py-12 md:my-14">
        <div className="md:text-2xl font-bold md:py-12">{t("Website_033")}</div>
        <TAForm
          onClick={saveFoundation}
          className={"py-10 lg:py-20 text-sm mx-auto"}
        >
          <TASelect
            setSelected={setSelected}
            optionLabel={"label"}
            options={chainType}
            optionKey="value"
            className="mb-7"
            multiple={true}
            label={() => (
              <div className="flex-1 flex justify-between">
                <div>
                  <span className="text-red-500">* </span>
                  {t("Website_019")}
                </div>
              </div>
            )}
          />
          <TAFormItem
            label={t("Website_021")}
            validateStatus={TAForms.help.email ? "error" : "success"}
            help={TAForms.help.email}
            required={true}
          >
            <TAInput
              type="email"
              name="email"
              placeholder={t("Website_022")}
              className="text-sm rounded-md"
              onBlur={(event) => {
                validate("email", event.target.value);
              }}
              value={dataInfo.email}
              onChange={(event) => {
                setDataInfo(() => {
                  return {
                    ...dataInfo,
                    email: event.target.value,
                  };
                });
              }}
            />
          </TAFormItem>
          <TAFormItem
            label={t("Website_002")}
            validateStatus={TAForms.help.captcha ? "error" : "success"}
            help={TAForms.help.captcha}
            required={true}
            addonAfter={() => (
              <button
                type="button"
                className={
                  " text-sm px-2 md:px-8 h-full -ml-px m-auto inline-flex items-center rounded-r-md font-medium  focus:outline-none focus:ring-1 " +
                  (validateCodeNum > 0
                    ? "bg-gray-300 text-gray-500"
                    : "text-white bg-theme focus:border-theme focus:ring-theme")
                }
                disabled={validateCodeNum > 0}
                onClick={getVerificationCode}
              >
                <span>
                  {validateCodeNum > 0
                    ? t("Website_003").replace("****", validateCodeNum + "")
                    : t("Website_004")}
                </span>
              </button>
            )}
          >
            <TAInput
              type="text"
              name="captcha"
              value={dataInfo.captcha}
              placeholder={t("PUB_Pleased").replace("****", t("Website_002"))}
              className="text-sm rounded-md rounded-r-none"
              onBlur={(event) => {
                validate("captcha", event.target.value);
              }}
              onChange={(event) => {
                setDataInfo(() => {
                  return {
                    ...dataInfo,
                    captcha: event.target.value,
                  };
                });
              }}
            />
          </TAFormItem>
        </TAForm>
        <SideWin open={open} setOpen={setOpen}></SideWin>
      </div>
    </div>
  );
}
