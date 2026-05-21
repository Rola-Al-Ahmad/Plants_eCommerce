import productsData from "./Product.json";
import { publicAssetUrl } from "./publicAssetUrl";

export default productsData.map(({ image, secondImage, ...product }) => ({
  ...product,
  image: publicAssetUrl(image),
  secondImage: publicAssetUrl(secondImage),
}));
