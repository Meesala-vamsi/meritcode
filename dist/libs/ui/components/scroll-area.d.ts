/// <reference types="react" />
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
export declare const ScrollArea: import("react").ForwardRefExoticComponent<Omit<ScrollAreaPrimitive.ScrollAreaProps & import("react").RefAttributes<HTMLDivElement>, "ref"> & {
    hideScrollbar?: boolean | undefined;
    orientation?: "horizontal" | "vertical" | undefined;
} & import("react").RefAttributes<HTMLDivElement>>;
export declare const ScrollBar: import("react").ForwardRefExoticComponent<Omit<ScrollAreaPrimitive.ScrollAreaScrollbarProps & import("react").RefAttributes<HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
