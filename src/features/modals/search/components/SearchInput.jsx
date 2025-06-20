import React from "react";

const SearchInput = ({ onChange }) => {
  
  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control border shadow-sm"
        id="search"
        placeholder="Start typing to search for products...."
        required
        onChange={onChange}
      />
    </div>
  );
};

export default React.memo(SearchInput);
