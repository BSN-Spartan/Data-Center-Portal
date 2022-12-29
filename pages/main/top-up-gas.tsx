/* eslint-disable react/no-unknown-property */
import { useHook } from "@/components/useHook";
import { useState, useEffect, useRef, Fragment } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { TermsOfService } from "@/components/CustomHeader";
import { TAForm, TAFormItem } from "@/components/CustomForm/TAForm";
import TAInput from "@/components/CustomForm/TAInput";
import TASelect from "@/components/CustomForm/TASelect";
import SideWin from "@/components/ComSideWin";
import {
  isNotEmpty,
  openNewWin,
  propTypesValidator,
  showMessage,
} from "@/utils";
import isEmail from "validator/lib/isEmail";
import {
  defaultV1PaymentTypeApi,
  defaultPaymentCreateOrderApi,
  defaultPaymentCalcGasCreditApi,
  defaultDcCaptchaSendApi,
  getDcChainListApi,
} from "@/lib/api";
import CustomTitle from "@/components/CustomTitle";
import TARadioGroup from "@/components/CustomForm/TARadioGroup";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import { Dialog, Transition } from "@headlessui/react";
import { connectMetaMask } from "@/utils/ethereum";
import Link from "next/link";

const TopUp: NextPage<{
  paymentTypes: Array<PaymentTypeRespVO>;
  chainType: Array<{
    label: string;
    value: number;
  }>;
}> = ({ paymentTypes, chainType }) => {
  const { HeaderContext, t, getThrottleFn } = useHook(["website", "public"]);
  const [validateCodeNum, setValidateCodeNum] = useState<number>(0);
  const [errorMsg, setValidateErrorMsg] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(chainType[0]);
  const calcGas = useRef("");
  const agreeCheck = useRef(0);
  const [formData, setFormData] = useState({
    chainId: 1,
    chainAccountAddress: "",
    verifyChainAccountAddress: "",
    email: "",
    captchaCode: "",
    gasCount: "",
    payAmount: "",
    payType: 1,
    remarks: "",
    // agreeCheck: false,
  });
  useEffect(() => {
    HeaderContext.setHeaderText(t("Website_010"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    setOpen(() => {
      return open;
    });
  }, [open]);
  useEffect(() => {
    setFormData(() => {
      return {
        ...formData,
        chainId: selected.value,
      };
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);
  const [reloadNum, setReloadNum] = useState(0);
  const [isSubmit, setIsSubmit] = useState({ tradeNo: "", show: false });
  const [paymentType, setPaymentType] = useState<PaymentTypeRespVO>(
    paymentTypes[0]
  );

  const [errorFormText, setErrorFormText] = useState({
    chainId: "",
    chainAccountAddress: "",
    verifyChainAccountAddress: "",
    email: "",
    captchaCode: "",
    gasCount: "",
    payAmount: "",
    payType: "",
    remarks: "",
    agreeCheck: "",
  });

  const verification = (
    attribute:
      | "chainId"
      | "chainAccountAddress"
      | "verifyChainAccountAddress"
      | "email"
      | "captchaCode"
      | "gasCount"
      | "agreeCheck",
    value: string | number | boolean
  ) => {
    let help = "";
    switch (attribute) {
      case "chainId":
        if (!isNotEmpty(value))
          help = t("PUB_Pleased").replace("****", t("Website_019"));
        break;
      case "chainAccountAddress":
        if (!isNotEmpty(value))
          help = t("PUB_Pleased").replace("****", t("Website_051"));
        break;
      case "verifyChainAccountAddress":
        if (!isNotEmpty(value))
          help = t("PUB_Pleased").replace("****", t("Website_052"));
        else if (formData.chainAccountAddress !== value)
          help = t("Website_006");
        break;
      case "email":
        if (!isNotEmpty(value))
          help = t("PUB_Pleased").replace("****", t("Website_021"));
        else if (!isEmail(value + ""))
          help = t("PUB_Correct").replace("****", t("PUB_Mailbox"));
        break;
      case "captchaCode":
        if (!isNotEmpty(value))
          help = t("PUB_Pleased").replace("****", t("Website_002"));
        break;
      case "gasCount":
        if (!isNotEmpty(value))
          help = t("PUB_Pleased").replace(
            "****",
            t("Website_053").replace("enter ", "")
          );
        break;
      case "agreeCheck":
        if (agreeCheck.current === 0)
          help = t("Website_007").replace("XXXX", t("Website_008"));
        break;
      default:
        break;
    }
    setErrorFormText(() => {
      return {
        ...errorFormText,
        [attribute]: help,
      };
    });
    return help;
  };
  const saveSetVerificationCodeNum = (num: number) => {
    setValidateCodeNum(() => {
      setTimeout(() => {
        if (num <= 0) return setValidateCodeNum(0);
        saveSetVerificationCodeNum(num - 1);
      }, 1000);
      return num;
    });
  };
  const getVerificationCode = async () => {
    if (verification("email", formData.email)) return;
    const params = {
      email: formData.email,
      captchaType: "gas_recharge_captcha_",
    };
    const res = await defaultDcCaptchaSendApi(params);
    if (res.data.code !== 1) return;
    saveSetVerificationCodeNum(60);
  };
  const confirm = getThrottleFn(async () => {
    if (formData.chainId == 0)
      return showMessage("warning", "ChainList cannot be empty", "warning");
    console.log(agreeCheck.current);
    if (
      verification("chainAccountAddress", formData?.chainAccountAddress) ||
      verification(
        "verifyChainAccountAddress",
        formData?.verifyChainAccountAddress
      ) ||
      verification("email", formData.email) ||
      verification("captchaCode", formData.captchaCode) ||
      verification("gasCount", formData.gasCount) ||
      verification("agreeCheck", "")
    )
      return;

    const param = {
      chainAccountAddress: formData.chainAccountAddress,
      email: formData.email,
      payAmount: Number(formData.payAmount),
      captchaCode: formData.captchaCode,
      channelCode: paymentType?.channelCode || "",
      payType: paymentType?.payType || 0,
      chainId: Number(formData.chainId),
      gasCount: Number(formData.gasCount),
      remarks: "",
    };
    const res = await defaultPaymentCreateOrderApi(param);
    if (res.data.code != 1) return;
    openNewWin(res.data.data.orderUrl + "");
    setIsSubmit(() => {
      setTimeout(() => {
        document.getElementById("toSubmitShow")?.click();
      }, 300);
      return { tradeNo: res.data.data.tradeNo + "", show: true };
    });
  }, 3000);
  const getGasPrice = () => {
    calcGas.current = "";
    setValidateErrorMsg("");
    if (reloadNum && formData.gasCount)
      if (formData.chainId == 0)
        return showMessage("warning", "ChainList cannot be empty", "warning");
    if (!verification("gasCount", formData.gasCount))
      defaultPaymentCalcGasCreditApi({
        // chainAccountAddress: formData.chainAccountAddress,
        chainId: formData.chainId,
        payAmount: Number(formData.gasCount),
      }).then((res) => {
        if (res.data && res.data.code === 1) {
          setFormData(() => {
            return {
              ...formData,
              // gasCount: res.data.data.gasCount / 100 + "",
              payAmount: parseFloat(res.data.data.payAmount / 100 + "") + "",
            };
          });
          calcGas.current = res.data.data.gasCount;
          if (res.data.data.errorMsg !== "")
            setValidateErrorMsg(res.data.data.errorMsg);
          // verification("gas", res.data.data.errorMsg);
        } else {
          setFormData(() => {
            return {
              ...formData,
              payAmount: "--",
            };
          });
        }
      });
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if (reloadNum && formData.gasCount) getGasPrice();
    }, 500);
    setReloadNum(reloadNum + 1);
    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData.gasCount, formData.chainId]);
  // formData.gasCount, formData.chainAccountAddress,
  const toReset = () => {
    setFormData({
      chainId: 1,
      chainAccountAddress: "",
      verifyChainAccountAddress: "",
      email: "",
      captchaCode: "",
      gasCount: "",
      payAmount: "",
      payType: 0,
      remarks: "",
    });
    setErrorFormText({
      chainId: "",
      chainAccountAddress: "",
      verifyChainAccountAddress: "",
      email: "",
      captchaCode: "",
      gasCount: "",
      payAmount: "",
      payType: "",
      remarks: "",
      agreeCheck: "",
    });
    agreeCheck.current = 0;
    calcGas.current = "";
    setValidateCodeNum(0);
    setIsSubmit({ tradeNo: "", show: false });
  };

  return (
    <div className="lg:px-36 mb-40 px-8">
      {!isSubmit.show ? (
        <>
          <CustomTitle title={"Top Up Gas Credit"} />
          <div>
            <TAForm customStyle={false} onClick={confirm}>
              <TASelect
                setSelected={setSelected}
                optionLabel={"label"}
                options={chainType}
                optionKey="value"
                className="mb-7"
                multiple={false}
                label={() => (
                  <div className="flex-1 flex justify-between">
                    <div>
                      <span className="text-red-500">* </span>
                      {t("Website_019")}
                    </div>
                    <div className="inline-block float-right text-sm">
                      <Link
                        href="/#chainAccess"
                        className="text-theme cursor-pointer underline"
                      >
                        <span className="underline cursor-pointer">
                          {t("Website_054")}
                        </span>
                      </Link>
                    </div>
                  </div>
                )}
              />
              <TAFormItem
                label={() => (
                  <div className="flex-1 flex justify-between">
                    <div>{t("Website_051")}</div>
                    <div className="inline-block float-right text-sm">
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                          setOpen(!open);
                        }}
                        className="text-theme cursor-pointer underline"
                      >
                        {t("Website_020")}
                      </a>
                      <span className="hidden md:inline-block">
                        &nbsp;&nbsp;or&nbsp;&nbsp;
                      </span>
                      <span
                        className="hidden md:inline-block text-theme cursor-pointer underline"
                        onClick={(e) => {
                          e.preventDefault();
                          connectMetaMask();
                        }}
                      >
                        {t("Website_023")}
                      </span>
                    </div>
                  </div>
                )}
                help={errorFormText.chainAccountAddress}
                required={true}
                validateStatus={
                  errorFormText.chainAccountAddress ? "error" : "success"
                }
              >
                <TAInput
                  type="text"
                  value={formData.chainAccountAddress}
                  name="nttAccountAddress"
                  className="text-sm rounded-md"
                  placeholder={t("PUB_Pleased").replace(
                    "****",
                    t("Website_051")
                  )}
                  onBlur={(e) => {
                    verification("chainAccountAddress", e.target.value);
                  }}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      chainAccountAddress: e.target.value,
                    })
                  }
                />
              </TAFormItem>
              <TAFormItem
                label={t("Website_082")}
                help={errorFormText.verifyChainAccountAddress}
                required={true}
                validateStatus={
                  errorFormText.verifyChainAccountAddress ? "error" : "success"
                }
              >
                <TAInput
                  type="text"
                  value={formData.verifyChainAccountAddress}
                  name="verifyNttAccountAddress"
                  className="text-sm rounded-md"
                  placeholder={t("PUB_Pleased").replace(
                    "****",
                    t("Website_052")
                  )}
                  onBlur={(e) => {
                    verification("verifyChainAccountAddress", e.target.value);
                  }}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      verifyChainAccountAddress: e.target.value,
                    })
                  }
                />
              </TAFormItem>
              <TAFormItem
                label={() => (
                  <div className="flex-1 flex justify-between">
                    <div className="flex">
                      {t("Website_055")}
                      <QuestionMarkCircleIcon
                        className={"w-5 h-5 text-sm ml-2 "}
                        onClick={(e) => {
                          e.preventDefault();
                          setIsOpen(true);
                        }}
                      ></QuestionMarkCircleIcon>
                    </div>
                    {/* <div className="inline-block float-right text-sm">
                      {calcGas.current}
                    </div> */}
                    <Transition appear show={isOpen} as={Fragment}>
                      <Dialog
                        as="div"
                        className="relative z-10"
                        onClose={() => {
                          setIsOpen(false);
                        }}
                      >
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <div className="fixed inset-0 bg-black bg-opacity-25" />
                        </Transition.Child>

                        <div className="fixed inset-0 overflow-y-auto">
                          <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                              as={Fragment}
                              enter="ease-out duration-300"
                              enterFrom="opacity-0 scale-95"
                              enterTo="opacity-100 scale-100"
                              leave="ease-in duration-200"
                              leaveFrom="opacity-100 scale-100"
                              leaveTo="opacity-0 scale-95"
                            >
                              <Dialog.Panel className="transform overflow-hidden rounded-xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title
                                  as="h3"
                                  className="text-lg font-medium leading-6 text-gray-900"
                                >
                                  {t("Website_075")}
                                </Dialog.Title>
                                <div className="mt-2 leading-12">
                                  <p className="text-sm text-gray-600 leading-12 mt-4">
                                    {t("Website_076")}
                                  </p>
                                  <p className="text-sm text-gray-600 leading-12 mt-4">
                                    &nbsp;&nbsp;{t("Website_077")}
                                  </p>
                                  <p className="text-sm text-gray-600 leading-12 mt-4">
                                    &nbsp;&nbsp;{t("Website_078")}
                                  </p>
                                  <p className="text-sm text-gray-600 leading-12 mt-4">
                                    &nbsp;&nbsp;{t("Website_079")}
                                  </p>
                                  <p className="text-sm text-gray-600 leading-12 mt-4 italic">
                                    {t("Website_080")}
                                  </p>
                                </div>

                                <div className="mt-4">
                                  <button
                                    type="button"
                                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                    onClick={() => {
                                      setIsOpen(false);
                                    }}
                                  >
                                    {t("Website_081")}
                                  </button>
                                </div>
                              </Dialog.Panel>
                            </Transition.Child>
                          </div>
                        </div>
                      </Dialog>
                    </Transition>
                  </div>
                )}
                addonAfter={() => (
                  <button
                    type="button"
                    className={
                      " text-sm px-8 h-full -ml-px m-auto inline-flex items-center rounded-r-md font-medium  bg-gray-300 "
                    }
                  >
                    {/* <span>{formData.chainId === 2 ? "UGAS" : "GWEI"}</span> */}

                    <span>USD</span>
                  </button>
                )}
                help={errorMsg == "" ? errorFormText.gasCount : errorMsg}
                gasTip={
                  calcGas.current !== "" && formData.chainId !== 2
                    ? "" + calcGas.current + " GWEI"
                    : calcGas.current !== "" && formData.chainId === 2
                    ? "" + calcGas.current + " UGAS"
                    : ""
                }
                required={true}
                validateStatus={
                  errorFormText.gasCount || errorMsg !== ""
                    ? "error"
                    : "success"
                }
              >
                <TAInput
                  type="number"
                  name="gasCount"
                  required={true}
                  className="text-sm rounded-md"
                  value={formData.gasCount}
                  placeholder={t("PUB_Pleased").replace(
                    "****",
                    t("Website_056")
                  )}
                  onBlur={() => {
                    // verification("gasCount", e.target.value);
                    getGasPrice();
                  }}
                  onChange={(e) =>
                    setFormData(() => {
                      verification(
                        "gasCount",
                        e.target.value.replace(
                          /^\D*(\d*(?:\.\d{0,2})?).*$/g,
                          "$1"
                        )
                      );
                      return {
                        ...formData,
                        gasCount: e.target.value.replace(
                          /^\D*(\d*(?:\.\d{0,2})?).*$/g,
                          "$1"
                        ),
                      };
                    })
                  }
                />
              </TAFormItem>
              <TAFormItem
                label={t("Website_001")}
                required={true}
                help={errorFormText.email}
                validateStatus={errorFormText.email ? "error" : "success"}
              >
                <TAInput
                  type="email"
                  value={formData.email}
                  name="email"
                  className="text-sm rounded-md"
                  placeholder={t("Website_057")}
                  onBlur={(e) => {
                    verification("email", e.target.value);
                  }}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                />
              </TAFormItem>
              <TAFormItem
                label={t("Website_002")}
                validateStatus={errorFormText.captchaCode ? "error" : "success"}
                help={errorFormText.captchaCode}
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
                  placeholder={t("PUB_Pleased").replace(
                    "****",
                    t("Website_002")
                  )}
                  className="text-sm rounded-md rounded-r-none"
                  onBlur={(event) => {
                    verification("captchaCode", event.target.value);
                  }}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      captchaCode: e.target.value,
                    });
                  }}
                />
              </TAFormItem>
              <TAFormItem label={t("Website_011")} required={false}>
                {[""].map(() => {
                  const list = [
                    [
                      t("Website_051") + ": ",
                      formData.chainAccountAddress || "--",
                    ],
                    [
                      t("Website_055") + ": ",
                      formData.payAmount && formData.payAmount != "--"
                        ? "" + parseFloat(formData.payAmount).toFixed(2)
                        : "--",
                    ],
                    [
                      t("Website_005") + ": ",
                      formData.payAmount && formData.payAmount != "--"
                        ? "$" + parseFloat(formData.payAmount).toFixed(2)
                        : "--",
                    ],
                  ];
                  return (
                    <div
                      key="Order"
                      className="border rounded-md border-solid border-gray-300 w-full px-6 py-6 text-md"
                    >
                      {list.map((item, index) => (
                        <div
                          key={"Details-" + index}
                          className={
                            "flex mb-2" + (index === 3 ? " font-bold" : "")
                          }
                        >
                          <div className="w-36 text-right mr-6">{item[0]}</div>
                          <div className="flex-1">{item[1]}</div>
                        </div>
                      ))}
                    </div>
                  );
                })}
              </TAFormItem>

              <TARadioGroup
                selected={paymentType}
                setSelected={setPaymentType}
                mailingLists={paymentTypes || []}
              />
              {/* <TAFormItem className="mt-7" required={false}>
                <div>
                  <div className="flex h-5 items-center">
                    <input
                      id="comments"
                      aria-describedby="comments-description"
                      name="comments"
                      type="checkbox"
                      defaultChecked={formData.agreeCheck}
                      onClick={() => {
                        setFormData({
                          ...formData,
                          agreeCheck: !formData.agreeCheck,
                        });
                        console.log(formData.agreeCheck);
                      }}
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <span className="pl-2">{t("Website_009")}</span>
                    <a href={TermsOfService} target="noreferrer">
                      <span className=" text-blue-800 underline underline-offset-4 cursor-pointer">
                        {t("Website_008")}
                      </span>
                    </a>
                  </div>
                  <p className="h-5 text-sm text-red-500 pt-2">
                    {errorFormText.agreeCheck}
                  </p>
                </div>
              </TAFormItem> */}
              <div className="mt-5">
                <div className="text-sm">
                  <input
                    type="checkbox"
                    name="isOk"
                    onChange={() => {
                      agreeCheck.current = agreeCheck.current ? 0 : 1;
                      console.log(agreeCheck.current);
                      verification("agreeCheck", "");
                    }}
                    className="w-4 h-4 border-2 rounded focus:outline-none focus:ring-0 focus:ring-theme"
                  />
                  <span className="pl-2">{t("Website_009")}</span>
                  <a href={TermsOfService} target="noreferrer">
                    <span className=" text-blue-800 underline underline-offset-4 cursor-pointer">
                      {t("Website_008")}
                    </span>
                  </a>
                </div>
                <p className="h-5 text-sm text-red-500 pt-2">
                  {errorFormText.agreeCheck}
                </p>
              </div>
            </TAForm>
          </div>
        </>
      ) : (
        <div id="submitShow" className="flex flex-col items-center">
          <a id="toSubmitShow" href="#submitShow" className="h-0 w-0"></a>
          <CheckCircleIcon className="w-80 h-80 text-green-400" />
          <div className="mt-6 text-xl text-black font-bold">
            {t("Website_031")} {isSubmit.tradeNo}
          </div>
          <div className="mt-6 text-xl text-black">
            {/* {paymentType.payType == 3 ? t("Website_050") : t("Website_029")}
             */}
            {t("Website_050")}
          </div>
          <div className="mt-10 grid grid-cols-1 gap-24">
            <button
              type="button"
              className="inline-flex items-center rounded-md border border-transparent bg-theme px-6 py-3 text-base font-medium text-white shadow-base hover:bg-theme focus:outline-none focus:ring-2 focus:ring-theme focus:ring-offset-2"
              onClick={() => {
                toReset();
              }}
            >
              {t("Website_030")}
            </button>
          </div>
        </div>
      )}
      <SideWin open={open} setOpen={setOpen}></SideWin>
    </div>
  );
};

TopUp.propTypes = {
  paymentTypes: propTypesValidator,
  chainType: propTypesValidator,
};

export default TopUp;

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const chainType: Array<{
    label: string;
    value: number;
  }> = [];
  const res = await getDcChainListApi();
  const res1 = await defaultV1PaymentTypeApi();
  if (res.code !== 1 || res1.code !== 1) {
    return {
      redirect: {
        destination: "/500",
        permanent: false,
      },
    };
  }
  // res.data = [];
  if (res?.code === 1 && res.data) {
    if (res.data.length !== 0) {
      res.data.map((item: DcChainRespVO) => {
        chainType.push({
          label: item.chainName + "",
          value: item.chainId,
        });
      });
    } else {
      chainType.push({
        label: "",
        value: 0,
      });
    }
  }
  return {
    props: {
      ...(await serverSideTranslations(locale || "", ["website", "public"])),
      paymentTypes: res1.data,
      chainType,
    },
  };
};
