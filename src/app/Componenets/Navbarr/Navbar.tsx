"use client";
import * as React from "react";

interface IconProps {
  src: string;
  alt: string;
  className?: string;
}

interface SearchBarProps {
  onSearch?: (value: string) => void;
}

interface NavigationIconsProps {
  icons: IconProps[];
}

const Icon: React.FC<IconProps> = ({ src, alt, className }) => (
  <img
    loading="lazy"
    src={src}
    alt={alt}
    className={`object-contain shrink-0 aspect-square ${className}`}
  />
);

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => (
  <div className="flex flex-wrap flex-auto gap-10 px-5 py-2.5 text-sm font-medium tracking-tight text-justify bg-white border border-solid border-slate-300 border-opacity-40 rounded-[70px] text-[#596780] max-md:max-w-full ">
    <div className="flex gap-5">
      <Icon
        src="/icons/search-normal.png"
        alt="Search icon"
        className="w-6"
      />
      <label htmlFor="searchInput" className="sr-only">
        Search something here
      </label>
      <input
        id="searchInput"
        type="text"
        className="bg-transparent border-none outline-none basis-auto"
        placeholder="Search something here"
        onChange={(e) => onSearch?.(e.target.value)}
      />
    </div>
    <Icon
      src="/icons/filter.png"
      alt="Filter icon"
      className="w-6"
    />
  </div>
);

const NavigationIcons: React.FC<NavigationIconsProps> = ({ icons }) => (
  <div className="flex gap-5 items-start">
    {icons.map((icon, index) => (
      <Icon key={index} {...icon} />
    ))}
  </div>
);

const Navbar: React.FC = () => {
  const navigationIcons = [
    {
      src: "/icons/Like.png",
      alt: "Navigation icon 1",
      className: "w-11 rounded-none",
    },
    {
      src: "/icons/Notification.png",
      alt: "Navigation icon 2",
      className: "w-11 rounded-none",
    },
    {
      src: "/icons/Settings.png",
      alt: "Navigation icon 3",
      className: "w-11 rounded-none",
    },
    {
      src: "/icons/profile.png",
      alt: "Profile icon",
      className: "w-11 rounded-[90px]",
    },
  ];

  return (
    <div className="flex overflow-hidden flex-wrap gap-10 px-12 py-10 bg-white border border-solid border-slate-300 border-opacity-40 max-md:px-5">
      <div className="flex flex-wrap gap-10 max-md:max-w-full">
        <div className="my-auto text-3xl font-bold tracking-tighter text-[#3563E9] basis-auto">
          MORENT
        </div>
        <SearchBar />
      </div>
      <div className="flex-grow"></div>
      <NavigationIcons icons={navigationIcons} />
    </div>
  );
};

export default Navbar;
