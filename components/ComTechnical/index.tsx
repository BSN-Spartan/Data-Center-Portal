import { useHook } from "../useHook";
import { openNewWin } from "@/utils";
import { Fragment, useState } from "react";
import { whitePaper, UserManual } from "@/components/CustomHeader";
import Link from "next/link";

export default function Technical({
  children,
  sysConfigContactUs,
  sysConfigTecSupport,
}: {
  children: any;
  sysConfigContactUs: Array<DcSystemConfRespVO>;
  sysConfigTecSupport: Array<DcSystemConfRespVO>;
}) {
  const { t } = useHook(["website"]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [open, setOpen] = useState(false);
  // const iframeList: SupportFace[] = [
  //   { id: 0, name: "", url: "" },
  //   { id: 1, name: "", url: "https://www.youtube.com/embed/PM8cT8rYZkg" },
  //   // { id: 2, name: "", url: "https://www.youtube.com/embed/Gpor2jPR3Rc" },
  // ];

  const technicalList: SupportFace[] = [
    {
      id: 2,
      name: t("Website_017"),
      url: UserManual,
      type: "pdf",
    },
    {
      id: 1,
      name: t("Website_016"),
      url: whitePaper,
      type: "pdf",
    },
    {
      id: 3,
      name: t("Website_018"),
      url: "https://spartan.bsn.foundation/static/quick-start/4learnNon-CryptocurrencyPublicChains/4.html",
      type: "",
    },
  ];
  const onJump1 = (_data: DcSystemConfRespVO) => {
    let iUrl = _data.url + "";
    if (_data.type == "pdf") {
      iUrl = window.origin + iUrl;
    } else {
      if (iUrl.indexOf("https://") == -1 && iUrl.indexOf("http://") == -1) {
        iUrl = window.origin + "/static/quick-start" + iUrl;
      }
    }
    openNewWin(iUrl);
  };
  const onJump = (_data: DcSystemConfRespVO) => {
    let iUrl = _data.confValue + "";
    if (_data.type == "pdf") {
      iUrl = window.origin + iUrl;
    } else {
      if (iUrl.indexOf("https://") == -1 && iUrl.indexOf("http://") == -1) {
        iUrl = window.origin + "/static/quick-start" + iUrl;
      }
    }
    openNewWin(iUrl);
  };
  sysConfigContactUs = sysConfigContactUs.filter((item) => {
    return item.confValue !== "";
  });
  sysConfigTecSupport = sysConfigTecSupport.filter((item) => {
    return item.confValue !== "";
  });
  return (
    <>
      <div id="Documentation" className="pt-2">
        {/* <p className="text-xl lg:text-4xl font-bold">{t("Video Tutorial")}</p>
        <div className="lg:grid grid-cols-3 gap-4 pt-6">
          {iframeList.map((item, index) => {
            return item.url ? (
              <iframe
                key={index}
                className={["border-0 z-0 w-full h-80 lg:mx-10"].join(" ")}
                src={item.url}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <div></div>
            );
          })}
        </div> */}
        <p className="text-xl lg:text-4xl font-bold">{t("Website_013")}</p>
        <div className="grid grid-cols gap-x-4 lg:flex pt-6">
          {technicalList.map((item) => {
            return (
              <div
                key={"technicalList" + item.id}
                className="lg:flex-auto flex items-center  cursor-pointer hover:text-theme my-6 lg:my-10"
                onClick={() => {
                  if (item.url) {
                    onJump1(item);
                  }
                }}
              >
                <div
                  className={"w-16 h-16 lg:w-20 lg:h-20 support-10" + item.id}
                ></div>
                <div className={"flex-1 ml-4"}>
                  <u>
                    <span className="text-base  lg:text-xl ">{item.name}</span>
                  </u>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {children}
      {sysConfigTecSupport.length > 0 ? (
        <div id="TechnicalSupport" className="pt-6">
          <p className="text-xl lg:text-4xl font-bold pt-10 lg:pt-16">
            {t("Website_014")}
          </p>
          <div className="grid grid-cols-3 pt-6 lg:grid-cols-8 lg:pt-12">
            {sysConfigTecSupport.map((item) => {
              return (
                <Fragment key={"supportList" + item.confId}>
                  <div
                    className={[
                      "items-center cursor-pointer transition duration-50 ease-in-out hover:scale-110 text-center hover:text-theme pt-4",
                      item.type == "question" ? "hidden lg:block" : "",
                    ].join(" ")}
                    onClick={() => {
                      if (item.type == "question") {
                        setOpen(true);
                        return;
                      }
                      onJump(item);
                    }}
                  >
                    <div
                      className={
                        "m-auto w-12 h-12 lg:w-20 lg:h-20 support-20-" +
                        item.confCode
                      }
                    ></div>
                    <div className="text-base lg:text-2xl pt-4 lg:pt-10">
                      {item.confCode}
                    </div>
                  </div>

                  <Link href={"/main/question-dialog"}>
                    <div
                      className={[
                        "items-center cursor-pointer transition duration-50 ease-in-out hover:scale-110 text-center hover:text-theme pt-4 lg:hidden",
                        item.type != "question" ? "hidden " : "",
                      ].join(" ")}
                    >
                      <div
                        className={
                          "m-auto w-12 h-12 lg:w-24 lg:h-24 support-20-" +
                          item.confCode
                        }
                      ></div>
                      <div className="text-base lg:text-2xl pt-4 lg:pt-10">
                        {item.confCode}
                      </div>
                    </div>
                  </Link>
                </Fragment>
              );
            })}
          </div>
        </div>
      ) : null}
      {sysConfigContactUs.length > 0 ? (
        <div id="ContactUs" className="pt-4">
          <p className="text-xl lg:text-4xl font-bold pt-10 lg:pt-14">
            {t("Website_015")}
          </p>
          <div className="pt-4">
            {sysConfigContactUs.map((item) => {
              return (
                <div
                  key={"contactList" + item.confId}
                  className={
                    "flex items-center pt-6 lg:pt-10 text-[#767676]" +
                    (item.confCode == "email" ? "cursor-pointer" : "")
                  }
                >
                  <div
                    className={
                      "w-4 h-4 lg:w-6 lg:h-6 support-40-" + item.confCode
                    }
                  ></div>
                  <div className={"flex-1 ml-4 text-base"}>
                    {item.confCode == "email" ? (
                      <a
                        className=" text-theme hover:text-theme"
                        href={"mailto:" + item.confValue}
                      >
                        {item.confValue}
                      </a>
                    ) : (
                      <div>{item.confValue}</div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </>
  );
}
