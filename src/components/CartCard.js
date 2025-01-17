import "./CartCard.css";

export const CartCard = ({ product }) => {
  const { name, price, image } = product;

  return (
    <div className="cartCard">
      <img src={image} alt={name} />
      <p className="productName">{name}</p>
      <p className="productPrice">Sh{price}</p>
      <button>Remove</button>
    </div>
  );
};
