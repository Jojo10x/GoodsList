import { FC } from "react";
import { ProductInformation, ReviewInformation } from "./lib/types";

interface CardProps {
  product: ProductInformation;
}

const Card: FC<CardProps> = ({ product }) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>
        <b>Производитель</b>: {product.company.name}, {product.company.country}{" "}
        ({product.company.created})
      </p>
      <p>
        <b>Описание</b>: {product.description}
      </p>
      <p>
        <b>Отзыв: </b>
        {product.reviews
          .map((r: ReviewInformation) => `${r.text} (${r.user.name})`)
          .join(", ") || "-"}
      </p>
    </div>
  );
};

export default Card;
