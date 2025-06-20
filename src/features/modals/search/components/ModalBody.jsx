import React, { useMemo } from "react";

import useSearch from "../hooks/useSearch";

import SearchInput from "./SearchInput";
import ProductCard from "./ProductCard";

const ModalBody = () => {
  const { searchTerm, handleSearch, filteredProducts } = useSearch();

  // Memoize the rendered product list (to avoid re-mapping on each render)
  const renderedProducts = useMemo(() => {
    if (searchTerm.trim() === "") return null;

    if (filteredProducts.length === 0) {
      return (
        <div className="col-12">
          <p className="text-muted text-center">
            No products match your search.
          </p>
        </div>
      );
    }

    return filteredProducts.map((product) => (
      <ProductCard key={product.id} product={product} />
    ));
  }, [filteredProducts, searchTerm]);

  return (
    <div className="modal-body">
      <SearchInput onChange={handleSearch} />
      <div
        className="show-search-product-wrap row"
        style={{ maxHeight: "400px", overflowY: "auto" }}
      >
        {renderedProducts}
      </div>
    </div>
  );
};

export default React.memo(ModalBody);
