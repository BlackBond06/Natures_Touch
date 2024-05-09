"use client";
import classNames from "classnames";
import { forwardRef, useRef, useState } from "react";

export interface TextInputControlPropsNoLabel {
  setOpen?: (value:boolean) => void;
  setFocused?: (value:boolean) => void;
  name?: string;
  placeholder?: string;
  className?: string;
}

export interface TextInputControlProps extends TextInputControlPropsNoLabel {
  label?: string;
}

export const TextInputControl = forwardRef<
  HTMLInputElement,
  TextInputControlProps
>(
  (
    {
      setOpen,
      label,
      name,
      className,
      placeholder,
    },
    ref,
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    let inputType = "text";
    const openSearchBox = () =>{
      setOpen?.(true);
      inputRef?.current?.blur()
    }
    const input = (
      <div className="relative">
        <input
          type={inputType}
          ref={inputRef}
          className={classNames(className)}
          placeholder={placeholder}
          onClick={
            openSearchBox
          }
          name={name}
        />
      </div>
    );

    if (label) {
      return (
        <label>
          <span>{label}</span>
          {input}
        </label>
      );
    }

    return input;
  },
);
