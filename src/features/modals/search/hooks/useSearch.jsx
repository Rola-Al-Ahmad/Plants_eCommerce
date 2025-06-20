import { useState, useCallback, useMemo } from "react";

import products from "../../../../shared/utils/Product";

const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // useCallback to memoize the handleSearch function so it won't recreate on each render
  const handleSearch = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);

  // useMemo to compute filteredProducts only when searchTerm changes
  const filteredProducts = useMemo(() => {
    if (searchTerm.trim() === "") {
      return [];
    }
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);
  return {
    searchTerm,
    handleSearch,
    filteredProducts,
  };
};

export default useSearch;
