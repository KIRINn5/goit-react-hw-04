/* eslint-disable react/prop-types */
import ImageCard from "./ImageCard";
import css from "./ImageGallery.module.css";

// eslint-disable-next-line react/prop-types
const ImageGallery = ({ images, onClick }) => {
  return (
    <ul className={css.imageGallery}>
      {images.map((image) => (
        <ImageCard
          key={image.id}
          imageUrl={image.small}
          alt={image.alt}
          onClick={() => onClick(image)}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
