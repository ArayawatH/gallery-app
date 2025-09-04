// src/data/images.js
export const images = Array.from({ length: 30 }, (_, i) => {
  const hashtags = ["#nature", "#travel", "#food", "#cat", "#dog", "#city"];
  const randomTags = Array.from(
    { length: Math.floor(Math.random() * 3) + 1 },
    () => hashtags[Math.floor(Math.random() * hashtags.length)]
  );

  return {
    id: i + 1,
    url: `https://placehold.co/${200 + (i % 5) * 50}x${200 + (i % 3) * 40}`,
    tags: [...new Set(randomTags)],
  };
});
