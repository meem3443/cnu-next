"use client";

import Header from "../../component/layout/Header";
import Footer from "../../component/layout/Footer";
import SearchInput from "../../component/search/SearchInput";
import ProductCart from "../../component/shopping/ProductCart";
import { useUser } from "../../context/UserContext";
import { useEffect } from "react";
import { useSearch } from "../../context/SearchContext";

export default function SearchHome() {
  const { user, setUser } = useUser();
  const { result } = useSearch();

  const [cart, setCart] = useState<{ [productId: string]: number }>({});
  const [showCart, setShowCart] = useState(false);

  //  페이지 최초 렌더링 될 때, setUser로 이름 설정
  useEffect(() => {
    //  학번 + 이름 형태로 작성 (ex. 2025***** 내이름 )
    setUser({
      name: "202202643 조민정",
      userId: "hi1234",
      age: 16,
      phoneNumber: "010-0000-0000"
    });
  }, []);
  useEffect(() => {
    setShowCart(Object.keys(cart).length > 0);
  }, [cart]);

  return (
    <div className="flex justify-center">
      <div className="w-[80%]">
        <Header title={`${user.name} 쇼핑`} />
        <SearchInput />
        <ProductCart items={result} />
      </div>
    </div>
  );
}
