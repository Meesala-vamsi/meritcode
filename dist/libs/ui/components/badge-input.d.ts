/// <reference types="react" />
import { InputProps } from "./input";
export declare const BadgeInput: import("react").ForwardRefExoticComponent<Omit<InputProps, "onChange" | "value"> & {
    value: string[];
    onChange: (value: string[]) => void;
} & import("react").RefAttributes<HTMLInputElement>>;
