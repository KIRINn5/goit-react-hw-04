import css from "./ImageCard.module.css";

// eslint-disable-next-line react/prop-types
const ImageCard = ({ imageUrl, alt, onClick }) => {
  return (
    <li className={css.card}>
      <div className={css.container}>
        <img
          src={imageUrl}
          alt={alt}
          onClick={onClick}
          width="320"
          height="200"
        />
      </div>
    </li>
  );
};

export default ImageCard;
