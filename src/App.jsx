// src/App.js
import { useState } from "react";
import { posts as demoPosts } from "./data/posts";
import Post from "./components/Post";
import SearchBar from "./components/SearchBar";
import ImageLightbox from "./components/Lightbox";
import "./App.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [lightbox, setLightbox] = useState({
    open: false,
    images: [],
    startIndex: 0,
  });

  const filteredPosts = demoPosts.filter((post) =>
    post.sender.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleImageClick = (images, index) => {
    setLightbox({ open: true, images, startIndex: index });
  };

  const closeLightbox = () => {
    setLightbox({ open: false, images: [], startIndex: 0 });
  };

  return (
    <div className="app">
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <div className="feed">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <Post key={post.id} post={post} onImageClick={handleImageClick} />
          ))
        ) : (
          <p className="empty-state">No posts match your search criteria.</p>
        )}
      </div>
      <ImageLightbox
        images={lightbox.images}
        open={lightbox.open}
        onClose={closeLightbox}
        startIndex={lightbox.startIndex}
      />
    </div>
  );
};

export default App;
