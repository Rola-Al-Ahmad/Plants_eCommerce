import React, { useState } from "react";
import Container from "../../../shared/components/atoms/Container";
import products from "../../../shared/utils/Product";
import ProductCard from "../../../shared/components/molecules/ProductCard";
import LoadActions from "./LoadActions";
import SortBy from "./SortBy";

const Products = () => {
  const initiallyVisible = 8;
  const [visibleCount, setVisibleCount] = useState(initiallyVisible);

  return (
    <Container>
      <div className="row">
        <div className="col-lg-12">
          <div className="product-head d-flex align-items-center justify-content-between">
            <div className="total-product">
              <p>
                Shoping All <strong>Product</strong> for you!
              </p>
            </div>
          </div>
          <SortBy shopCount={products.length} sortBy="Featured" />
        </div>

        <div className="row mt-5 shop-product-wrap" style={{ margin: "auto" }}>
          {products.slice(0, visibleCount).map((product) => (
            <div
              key={product.id}
              className="col-lg-3 col-md-4 col-sm-6 mb-4 shop-product-card"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <LoadActions
          visibleCount={visibleCount}
          setVisibleCount={setVisibleCount}
          initiallyVisible={initiallyVisible}
          products={products}
        />
      </div>
    </Container>
  );
};

export default React.memo(Products);
