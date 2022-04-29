import { Product } from "./product.models";

export class CartProduct {
    constructor(
        public product: Product,
        public quantity: number,
    ) {}
}