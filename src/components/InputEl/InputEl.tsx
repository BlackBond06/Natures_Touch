"use client";
import c from "classnames";
import { forwardRef, useState } from "react";

import { Flare } from "../Flare/Flare";
import { TextInputControl } from "./InputControl";
import { SearchIcon } from "@chakra-ui/icons";

export interface SearchBarProps {
  placeholder?: string;
  setOpen?: (value:boolean) => void;
}

export const SearchBarInput = forwardRef<HTMLInputElement, SearchBarProps>(
  (props, ref) => { 
    const [focused, setFocused] = useState(false);
    return (
      <Flare.Base
        className={c({
          "hover:flare-enabled group flex flex-col rounded-[28px] transition-colors sm:flex-row sm:items-center relative sm:w-full w-1/2 hover:text-[#4646ce] sm:border-solid sm:border-2 sm:border-gray-200 dark:border-0 text-gray-400":
            true,
          "bg-transparent dark:bg-[#1e1e32]": !focused,
          // "bg-[#414160]": focused,
        })}
      >
        <Flare.Light
          flareSize={400}
          enabled={focused}
          className="rounded-[28px]"
          backgroundClass={c({
            "transition-colors": true,
            "bg-[#fff] dark:bg-[#1e1e32]": !focused,
            // "bg-[#414160]": focused,
          })}
        />
        <Flare.Child className="flex flex-1 flex-col">
          <div className="absolute bottom-0 right-5 top-0 flex max-h-14 items-center text-search-icon dark:text-white">
            <SearchIcon
              sx={{
                width: "20px",
                height: "20px",
                cursor: "pointer",
              }}
              onClick={() => props.setOpen?.(true)}
            />
          </div>

          <TextInputControl
            ref={ref}
            setOpen = {props.setOpen}
            setFocused={setFocused}
            className="w-full hidden sm:flex flex-1 bg-transparent px-4 py-4 pl-12 text-white placeholder-search-placeholder focus:outline-none sm:py-4 sm:pr-2 text-sm"
            placeholder={props.placeholder}
          />
        </Flare.Child>
      </Flare.Base>
    );
  },
);
