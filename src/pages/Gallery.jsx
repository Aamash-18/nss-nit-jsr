import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');

  // Sample gallery data
  const galleryImages = [
    {
      id: 1,
      src: 'https://via.placeholder.com/600x400',
      alt: 'Blood Donation Camp',
      category: 'events',
      description: 'Students participating in the annual blood donation camp.',
    },
    {
      id: 2,
      src: 'https://via.placeholder.com/600x400',
      alt: 'Tree Plantation Drive',
      category: 'environment',
      description: 'Volunteers planting trees as part of the green initiative.',
    },
    {
      id: 3,
      src: 'https://via.placeholder.com/600x400',
      alt: 'Educational Workshop',
      category: 'education',
      description: 'Teaching basic computer skills to underprivileged children.',
    },
    {
      id: 4,
      src: 'https://via.placeholder.com/600x400',
      alt: 'Cleanliness Drive',
      category: 'environment',
      description: 'NSS volunteers cleaning the local beach area.',
    },
    {
      id: 5,
      src: 'https://via.placeholder.com/600x400',
      alt: 'Health Awareness Camp',
      category: 'health',
      description: 'Free health check-up camp organized in a rural area.',
    },
    {
      id: 6,
      src: 'https://via.placeholder.com/600x400',
      alt: 'Cultural Program',
      category: 'events',
      description: 'Cultural performance during the NSS Annual Day celebration.',
    },
    {
      id: 7,
      src: 'https://via.placeholder.com/600x400',
      alt: 'Yoga Session',
      category: 'health',
      description: 'Morning yoga session conducted for the community.',
    },
    {
      id: 8,
      src: 'https://via.placeholder.com/600x400',
      alt: 'Awareness Rally',
      category: 'events',
      description: 'Rally organized to spread awareness about social issues.',
    },
    {
      id: 9,
      src: 'https://via.placeholder.com/600x400',
      alt: 'Village Outreach',
      category: 'education',
      description: 'Volunteers teaching children in a nearby village.',
    },
  ];

  // Filter images based on selected category
  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === filter);

  // Open image modal
  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  // Close image modal
  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary via-primary/90 to-secondary/80 text-white">
        <div className="absolute inset-0 bg-[url('https://via.placeholder.com/1920x1080')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-md">Our Gallery</h1>
            <p className="text-lg md:text-xl text-white/90">
              Explore the visual journey of our events, activities, and initiatives.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container-custom">
          {/* Filter Tabs */}
          <div className="flex justify-center mb-16 flex-wrap">
            <div className="inline-flex bg-gray-100 dark:bg-gray-800 rounded-full p-1.5 shadow-lg flex-wrap justify-center">
              <motion.button
                onClick={() => setFilter('all')}
                className={`px-6 py-3 m-1 rounded-full transition-all duration-300 ${
                  filter === 'all'
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-md'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                All
              </motion.button>
              <motion.button
                onClick={() => setFilter('events')}
                className={`px-6 py-3 m-1 rounded-full transition-all duration-300 ${
                  filter === 'events'
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-md'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Events
              </motion.button>
              <motion.button
                onClick={() => setFilter('environment')}
                className={`px-6 py-3 m-1 rounded-full transition-all duration-300 ${
                  filter === 'environment'
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-md'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Environment
              </motion.button>
              <motion.button
                onClick={() => setFilter('education')}
                className={`px-6 py-3 m-1 rounded-full transition-all duration-300 ${
                  filter === 'education'
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-md'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Education
              </motion.button>
              <motion.button
                onClick={() => setFilter('health')}
                className={`px-6 py-3 m-1 rounded-full transition-all duration-300 ${
                  filter === 'health'
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-md'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Health
              </motion.button>
            </div>
          </div>

          {/* Gallery Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
            >
              {filteredImages.map((image) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ 
                    scale: 1.03, 
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                  }}
                  className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer group border border-gray-100 dark:border-gray-800"
                  onClick={() => openModal(image)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white font-bold text-xl drop-shadow-md">{image.alt}</h3>
                    <div className="w-12 h-0.5 bg-white/70 my-3"></div>
                    <p className="text-white/90 text-sm drop-shadow-md">{image.description}</p>
                    <div className="mt-4">
                      <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs font-medium">
                        {image.category.charAt(0).toUpperCase() + image.category.slice(1)}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* No Images Message */}
          {filteredImages.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800"
            >
              <svg className="w-20 h-20 text-gray-400 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-3">No images found</h3>
              <div className="w-16 h-1 bg-gradient-to-r from-primary/50 to-secondary/50 rounded-full mx-auto mb-4"></div>
              <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                There are no images in the {filter} category to display at the moment. Please check back later or explore other categories.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
                aria-label="Close modal"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/3 relative">
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="w-full h-auto"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/70 to-transparent md:hidden"></div>
                </div>
                <div className="md:w-1/3 p-8">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{selectedImage.alt}</h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-4"></div>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">{selectedImage.description}</p>
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary dark:text-secondary rounded-full text-sm font-medium">
                    {selectedImage.category.charAt(0).toUpperCase() + selectedImage.category.slice(1)}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Want to Contribute to Our Gallery?
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              If you have captured moments from our events or activities, we'd love to feature them in our gallery. Share your photos with us!
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full shadow-md"
            >
              Submit Photos
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gallery; 