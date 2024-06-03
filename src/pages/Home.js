import { useTitle } from "../hooks/useTitle";
import { ProductCard } from "../components";

export const Home = () => {
  useTitle("Home");

  const products = [
    {
      id: 1,
      name: "Bio Whole Fresh Milk 2L",
      price: 324,
      image: "/assets/images/milk.jpeg",
    },
    {
      id: 2,
      name: "Farm Eggs",
      price: 495,
      image: "/assets/images/Eggs.jpeg",
    },
    {
      id: 3,
      name: "Cheddar Cheese",
      price: 930,
      image: "/assets/images/Cheese.jpeg",
    },
    {
      id: 4,
      name: "Butter",
      price: 943,
      image: "/assets/images/Butter.jpeg",
    },
  ];

  return (
    <main>
      <section className="products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};
