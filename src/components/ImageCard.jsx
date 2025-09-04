// src/components/ImageCard.jsx
export default function ImageCard({ url, tags, onTagClick }) {
  return (
    <div className="border rounded-lg p-2 shadow-sm">
      <img src={url} alt="placeholder" className="w-full h-auto rounded-md" />
      <div className="flex flex-wrap mt-2 gap-2">
        {tags.map((tag, i) => (
          <span
            key={i}
            onClick={() => onTagClick(tag)}
            className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded cursor-pointer hover:bg-blue-200"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
