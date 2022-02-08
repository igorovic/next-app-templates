import { commerce } from "lib/commerce";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navigation() {
  const [cartLen, setCartLen] = useState(0);
  const { data, isLoading } = useQuery(
    ["cart"],
    async () => commerce.cart.contents(),
    {
      refetchInterval: 600 * 1000,
    }
  );

  useEffect(() => {
    if (data) {
      console.debug("cart data", data);
      setCartLen(data.length);
    }
  }, [data]);

  return (
    <nav className="mt-4 flex">
      <div className="grow shrink-0"></div>
      <div className="indicator">
        <div className="indicator-item indicator-top indicator-start badge badge-secondary">
          {cartLen}
        </div>
        <Link href={"/cart"} passHref>
          <a>
            <ShoppingCartOutlined
              className="px-4"
              style={{ fontSize: "48px" }}
            />
          </a>
        </Link>
      </div>
    </nav>
  );
}
