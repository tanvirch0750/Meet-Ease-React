import { useState } from 'react';

const ImageGallery = () => {
  const images = [
    'https://pagedone.io/asset/uploads/1700471851.png',
    'https://pagedone.io/asset/uploads/1711514857.png',
    'https://pagedone.io/asset/uploads/1711514875.png',
    'https://pagedone.io/asset/uploads/1711514892.png',
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [isFading, setIsFading] = useState(false); // State to handle animation

  const handleThumbnailClick = (image: any) => {
    if (image !== selectedImage) {
      setIsFading(true); // Trigger fade out
      setTimeout(() => {
        setSelectedImage(image); // Change image after fade out
        setIsFading(false); // Trigger fade in
      }, 100); // Duration of fade out should match the animation time
    }
  };

  return (
    <div className="flex flex-col items-center">
      {/* Main Image Display with Animation */}
      <div className="w-full max-w-full mb-4">
        <img
          src={selectedImage}
          alt="Selected"
          className={`w-full h-[500px] rounded-lg border-2 border-gray-200 object-cover transition-opacity duration-300 ${
            isFading ? 'opacity-0' : 'opacity-100'
          }`}
        />
      </div>

      {/* Thumbnail Section */}
      <div className="grid grid-cols-4 gap-3">
        {images.map((image, index) => (
          <div
            key={index}
            className={`cursor-pointer border-2 rounded-lg overflow-hidden ${
              selectedImage === image ? 'border-indigo-500' : 'border-gray-200'
            }`}
            onClick={() => handleThumbnailClick(image)} // Change the main image on click
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
