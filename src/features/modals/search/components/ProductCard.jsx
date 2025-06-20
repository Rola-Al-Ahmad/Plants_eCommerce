// import useModalManager from "../../../navbar/hooks/useModalManager";
import { useProductModal } from "../../product/hooks/useProductModal";
import { useModalContext } from "../../shared/hooks/useModalContext";

const ProductCard = ({ product }) => {
  const { handleProductClick } = useProductModal();
  const { showModal } = useModalContext();
  return (
    <>
      <div
        className="mb-2 col-6"
        key={product.id}
        onClick={() => {
          handleProductClick(product);
          showModal("selectedProduct");
        }}
        style={{ cursor: "pointer" }}
      >
        <div className="card h-100 border-0 shadow-sm rounded-3">
          <img
            src={product.image}
            alt={product.name}
            className="card-img-top object-fit-cover"
            style={{ maxHeight: "200px", objectFit: "cover" }}
          />
          <div className="card-body">
            <h6 className="card-title mb-0">{product.name}</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
