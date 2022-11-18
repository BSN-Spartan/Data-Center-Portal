import { useState } from "react";
import { useHook } from "../useHook";
import { classNames } from "@/utils";
import { RadioGroup } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import pay134557 from "@/public/web-images/pay-134557.png";
import pay134546 from "@/public/web-images/pay-134546.png";
import Image from "next/image";
import { PaymentTypeRespVo } from "@/lib/models";

const TARadioGroup = ({
  selected,
  setSelected,
  mailingLists,
}: {
  selected: PaymentTypeRespVo;
  setSelected: (_val: PaymentTypeRespVo) => void;
  mailingLists: Array<PaymentTypeRespVo>;
}) => {
  const { t } = useHook(["website"]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedMailingLists, setSelectedMailingLists] =
    useState<PaymentTypeRespVo>(mailingLists[0]);
  return (
    <RadioGroup
      value={selected}
      onChange={(e: PaymentTypeRespVo) => {
        setSelectedMailingLists(() => {
          setSelected(e);
          return e;
        });
      }}
    >
      <RadioGroup.Label className="font-medium text-gray-900">
        {t("Website_049")}
      </RadioGroup.Label>

      <div className="mt-2 grid grid-cols-1 gap-y-6 mxl:grid-cols-3 sm:gap-x-4">
        {mailingLists.map((mailingList) => (
          <RadioGroup.Option
            key={mailingList.paymentTypeId}
            value={mailingList}
            className="cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none"
          >
            {({ checked, active }) => (
              <div
                className={classNames(
                  checked ? "border-transparent" : "border-gray-300",
                  active ? "border-indigo-500 ring-2 ring-indigo-500" : "",
                  "relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none"
                )}
              >
                <div className="flex flex-1">
                  <RadioGroup.Label
                    as="div"
                    className="text-sm px-2 font-medium text-gray-900 absolute -top-3 bg-white z-[1]"
                  >
                    {mailingList.payChannelName}
                  </RadioGroup.Label>
                  <div className="flex flex-1 flex-col h-8">
                    <RadioGroup.Description
                      as="div"
                      className="mt-1 flex flex-1 items-center text-sm text-gray-500 relative"
                    >
                      {mailingList.payType === 3 ? (
                        <div>{t("Website_050")}</div>
                      ) : (
                        <Image
                          src={
                            mailingList.payType === 1 ? pay134557 : pay134546
                          }
                          className="w-full"
                          layout="fill"
                          objectFit="contain"
                          alt=""
                        />
                      )}
                    </RadioGroup.Description>
                  </div>
                </div>
                <CheckCircleIcon
                  className={classNames(
                    !checked ? "invisible" : "",
                    "h-5 w-5 text-indigo-600"
                  )}
                  aria-hidden="true"
                />
                <span
                  className={classNames(
                    active ? "border" : "border-2",
                    checked ? "border-indigo-500" : "border-transparent",
                    "pointer-events-none absolute -inset-px rounded-lg"
                  )}
                  aria-hidden="true"
                />
              </div>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
};

export default TARadioGroup;
