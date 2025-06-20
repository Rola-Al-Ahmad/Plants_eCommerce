import React, { useCallback } from "react";

const LoadActions = ({
  initiallyVisible,
  visibleCount,
  setVisibleCount,
  products,
}) => {
  const handleLoadMore = useCallback(() => {
    setVisibleCount((prev) => Math.min(prev + 4, products.length));
  }, [setVisibleCount, products.length]);

  const handleLoadLess = useCallback(() => {
    setVisibleCount(initiallyVisible);
  }, [setVisibleCount, initiallyVisible]);
  return (
    <div className="row">
      <div className="col-lg-12 d-flex justify-content-center py-5">
        {visibleCount < products.length ? (
          <button
            onClick={handleLoadMore}
            className="btn btn-success load-more-product text-uppercase"
          >
            Load More
          </button>
        ) : (
          <button
            onClick={handleLoadLess}
            className="btn btn-success load-more-product text-uppercase"
          >
            Load Less
          </button>
        )}
      </div>
    </div>
  );
};

export default React.memo(LoadActions);
