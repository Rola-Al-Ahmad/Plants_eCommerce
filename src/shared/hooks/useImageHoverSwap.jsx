import { useCallback } from "react";

const useImageHoverSwap = (prefix, items) => {
  const onMouseEnter = useCallback(
    (index) => {
      const img = document.getElementById(`${prefix}-${index}`);
      if (img) img.src = items[index].imageHover || items[index].imageWhite;
    },
    [prefix, items]
  );

  const onMouseLeave = useCallback(
    (index) => {
      const img = document.getElementById(`${prefix}-${index}`);
      if (img) img.src = items[index].image;
    },
    [prefix, items]
  );

  return { onMouseEnter, onMouseLeave };
};

export default useImageHoverSwap;
