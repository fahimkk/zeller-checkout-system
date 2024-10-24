import { Product } from "../models/product.model";

export interface PricingRuleInterface {
    [key: string ]: (items: Product[]) => number;
}

