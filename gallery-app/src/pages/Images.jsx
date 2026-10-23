import { useState, useEffect } from "react";
import ImagePreview from "../components/ImagePreview";
import axios from "axios";

const Images = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [error, setError] = useState(null);
  const [lastFile, setLastFile] = useState(null);
  const [loaderClass, setLoaderClass] = useState(true);

  const fetchImages = async (after = "") => {
    const location = localStorage.getItem("location");
    const token = localStorage.getItem("token");

    setLoaderClass(true);

    const response = await axios.get(
      `https://myxfwc9qnl.execute-api.ap-south-1.amazonaws.com/dev/fetch-sign-url?path=${location}&after=${after}`,
      {
        headers: {
          Authorization: `${token}`, // Set token in headers
        },
      }
    );

    const urls = response.data.data.map((img) => ({ url: img.url }));
    setLastFile(response.data.data[response.data.data.length - 1].key);

    setImages(urls);

    setTimeout(() => {
      setLoaderClass(false);
    }, 5000);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  

  const callNext = () => {
    fetchImages(lastFile);
    setLastFile("")
    setImages([]);
  };

  if (error) return <p>{error}</p>;

  return (
    // <div className="image-container">
    //   <div className="image-list">
    //     {images.map((img, index) => (
    //       <div
    //         key={index}
    //         className={loaderClass ? "image-skeleton" : "image-item"}
    //         onClick={() => {
    //           setSelectedImage(img.url);
    //           setSelectedImageIndex(index);
    //         }}
    //       >
    //         {/* Missing image added here */}
    //         <img
    //           src={`${img.url}`}
    //           alt={`Image ${index}`}
    //           className={loaderClass ? "d-none" : "thumbnail"}
    //           loading="lazy"
    //         />
    //       </div>
    //     ))}
    //     <button className="mt-5" onClick={callNext}>
    //       Next
    //     </button>
    //   </div>
    //   <div>
    //   </div>

    //   {/* Render ImagePreview component when an image is selected */}
    //   {selectedImage && (
    //     <ImagePreview
    //       images={images}
    //       selectedImage={selectedImage}
    //       setSelectedImage={setSelectedImage}
    //       selectedImageIndex={selectedImageIndex}
    //       setSelectedImageIndex={setSelectedImageIndex}
    //     />
    //   )}
    // </div>

    <div className="container-fluid bg-dark text-white flex-column">
      {/* Image list with scrollbar */}
      <div className="row flex-grow-1 overflow-auto py-3">
        {images.map((img, index) => (
          <div
            key={index}
            className="col-lg-2 col-md-4 col-sm-6 justify-content-center"
          >
            <div
              className={loaderClass ? "image-skeleton" : ""}
              onClick={() => {
                setSelectedImage(img.url);
                setSelectedImageIndex(index);
              }}
            >
              {/* Image */}
              {!loaderClass && (
                <img
                  src={img.url}
                  alt={`Image ${index}`}
                  className="thumbnail mx-2 my-2"
                  loading="lazy"
                />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Button row */}
      <div className="row bg-dark text-white py-3">
        <div className="col-12 text-center">
          <button className="btn btn-primary" onClick={callNext}>Next</button>
        </div>
      </div>

      {selectedImage && (
        <ImagePreview
          images={images}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          selectedImageIndex={selectedImageIndex}
          setSelectedImageIndex={setSelectedImageIndex}
        />
      )}
    </div>
  );
};

export default Images;
