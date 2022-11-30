import { Dispatch, Fragment, SetStateAction, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const TASelect = (props: {
  setSelected: Dispatch<SetStateAction<any>>;
  options: Array<{ [arg: string]: any }>;
  optionKey: string;
  selectedChildren?: () => JSX.Element;
  className?: string;
  label?: string | (() => JSX.Element);
  errorText?: string;
  optionLabel?: string;
  optionChildren?: () => JSX.Element;
  multiple?: boolean;
}) => {
  const [selected, setSelected]: any = props?.multiple
    ? // eslint-disable-next-line react-hooks/rules-of-hooks
      useState([props.options[0]])
    : // eslint-disable-next-line react-hooks/rules-of-hooks
      useState(props.options[0]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const setSelectedCallback = (val: unknown) => {
    props.setSelected(val);
  };

  useEffect(() => {
    setSelectedCallback(selected);
  }, [selected, setSelectedCallback]);

  return (
    <div className={props.className}>
      <Listbox
        value={selected}
        onChange={setSelected}
        multiple={props?.multiple}
      >
        {({ open }) => (
          <>
            {props.label ? (
              <Listbox.Label className="block font-medium text-gray-700">
                {typeof props.label === "string" ? props.label : props?.label()}
              </Listbox.Label>
            ) : null}

            <div className="relative">
              <Listbox.Button className="text-sm relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-theme focus:outline-none focus:ring-1 focus:ring-theme h-[2.2rem]">
                <span className="flex items-center">
                  {props.selectedChildren ? (
                    props.selectedChildren()
                  ) : props.multiple ? (
                    <span className="ml-3 block truncate">
                      {selected.map(
                        (item: { [x: string]: string }, index: number) => {
                          return (
                            item[props?.optionLabel || " "] + " "
                          ).replace(")", () => {
                            return selected.length > 1 &&
                              index != selected.length - 1
                              ? "),"
                              : ")";
                          });
                        }
                      )}
                    </span>
                  ) : (
                    <span className="ml-3 block truncate">
                      {selected[props?.optionLabel || " "] + " "}
                    </span>
                  )}
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="h-6 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {props.options.map((option) => (
                    <Listbox.Option
                      key={option[props.optionKey] as string}
                      className={({ active }) =>
                        classNames(
                          active ? "text-white bg-theme" : "text-gray-900",
                          "relative cursor-default select-none py-2 pl-3 pr-9"
                        )
                      }
                      value={option}
                    >
                      {({ selected, active }) => (
                        <>
                          <div className="flex items-center">
                            {props.optionChildren ? (
                              props.optionChildren()
                            ) : (
                              <span
                                className={classNames(
                                  selected ? "font-semibold" : "font-normal",
                                  "ml-3 block truncate py-1"
                                )}
                              >
                                {option[props?.optionLabel || ""] + ""}
                              </span>
                            )}
                          </div>

                          {selected ? (
                            <span
                              className={classNames(
                                active ? "text-white" : "text-theme",
                                "absolute inset-y-0 right-0 flex items-center pr-4"
                              )}
                            >
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </div>
  );
};

export default TASelect;
