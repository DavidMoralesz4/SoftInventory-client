import { ComponentProps } from "react"

export interface IProducts {
    id?: string
    name: string
    description: string
    talla?: number
    stock: string
    image_url: string
    price: number
}

export type CustomButtonProps = ComponentProps<"button">