import { useEffect, useState, useRef } from "react";

const ImagePreview = ({
  images,
  selectedImage,
  setSelectedImage,
  selectedImageIndex,
  setSelectedImageIndex,
}) => {
  const [isAutoplaying, setIsAutoplaying] = useState(false);
  const intervalRef = useRef(null); // Store the interval ID

  const handlePrev = () => {
    const prevIndex =
      selectedImageIndex > 0 ? selectedImageIndex - 1 : images.length - 1;
    setSelectedImage(images[prevIndex].url);
    setSelectedImageIndex(prevIndex);
  };

  const handleNext = () => {
    const nextIndex = (selectedImageIndex + 1) % images.length;
    setSelectedImage(images[nextIndex].url);
    setSelectedImageIndex(nextIndex);
  };

  const startPreview = () => {
    if (!isAutoplaying) {
      setIsAutoplaying(true);
    }
  };

  const stopPreview = () => {
    setIsAutoplaying(false);
  };

  const handleDownload = async () => {
    try {
      const response = await fetch(selectedImage, {
        method: 'GET',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/octet-stream',
        },
      });
  
      if (!response.ok) {
        throw new Error(`Failed to download image: ${response.statusText}`);
      }
  
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `image-${selectedImageIndex}.jpg`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading image:', error);
    }
  };
  

  useEffect(() => {
    if (isAutoplaying) {
      intervalRef.current = setInterval(() => {
        const nextIndex = (selectedImageIndex + 1) % images.length;
        setSelectedImage(images[nextIndex].url);
        setSelectedImageIndex(nextIndex);
      }, 2000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current); // Cleanup on unmount
  }, [isAutoplaying, selectedImageIndex, images]);

  return (
    // <div className="overlay">
    //   <button className="preview-btn" onClick={startPreview}>Preview</button>
    //   <button className="stop-btn" onClick={stopPreview}>Stop</button>
    //   <button className="close-btn" onClick={() => setSelectedImage(null)}>X</button>
    //   <button className="nav-btn left" onClick={handlePrev}></button>
    //   <img className="preview-img" src={selectedImage} alt="Preview" />
    //   <button className="nav-btn right" onClick={handleNext}></button>
    // </div>

    <div>
      <div className="overlay fullscreen">
        {/* Top Controls */}
        <div className="position-absolute top-0 start-0 w-100 d-flex justify-content-between p-3">
          <div>
            {!isAutoplaying ? (
              <button className="btn btn-light me-2" onClick={startPreview}>
                Autoplay
              </button>
            ) : (
              <button className="btn btn-warning me-2" onClick={stopPreview}>
                Stop Autoplay
              </button>
            )}
          </div>
          <div>
            {!isAutoplaying && (
              <button
                className="btn btn-danger me-2"
                onClick={() => setSelectedImage(null)}
              >
                Close
              </button>
            )}

            {/* {!isAutoplaying && (
              <button
  className="btn btn-primary"
  onClick={handleDownload}
>
  Download
</button>
            )} */}
          </div>
        </div>

        {/* Left Arrow */}

        {!isAutoplaying && (
        <button className="nav-btn left-arrow" onClick={handlePrev}>
          &#10094;
        </button>
        )}


        {/* Image Preview */}
        <img
          src={selectedImage}
          alt="Preview"
          className={`preview-img ${isAutoplaying ? "fullscreen-img" : ""}`}
        />

        {/* Right Arrow */}

        {!isAutoplaying && (
        <button className="nav-btn right-arrow" onClick={handleNext}>
          &#10095;
        </button>
        )}
      </div>
    </div>
  );
};

export default ImagePreview;
