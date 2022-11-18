import { InputHTMLAttributes } from "react";

const TAInput = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className="flex-1 flex items-center focus-within:z-10">
      <input
        maxLength={props.maxLength}
        {...props}
        onBlur={(event) => {
          props?.onBlur && props?.onBlur(event);
        }}
        className={
          "block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 " +
          props.className
        }
      />
    </div>
  );
};

export default TAInput;
