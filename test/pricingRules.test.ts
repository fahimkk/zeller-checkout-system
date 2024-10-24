import { PRODUCTS } from "../src/constants/products";
import { pricingRules } from "../src/utils/pricingRules";

describe("Pricing Rules", () => {
    test("Three for tow Apple TV", () => {
        const items = [
            PRODUCTS.atv,
            PRODUCTS.atv,
            PRODUCTS.atv,
            PRODUCTS.atv,
        ] 
        const total = pricingRules['atv']?.(items) || 0
        expect(total).toBe(328.5)
    })
    test('Bulk discount on Super iPad', () => {
        const items = [
            PRODUCTS.ipd,
            PRODUCTS.ipd,
            PRODUCTS.ipd,
            PRODUCTS.ipd,
            PRODUCTS.ipd
        ];
        
        const total = pricingRules['ipd']?.(items) || 0;
        expect(total).toBe(2499.95); 
      });
})