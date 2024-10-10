import React from "react";
import ProductHeader from "@/components/ProductHeader";
import axios from "axios";

// 상품 상세 정보 페이지 컴포넌트
export default function ProductDetailPage({ message, productInfo }) {
  const headerTitle = "상품 상세 정보 페이지";

  return (
    <div>
      <ProductHeader title={headerTitle}></ProductHeader>
      <div>ProductDetailPage {message}</div>
      <p>{productInfo.name}</p>
    </div>
  );
}

export async function getServerSideProps(context) {
  const id = context.params.productId;
  const response = await axios.get(`http://localhost:4000/products/${id}`);

  return {
    props: { message: "서버에서 보내준 메세지", productInfo: response.data },
  };
}
