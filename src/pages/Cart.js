import { useTitle } from "../hooks/useTitle";
import { CartCard } from "../components";

export const Cart = () => {
  useTitle("Cart");

  const products = [
    {
      id: 1,
      name: "Drinking Chocolate",
      price: 592,
      image: "/assets/images/Drinking-chocolate.jpeg",
    },
    {
      id: 2,
      name: "Soko Atta-Mark 1 Flour",
      price: 174,
      image: "/assets/images/soko-ugali.jpeg",
    },
  ];

  return (
    <main>
      <section className="cart">
        <h1>Cart Items: {products.length}</h1>
        {products.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};
