import { PricingRuleInterface } from "../interfaces/pricingRule.interface";
import { Product } from "../models/product.model";

export class Checkout {
    private items: Product[] = [];

    constructor(
        private pricingRules: PricingRuleInterface
    ){}

    scan(item: Product): void {
        this.items.push(item);
    }

    total(): number {
        let total = 0

        Object.values(this.pricingRules).forEach(rule => {
            total += rule(this.items)
        })

        const noDiscountItems = this.items.filter(item => {
            return !Object.keys(this.pricingRules).includes(item.sku)
        })

        total += noDiscountItems.reduce((sum, item) => sum + item.price || 0, 0)

        return total
    }
}