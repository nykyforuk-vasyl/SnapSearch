import Modal from "react-modal";
import s from "./ImageModal.module.css";

interface ImageModalProps {
  modalIsOpen: boolean;
  closeModal: () => void;
  selectedImage: string | null;
}

const ImageModal: React.FC<ImageModalProps> = ({
  modalIsOpen,
  closeModal,
  selectedImage,
}) => {
  if (!modalIsOpen || selectedImage === null) {
    return null;
  }

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            padding: "0px",
            border: "none",
            backgroundColor: "transparent",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          },
        }}
      >
        <img src={selectedImage} alt="Full-size" className={s.modalImage} />
      </Modal>
    </>
  );
};

export default ImageModal;
