import { IconType } from "react-icons"

 export type CardProps = {
    total: number,
    icon: IconType,
    info: string,
    bgColor?: string,
    iconBgColor?: string,
    textColor?: string,
    smallText?: string,
 }