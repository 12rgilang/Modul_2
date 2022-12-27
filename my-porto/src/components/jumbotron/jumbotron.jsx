import "./../jumbotron/jumbotron.css";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { useState } from "react";

function ProductImage({ id, onExpand }) {
  return (
    <motion.img
      src={`https://picsum.photos/id/${id}/200/200`}
      alt=""
      onClick={() => onExpand(id)}
      className="related-product-image"
      layoutId={`product-${id}`}
    />
  );
}

export default function Jumbotron() {
  const [productIds, setProductIds] = useState([238, 239, 240]);
  const [primaryProduct, setPrimaryProduct] = useState(237);

  function setAsPrimary(id) {
    const currentProductId = primaryProduct;
    const newProductIds = [
      ...productIds.filter((x) => x !== id),
      currentProductId
    ];

    setPrimaryProduct(id);
    setProductIds(newProductIds);
  }

  return (
    <div className="container w-fit">
      <AnimateSharedLayout type="crossfade">
        <main className="primary-container">
          <AnimatePresence>
            <motion.img
              key={primaryProduct}
              className="primary-product-image"
              src={`https://picsum.photos/id/${primaryProduct}/1280/620`}
              alt=""
              layoutId={`product-${primaryProduct}`}
            />
          </AnimatePresence>
        </main>
        <aside className="product-gallery">
          <AnimatePresence>
            {productIds.map((id) => (
              <ProductImage id={id} key={id} onExpand={setAsPrimary} />
            ))}
          </AnimatePresence>
        </aside>
      </AnimateSharedLayout>
    </div>
  );
}