import {ReactNode} from "react";

export interface IButton {
    icon?: ReactNode
    onCLick?: () => void
    color?: string;
    text?: string
    width?: string
    bgColor?: string
}

export interface IOverlayProps {
    onClose?: () => void;
    onOk?: () => void;
    title: string;
}

export interface IDialogProps extends IOverlayProps{
    icon?: ReactNode;
    text: string;
}

export interface IModalProps extends IOverlayProps{
    subTitle?: string
    children: ReactNode;
}