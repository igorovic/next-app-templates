import { LineItem } from "@chec/commerce.js/types/line-item";

interface Props {
  items: LineItem[];
}

export default function CartItems({ items }: Props) {
  return (
    <div className="grid">
      {items.map((item, index) => (
        <div key={`item-${index}`} className="flex gap-4">
          <span>{item.name}</span>
          <span>{item.quantity}</span>
        </div>
      ))}
    </div>
  );
}
