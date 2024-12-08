import * as React from "react";
import { MainMenuItem, PreferenceMenuItem } from "../types";

interface SidebarMenuItemProps {
  item: MainMenuItem | PreferenceMenuItem;
  toggleImage?: string;
}

export const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({
  item,
  toggleImage,
}) => {
  const baseClasses = "flex gap-3 items-center";
  const activeClasses = item.isActive ? "text-white" : "text-slate-400";

  return (
    <div className={`${baseClasses} ${activeClasses}`}>
      <img
        loading="lazy"
        src={item.icon}
        alt=""
        className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
      />
      <div className="self-stretch my-auto">{item.label}</div>
      {toggleImage && (
        <img
          loading="lazy"
          src={toggleImage}
          alt=""
          className="object-contain shrink-0 self-stretch my-auto rounded-none aspect-[2] w-[68px]"
        />
      )}
    </div>
  );
};
