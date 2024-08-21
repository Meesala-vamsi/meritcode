/// <reference types="react" />
import * as PanelPrimitive from "react-resizable-panels";
export declare const PanelGroup: import("react").ForwardRefExoticComponent<{
    autoSaveId?: string | null | undefined;
    className?: string | undefined;
    dataAttributes?: import("react-resizable-panels/dist/declarations/src/types").DataAttributes | undefined;
    direction: import("react-resizable-panels/dist/declarations/src/types").Direction;
    id?: string | null | undefined;
    keyboardResizeByPercentage?: number | null | undefined;
    keyboardResizeByPixels?: number | null | undefined;
    onLayout?: PanelPrimitive.PanelGroupOnLayout | null | undefined;
    storage?: PanelPrimitive.PanelGroupStorage | undefined;
    style?: import("react").CSSProperties | undefined;
    tagName?: import("react").ElementType | undefined;
} & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<PanelPrimitive.ImperativePanelGroupHandle>>;
export declare const Panel: import("react").ForwardRefExoticComponent<{
    className?: string | undefined;
    collapsedSizePercentage?: number | undefined;
    collapsedSizePixels?: number | undefined;
    collapsible?: boolean | undefined;
    dataAttributes?: import("react-resizable-panels/dist/declarations/src/types").DataAttributes | undefined;
    defaultSizePercentage?: number | undefined;
    defaultSizePixels?: number | undefined;
    id?: string | undefined;
    maxSizePercentage?: number | undefined;
    maxSizePixels?: number | undefined;
    minSizePercentage?: number | undefined;
    minSizePixels?: number | undefined;
    onCollapse?: PanelPrimitive.PanelOnCollapse | undefined;
    onExpand?: PanelPrimitive.PanelOnExpand | undefined;
    onResize?: PanelPrimitive.PanelOnResize | undefined;
    order?: number | undefined;
    style?: object | undefined;
    tagName?: import("react").ElementType | undefined;
} & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<PanelPrimitive.ImperativePanelHandle>>;
type PanelResizeHandleProps = React.ComponentProps<typeof PanelPrimitive.PanelResizeHandle> & {
    isDragging?: boolean;
};
export declare const PanelResizeHandle: ({ className, isDragging, onDragging, ...props }: PanelResizeHandleProps) => import("react/jsx-runtime").JSX.Element;
export {};
