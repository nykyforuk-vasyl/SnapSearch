import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

type GalleryItem = {
  id: string;
  likes: number;
  alt_description: string;
  urls: {
    regular: string;
    small: string;
  };
};

type ImageGalleryProps = {
  galleryList: GalleryItem[];
  onImageClick: (imgURL: string) => void;
};

const ImageGallery = ({ galleryList, onImageClick }: ImageGalleryProps) => {
  return (
    <>
      <ul className={s.galleryList}>
        {galleryList.map(
          ({ id, likes, alt_description, urls: { regular, small } }) => (
            <li key={id} className={s.galleryCard}>
              <ImageCard
                likes={likes}
                smallImg={small}
                largeImg={regular}
                alt={alt_description}
                onImageClick={onImageClick}
              />
            </li>
          )
        )}
      </ul>
    </>
  );
};

export default ImageGallery;
