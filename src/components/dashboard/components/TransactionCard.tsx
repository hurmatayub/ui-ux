import * as React from "react";
import { TransactionItem } from "../types";

interface TransactionCardProps {
  transaction: TransactionItem;
}

export const TransactionCard: React.FC<TransactionCardProps> = ({
  transaction,
}) => {
  return (
    <div className="flex gap-5 justify-between w-full rounded-none max-w-[476px]">
      <div className="flex gap-4">
        <img
          loading="lazy"
          src={transaction.image}
          alt={transaction.name}
          className="object-contain shrink-0 max-w-full rounded-lg aspect-[1.89] w-[132px]"
        />
        <div className="flex flex-col my-auto">
          <div className="text-base font-bold tracking-tight text-gray-900">
            {transaction.name}
          </div>
          <div className="gap-2 self-stretch mt-2 max-w-full text-xs font-medium tracking-tight text-slate-400 w-[108px]">
            {transaction.type}
          </div>
        </div>
      </div>
      <div className="flex flex-col my-auto text-right">
        <div className="gap-2 self-stretch max-w-full text-xs font-medium tracking-tight text-slate-400 w-[108px]">
          {transaction.date}
        </div>
        <div className="mt-2 text-base font-bold tracking-tight text-gray-900">
          {transaction.price}
        </div>
      </div>
    </div>
  );
};
