import * as React from "react";
import { PaymentMethodProps } from "./types";

export const PaymentMethod: React.FC<PaymentMethodProps> = ({
  icon,
  name,
  logo,
}) => {
  return (
    <div className="flex flex-wrap gap-10 px-8 py-4 mt-6 w-full text-base font-semibold tracking-tight text-gray-900 whitespace-nowrap rounded-xl bg-neutral-100">
      <div className="flex flex-1 gap-5">
        <img
          src={icon}
          alt=""
          className="object-contain shrink-0 w-6 aspect-square"
        />
        <div className="my-auto">{name}</div>
      </div>
      {logo && (
        <img
          src={logo}
          alt=""
          className="object-contain shrink-0 max-w-full aspect-[4.17] w-[100px]"
        />
      )}
    </div>
  );
};
