import * as React from "react";
import { CarStatistic } from "../types";

interface StatisticItemProps {
  statistic: CarStatistic;
}

export const StatisticItem: React.FC<StatisticItemProps> = ({ statistic }) => {
  return (
    <div className="flex gap-9 items-center">
      <div className="flex gap-3 items-center self-stretch my-auto text-justify text-slate-400">
        <div
          className={`flex shrink-0 self-stretch my-auto w-3 h-3 ${statistic.color} rounded-[70px]`}
        />
        <div className="self-stretch my-auto w-[100px]">{statistic.type}</div>
      </div>
      <div className="self-stretch my-auto leading-5 text-right text-gray-900 w-[72px]">
        {statistic.count.toLocaleString()}
      </div>
    </div>
  );
};
