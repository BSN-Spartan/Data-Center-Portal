import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import PaseCard from "@/components/ComIndex/paseCard";
import { GetGas, UserManual } from "@/components/CustomHeader";
import Technical from "@/components/ComTechnical";
import { useHook } from "@/components/useHook";
import { propTypesValidator } from "@/utils";
import Chains from "@/components/ComChains";
import { ChainAccess } from "@/components/ComChainAccess";
import {
  getDcChainListApi,
  getSysConfigApi,
  getSysConfigContactUsApi,
  getSysConfigTecSupportApi,
} from "@/lib/api";
interface ChainType {
  label: string;
  value: number;
}
const Home: NextPage<{
  sysConfig: DcSystemConfRespVO;
  sysConfigContactUs: DcSystemConfRespVO;
  sysConfigTecSupport: DcSystemConfRespVO;
  chainType: Array<ChainType>;
}> = ({ chainType, sysConfig, sysConfigContactUs, sysConfigTecSupport }) => {
  const { t } = useHook(["website"]);
  return (
    <>
      <div id="Home" className="w-full md:h-[32rem] main-index1-img">
        <div className="w-full md:h-[32rem]">
          <div className="text-white text-center text-3xl pt-10 md:text-6xl md:pt-20 font-bold">
            {sysConfig.headline}
          </div>
          <div className="text-white text-center text-base pt-6 pb-6 md:pt-16 flex-col md:flex-row flex justify-center items-center">
            <a
              href="#getStarted"
              className="w-2/3 my-2 text-xl md:w-auto md:text-3xl inline-flex justify-center items-center px-12 py-5 border border-white font-bold rounded-full shadow-sm text-white hover:scale-105 md:mx-8"
            >
              {t("Website_024")}
            </a>
            <Link href={GetGas}>
              <button
                type="button"
                className="w-2/3 my-2 text-xl md:w-auto md:text-3xl inline-flex justify-center items-center px-12 py-5 border border-white font-bold rounded-full shadow-sm text-white hover:scale-105 md:mx-8"
              >
                {t("Website_025")}
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="px-8 md:px-20 xl:px-24 py-8">
        <div className="pt-12">
          <div
            className="text-base md:text-2xl text-[#767676] leading-7 break-words"
            style={{ whiteSpace: "pre-line" }}
            dangerouslySetInnerHTML={{ __html: sysConfig.introduce }}
          >
            {/* {sysConfig.introduce.replace(/<.*?>/gi, "")} */}
          </div>
          {/* <p
            className="text-base md:text-2xl text-[#767676] leading-7 break-words"
            style={{ whiteSpace: "pre-line" }}
          >
            {sysConfig.introduce}
          </p>
          <br /> */}
          {/* <p className="text-base md:text-2xl text-[#767676] leading-7">
            {t("Website_026")}{" "}
            <a
              href={whitePaper}
              target="_blank"
              className="text-[#3B7DDD] underline"
            >
              {t("Website_027")}
            </a>
            .
          </p> */}
        </div>
        <div className="pt-12" id="getStarted">
          <div className="text-xl lg:text-4xl font-bold pb-20">
            {t("Website_028")}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-5 gap-8 xxl:grid-cols-2">
            {[
              {
                type: "clickHandel",
                stepNo: "Step 1",
                stepImg: "bg-step",
                title: t("Website_058"),
                description: () => (
                  <>
                    <p className="leading-8">{t("Website_059")}</p>
                  </>
                ),
                buttonName: t("Website_060"),
                image: "website_05",
                href: "metaMask",
              },
              {
                type: "",
                stepNo: "Step 2",
                stepImg: "bg-step2",
                title: t("Website_061"),
                description: () => (
                  <>
                    <p className="leading-8">
                      {t("Website_062")}
                      <a
                        href="https://spartan.bsn.foundation/static/quick-start/4learnNon-CryptocurrencyPublicChains/4.html"
                        target="_blank"
                        className="text-[#3B7DDD] underline ml-1"
                      >
                        {t("Website_063")}
                      </a>
                      .
                    </p>
                  </>
                ),
                buttonName: t("Website_064"),
                image: "website_01",
                href: "#chainAccess",
              },
              {
                type: "",
                stepNo: "Step 3",
                stepImg: "bg-step2",
                title: t("Website_065"),
                description: () => (
                  <>
                    <p className="leading-8">{t("Website_066")}</p>
                  </>
                ),
                buttonName: t("Website_067"),
                image: "website_02",
                href: GetGas,
              },
              {
                type: "openWin",
                stepNo: "Step 4",
                stepImg: "bg-step2",
                title: t("Website_068"),
                description: () => (
                  <p className="leading-8">
                    {t("Website_069")}
                    <a
                      href="#ContactUs"
                      className="text-[#3B7DDD] underline ml-1"
                    >
                      {t("Website_070")}
                    </a>
                    .
                  </p>
                ),
                buttonName: t("Website_071"),
                image: "website_03",
                href: UserManual,
              },
              {
                type: "clickHandel",
                stepNo: "Step 5",
                stepImg: "bg-step2",
                title: t("Website_072"),
                description: () => (
                  <>
                    <p className="leading-8">{t("Website_073")}</p>
                  </>
                ),
                buttonName: t("Website_074"),
                image: "website_04",
                href: "https://www.spartan.bsn.foundation/main/contract",
              },
            ].map((item) => (
              <div key={item.stepNo} className="flex-1">
                <PaseCard
                  type={item.type}
                  stepNo={item.stepNo}
                  stepImg={item.stepImg}
                  title={item.title}
                  description={item.description}
                  buttonName={item.buttonName}
                  image={item.image}
                  href={item.href}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="" id="chainAccess">
          <ChainAccess chainType={chainType} />
        </div>
        <div className="pt-12 md:pt-16">
          <Technical
            sysConfigContactUs={sysConfigContactUs}
            sysConfigTecSupport={sysConfigTecSupport}
          >
            <div id="NonCryptocurrencyPublicChains" className="">
              <p className="text-xl md:text-4xl font-bold md:mt-10">
                {t("Website_089")}
              </p>
              {/* <p
                className="md:text-2xl font-bold md:mt-14 underline cursor-pointer"
                onClick={() => {
                  openNewWin(
                    "https://www.spartan.bsn.foundation/static/quick-start/4learnNon-CryptocurrencyPublicChains/4.html"
                  );
                }}
              >
                Learn More
              </p> */}
              <Chains />
            </div>
          </Technical>
        </div>
      </div>
    </>
  );
};

Home.propTypes = {
  chainType: propTypesValidator,
  sysConfig: propTypesValidator,
  sysConfigContactUs: propTypesValidator,
  sysConfigTecSupport: propTypesValidator,
};
export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const chainType: Array<ChainType> = [];
  const sysConfig: any = {};
  const res = await getDcChainListApi();
  const res1 = await getSysConfigApi();
  const res2 = await getSysConfigContactUsApi();
  const res3 = await getSysConfigTecSupportApi();
  // res.data = [];
  if (res.code !== 1 || res1.code !== 1 || res2.code !== 1 || res3.code !== 1) {
    return {
      redirect: {
        destination: "/500",
        permanent: false,
      },
    };
  }
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

  if (res1?.code === 1 && res1.data) {
    res1?.data.map((item: DcSystemConfRespVO) => {
      sysConfig[item.confCode] = item.confValue;
    });
  }
  return {
    props: {
      ...(await serverSideTranslations(locale || "", ["public", "website"])),
      chainType: chainType ?? null,
      sysConfig: sysConfig ?? null,
      sysConfigContactUs: res2.data ?? null,
      sysConfigTecSupport: res3.data ?? null,
    },
  };
};
export default Home;
