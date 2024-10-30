import { Toaster } from "react-hot-toast";
import { useState } from "react";
import searchImagesForTopic from "./search-img-api.js";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader.jsx";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage.jsx";
import LoadMoreButton from "./components/LoadMoreBtn/LoadMoreBtn.jsx";
import ImageModal from "./components/ImageModal/ImageModal.jsx";
import Modal from "react-modal";
import "./App.css";

function App() {
  const [serverData, setServerData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [topic, setTopic] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  Modal.setAppElement("#root");

  const openModal = (imageUrl) => {
    setCurrentImage(imageUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentImage(null);
  };

  const submitFu = async (newTopic) => {
    try {
      setPage(1);
      setError(false);
      setLoader(true);
      setTopic(newTopic);

      const data = await searchImagesForTopic(newTopic, 1);
      setServerData(data);
    } catch {
      setError(true);
    } finally {
      setLoader(false);
    }
  };

  const loadMoreFu = async () => {
    try {
      setLoader(true);
      const nextPage = page + 1;

      const data = await searchImagesForTopic(topic, nextPage);
      setPage(nextPage);
      setServerData((prev) => [...prev, ...data]);
    } catch {
      setError(true);
    } finally {
      setLoader(false);
    }
  };

  return (
    <>
      <SearchBar onSubmit={submitFu} />
      <Toaster />
      {serverData.length > 0 && (
        <ImageGallery galleryList={serverData} openModalFu={openModal} />
      )}
      {serverData.length > 0 && !loader && (
        <LoadMoreButton loadMoreFu={loadMoreFu} />
      )}
      {error && <ErrorMessage />}
      {loader && <Loader />}
      {modalIsOpen && (
        <ImageModal
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          currentImage={currentImage}
        />
      )}
    </>
  );
}

export default App;
