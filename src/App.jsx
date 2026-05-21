import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import RootLayout from "./shared/layouts/RootLayout";
import Index from "./features/home/Index";
import About from "./features/about/About";
import Contact from "./features/contact/Contact";
import Shop from "./features/shop/Shop";
import Blog from "./features/blog/Blog";
import Checkout from "./features/checkout/CheckoutIndex";
import CartIndex from "./features/cart/CartIndex";
import WishlistIndex from "./features/wishlist/WishlistIndex";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout title="Leafcraft" />}>
      <Route index element={<Index />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="shop" element={<Shop />} />
      <Route path="blog" element={<Blog />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="cart" element={<CartIndex />} />
      <Route path="wishlist" element={<WishlistIndex />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Route>,
  ),
  { basename: "/Plants_eCommerce/" },
);
