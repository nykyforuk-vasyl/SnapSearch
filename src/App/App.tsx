import { Toaster } from "react-hot-toast";
import { useState } from "react";
import fetchArticles from "../api";
import SearchBar from "../components/SearchBar/SearchBar";
import ImageGallery from "../components/ImageGallery/ImageGallery";
import Loader from "../components/Loader/Loader";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import LoadMoreButton from "../components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../components/ImageModal/ImageModal";
import Modal from "react-modal";
import { Image } from "../api";
import "./App.css";

function App() {
  const [serverData, setServerData] = useState<Image[]>([]);
  const [loader, setLoader] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [topic, setTopic] = useState<string>("");
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  Modal.setAppElement("#root");

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  const handleSearch = async (newTopic: string): Promise<void> => {
    try {
      setPage(1);
      setError(false);
      setLoader(true);
      setTopic(newTopic);

      const data = await fetchArticles(newTopic, 1);
      setServerData(data);
    } catch {
      setError(true);
    } finally {
      setLoader(false);
    }
  };

  const handleLoadMore = async (): Promise<void> => {
    try {
      setLoader(true);
      const nextPage = page + 1;

      const data = await fetchArticles(topic, nextPage);
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
      <SearchBar onSubmit={handleSearch} />
      <Toaster />
      {serverData.length > 0 && (
        <ImageGallery galleryList={serverData} onImageClick={openModal} />
      )}
      {serverData.length > 0 && !loader && (
        <LoadMoreButton handleClick={handleLoadMore} />
      )}

      {error && <ErrorMessage />}
      {loader && <Loader />}
      {modalIsOpen && (
        <ImageModal
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          selectedImage={selectedImage}
        />
      )}
    </>
  );
}

export default App;
