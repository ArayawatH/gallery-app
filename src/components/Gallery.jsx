// src/components/Gallery.jsx
import { useState, useRef, useEffect, useCallback } from "react";
import ImageCard from "./ImageCard";
import { images } from "../data/images";

export default function Gallery() {
  const [visible, setVisible] = useState(6);
  const [selectedTag, setSelectedTag] = useState(null);
  const loadMoreRef = useRef(null);

  const filteredImages = selectedTag
    ? images.filter((img) => img.tags.includes(selectedTag))
    : images;

  const loadMore = useCallback(() => {
    setVisible((prev) => prev + 6);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) loadMore();
      },
      { threshold: 1 }
    );
    if (loadMoreRef.current) observer.observe(loadMoreRef.current);
    return () => observer.disconnect();
  }, [loadMore]);

  return (
    <div>
      {selectedTag && (
        <div style={{ marginBottom: "16px" }}>
          <span style={{ fontWeight: "bold" }}>Filtered by: </span>
          <span
            style={{
              background: "#fff5cc",
              padding: "4px 8px",
              borderRadius: "4px",
            }}
          >
            {selectedTag}
          </span>
          <button
            onClick={() => setSelectedTag(null)}
            style={{
              marginLeft: "8px",
              color: "red",
              textDecoration: "underline",
              cursor: "pointer",
              background: "none",
              border: "none",
            }}
          >
            Clear
          </button>
        </div>
      )}

      {/* ✅ ใช้ class gallery ของเราเอง */}
      <div className="gallery">
        {filteredImages.slice(0, visible).map((img) => (
          <ImageCard
            key={img.id}
            url={img.url}
            tags={img.tags}
            onTagClick={(tag) => setSelectedTag(tag)}
          />
        ))}
      </div>

      <div ref={loadMoreRef} style={{ height: "40px" }}></div>
    </div>
  );
}
