import s from "./ImageCard.module.css";

interface ImageCardProps {
  likes: number;
  smallImg: string;
  largeImg: string;
  alt: string;
  onImageClick: (imgURL: string) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({
  likes,
  smallImg,
  largeImg,
  alt,
  onImageClick,
}) => {
  return (
    <div className={s.cardDiv}>
      <img
        src={smallImg}
        alt={alt}
        className={s.cardImg}
        onClick={() => onImageClick(largeImg)}
      />
      <span className={s.cardDesc}>
        <p className={s.cardDescItem}>Likes: {likes}</p>
        <p className={s.cardDescItem}>{alt}</p>
      </span>
    </div>
  );
};

export default ImageCard;
