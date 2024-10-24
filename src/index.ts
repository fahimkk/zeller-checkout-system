import { PRODUCTS } from "./constants/products";
import { Checkout } from "./services/checkout.service";
import { pricingRules } from "./utils/pricingRules";

const co = new Checkout(pricingRules);

co.scan(PRODUCTS.atv);
co.scan(PRODUCTS.atv);
co.scan(PRODUCTS.atv);
co.scan(PRODUCTS.vga);

console.log('Total:', co.total()); 
