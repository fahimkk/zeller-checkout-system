import { PricingRuleInterface } from "../interfaces/pricingRule.interface";
import { Product } from "../models/product.model";

// Key - Product sku :: value - pricing rule
export const pricingRules: PricingRuleInterface = {
    atv: (items: Product[]): number => {
        const atvItems = items.filter(item => item.sku === 'atv')
        if (atvItems.length === 0) return 0;
        const freeAtvCount = Math.floor(atvItems.length / 3) // Every 3rd atv is free
        const payableAtvCount = atvItems.length - freeAtvCount
        return payableAtvCount * atvItems[0].price 
    },
    ipd: (items: Product[]): number => {
        const ipadItems = items.filter(item => item.sku === 'ipd')
        if (ipadItems.length === 0) return 0;
        const ipadPrice = ipadItems.length > 4 ? 499.99 : ipadItems[0].price  
        return ipadItems.length * ipadPrice
    }
}