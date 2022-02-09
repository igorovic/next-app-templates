import { LineItem } from "@chec/commerce.js/types/line-item";
import { Article } from "types/Article";

export function product2Article(items: LineItem[]): Article[] {
  return items.map((item) => ({
    id: item.id,
    name: item.name,
    price: item.price.raw * 100,
    quantity: item.quantity,
  }));
}
