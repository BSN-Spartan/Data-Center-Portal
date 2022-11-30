import React from "react";
import { useHook } from "../useHook";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";

interface PropTypes {
  className?: string;
  onClick?: () => void;
}

const TAForm = (props: React.PropsWithChildren<PropTypes>) => {
  const { t, getThrottleFn } = useHook(["public"]);
  const onClick = getThrottleFn(() => {
    props.onClick && props.onClick();
  }, 5000);
  return (
    <div
      className={
        props.className + " py-10 lg:py-20 md:px-20 text-sm max-w-7xl mx-auto"
      }
    >
      <form action="" noValidate>
        {props.children}
        {props.onClick ? (
          <div className="mt-10 flex">
            <button
              type="button"
              onClick={onClick}
              className="inline-flex justify-center w-ful rounded-md border border-transparent bg-theme py-2 text-base font-medium text-white shadow-sm hover:bg-theme focus:outline-none focus:ring-0 focus:ring-theme w-full md:w-auto px-20"
            >
              {t("PUB_Confirm")}
            </button>
          </div>
        ) : null}
      </form>
    </div>
  );
};

const TAFormItem = (
  props: React.PropsWithChildren<{
    required?: boolean;
    className?: string;
    label?: string | (() => JSX.Element);
    labelClassName?: string;
    validateStatus?: "error" | "success" | "warning";
    help?: string;
    gasTip?: string;
    addonBefore?: () => JSX.Element;
    addonAfter?: () => JSX.Element;
  }>
) => {
  return (
    <div className={(props?.className || "") + " mb-7"}>
      <div className="w-full flex flex-col">
        <label className="flex flex-col">
          <div className={"pb-1 flex items-center " + props?.labelClassName}>
            {props.required === true ? (
              <div className="text-red-600">{"*"}&nbsp;</div>
            ) : null}
            <div className="flex-1">
              {props.label
                ? typeof props.label === "string"
                  ? props.label
                  : props?.label()
                : null}
            </div>
          </div>
          <div
            className={
              "mt-1 flex flex-1 rounded-md shadow-sm" +
              (props.validateStatus === "error" &&
                " border-red-400 border border-solid")
            }
          >
            {props.addonBefore ? <div>{props.addonBefore()}</div> : null}
            {props.children}
            {props.addonAfter ? (
              <div className="flex items-center">{props.addonAfter()}</div>
            ) : null}
          </div>
        </label>
      </div>
      {props.gasTip && (
        <div className={"text-sm mt-2 leading-5 "}>{props.gasTip}</div>
      )}
      {props.help && (
        <div className={"text-sm mt-2 flex leading-5 "}>
          <ExclamationCircleIcon
            className={
              "w-5 h-5 text-sm mr-1 " +
              {
                error: "text-red-400",
                warning: "text-yellow-400",
                success: "text-green-400",
              }[props?.validateStatus || "error"]
            }
          />
          <div
            className={
              "flex-1 " +
              {
                error: "text-red-600",
                warning: "text-yellow-600",
                success: "text-green-600",
              }[props?.validateStatus || "error"]
            }
          >
            {props.help}
          </div>
        </div>
      )}
    </div>
  );
};

export { TAForm, TAFormItem };
