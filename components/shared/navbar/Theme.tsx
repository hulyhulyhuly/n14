"use client";

import React from "react";
import Image from "next/image";

import { useTheme } from "@/context/ThemeProvider";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { themes } from "@/constants";

const Theme = () => {
  const { mode, setMode } = useTheme();

  return (
    <Menubar className="relative border-none bg-transparent shadow-none">
      <MenubarMenu>
        <MenubarTrigger className="focus:bg-light-900 data-[state=open]:bg-light-900 dark:focus:bg-dark-200 dark:data-[state=open]:bg-dark-200">
          <Image
            alt={mode === "light" ? "sun" : "moon"}
            src={`/assets/icons/${mode === "light" ? "sun" : "moon"}.svg`}
            width={24}
            height={24}
            className="active-theme"
          />
        </MenubarTrigger>

        <MenubarContent className="absolute right-[-3rem] mt-3 min-w-[120px] rounded border py-2 dark:border-dark-400 dark:bg-dark-300">
          {themes.map((t) => (
            <MenubarItem
              key={t.value}
              onClick={() => {
                setMode(t.value);
                localStorage.setItem("theme", t.value);
              }}
              className="flex items-center gap-4 px-2.5 py-2 dark:focus:bg-dark-400"
            >
              <Image
                alt={t.value}
                src={t.icon}
                width={16}
                height={16}
                className={`${mode === t.value && "active-theme"}`}
              />
              <p
                className={`body-semibold text-light-500 ${
                  mode === t.value
                    ? "text-primary-500"
                    : "text-dark100_light900"
                }`}
              >
                {t.label}
              </p>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default Theme;
