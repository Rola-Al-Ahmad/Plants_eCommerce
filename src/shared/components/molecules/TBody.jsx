import React from "react";
import RFTButton from "../atoms/RFTButton";

function TBody({ children }) {
  return <tbody>{children}</tbody>;
}

TBody.ProductName = React.memo(function ProductName({ children }) {
  return <p className="product-name wl-name m-0">{children}</p>;
});

TBody.ProductDescription = React.memo(function ProductDescription({
  children,
}) {
  return (
    <p className="mb-0 text-muted wl-name" style={{ fontSize: "14px" }}>
      {children || "Description Not Available"}
    </p>
  );
});

TBody.ProductPrice = React.memo(function ProductPrice({ children }) {
  return <td className="wl-name fs-6">${children}</td>;
});

TBody.ProductImage = React.memo(function ProductImage({ product }) {
  return (
    <div>
      <img
        src={product.image}
        className="border rounded table-img"
        alt={`${product.name}-image`}
        style={{
          width: "80px",
          height: "80px",
          objectFit: "cover",
        }}
      />
    </div>
  );
});

TBody.ProductStock = React.memo(function ProductStock() {
  return <td className="text-success hide-element">In Stock</td>;
});

TBody.ProductSubTotal = React.memo(function ProductSubTotal({ product }) {
  return (
    <td>
      <span>${(product.price * product.quantity).toFixed(2)}</span>
    </td>
  );
});

TBody.AddToCart = React.memo(function AddToCart({ onClick }) {
  return (
    <td>
      <button className="btn btn-success wl-btn table-btn" onClick={onClick}>
        <span>
          <i className="bi bi-cart-plus"></i>
        </span>
      </button>
    </td>
  );
});

TBody.RemoveFromTable = React.memo(function RemoveFromTable({ onClick }) {
  return (
    <td>
      <RFTButton onClick={onClick} />
    </td>
  );
});

TBody.QuantityInput = React.memo(function QuantityInput({
  onChange,
  quantity,
}) {
  return (
    <td className="quantity-input ">
      <input
        name="quantity"
        type="number"
        className="form-control mx-auto"
        value={quantity}
        min="1"
        onChange={onChange}
      />
    </td>
  );
});

TBody.ProductQuantity = React.memo(function ProductQuantity({ children }) {
  return <td className="wl-name fs-6">{children}</td>;
});

export default TBody;
