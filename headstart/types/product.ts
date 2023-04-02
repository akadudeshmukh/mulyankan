import { type } from "os"

export type Product = {
    id?: string,
    title?: string,
    description?: string,
    price?: string,
    discountPercentage?: string,
    rating?: string,
    stock?: string,
    brand?: string,
    category?: string,
    thumbnail?: string,
    images?: string[]
}

export type AddToCartRequest = {
    id: number,
    quantity: number
}

export type AddToCartResponse = {
    id: string,
    products: CartLineItem[],
    total: number,
    discountedTotal: number,
    userId: string,
    totalProducts: string,
    totalQuantity: string
}

export type CartLineItem = {
    id: string,
    title: string,
    price: string,
    quantity: string,
    total: string,
    discountPercentage: string,
    discountedPrice: string,
    image?: string
}