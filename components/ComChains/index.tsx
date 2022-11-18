import { openNewWin } from "@/utils";
import { useHook } from "../useHook";
export default function Chains() {
  const { t } = useHook(["website"]);
  const dataList = [
    {
      title: t("Website_034"),
      url: [
        {
          name: t("Website_035"),
          href: "https://ethereum.org/en/developers/docs/",
        },
        {
          name: t("Website_036"),
          href: "https://docs.soliditylang.org/",
        },
        {
          name: t("Website_037"),
          href: "https://docs.web3j.io/",
        },
        {
          name: t("Website_038"),
          href: "https://web3js.readthedocs.io/en/v1.7.5/",
        },
      ],
      explorer: {
        url: "https://spartanone.bsn.foundation",
      },
    },
    {
      title: t("Website_039"),
      url: [
        {
          name: t("Website_040"),
          href: "https://github.com/BSN-Spartan/NC-Cosmos/tree/main/docs/endpoints",
        },
        {
          name: t("Website_041"),
          href: "https://github.com/BSN-Spartan/NC-Cosmos/tree/main/docs/cli-client",
        },
        {
          name: t("Website_042"),
          href: "https://docs.soliditylang.org/",
        },
        {
          name: t("Website_043"),
          href: "https://docs.web3j.io/",
        },
        {
          name: t("Website_044"),
          href: "https://github.com/BSN-Spartan/nc-cosmos-sdk-go",
        },
      ],
      explorer: {
        url: "https://spartantwo.bsn.foundation",
      },
    },
    {
      title: t("Website_045"),
      url: [
        {
          name: t("Website_046"),
          href: "https://docs.polygon.technology/docs/edge/get-started/json-rpc-commands",
        },
        {
          name: t("Website_047"),
          href: "https://docs.polygon.technology/docs/category/smart-contracts",
        },
        {
          name: t("Website_048"),
          href: "https://docs.soliditylang.org/",
        },
        {
          name: t("Website_037"),
          href: "https://docs.web3j.io/",
        },
        {
          name: t("Website_038"),
          href: "https://web3js.readthedocs.io/en/v1.7.5/",
        },
      ],
      explorer: {
        url: "https://spartanthree.bsn.foundation",
      },
    },
  ];
  const subIndex = (text: string, str: string) => {
    return text.indexOf(str);
  };
  return (
    <div className="mt-8 lg:mt-20 2xl lg:flex">
      {dataList.map((item, index) => {
        return (
          <div
            className="mt-4 lg:mt-4 flex-1 shadow-xl hover:shadow-2xl lg:mx-8 rounded-md"
            key={index}
          >
            <div className="bg-theme text-white rounded-tl-md rounded-tr-md text-center py-6">
              <div className="text-3xl">
                {item.title.slice(0, subIndex(item.title, "("))}
              </div>
              <div className="text-xl pt-2">
                {item.title.slice(subIndex(item.title, "("))}
              </div>
            </div>
            <div className="bg-white rounded-md">
              <ul className="px-8 py-4 min-h-[14rem]">
                {item.url.map((item1, index1) => {
                  return (
                    <li
                      className="leading-9 cursor-pointer"
                      onClick={() => {
                        openNewWin(item1.href + "");
                      }}
                      key={index1}
                    >
                      <span className="inline-block h-4 w-4 rounded-full bg-theme mr-4"></span>
                      {item1.name}
                    </li>
                  );
                })}
              </ul>
              <div className="flex items-center justify-between text-f16 px-8 pb-4 rounded-md">
                <div
                  className="flex cursor-pointer hover:text-theme"
                  onClick={() => {
                    openNewWin(item.explorer.url + "");
                  }}
                >
                  <div className="crypto_001 text-3F3F3F w-6 h-6 mr-2"></div>
                  <div>{t("Website_012")}</div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
