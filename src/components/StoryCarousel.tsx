import React from "react";

const stories = [
  { title: "The little Story Book", img: "/assets/story-1.jpg" },
  { title: "In your own Backyard", img: "/assets/story-2.jpg" },
  { title: "The story of a little Frog", img: "/assets/story-3.jpg" },
  { title: "The little Story Book", img: "/assets/story-1.jpg" },
  { title: "In your own Backyard", img: "/assets/story-2.jpg" },
  { title: "The story of a little Frog", img: "/assets/story-3.jpg" },
];

const StoryCarousel: React.FC = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold">Audio Stories</h3>
        <a className="text-sm text-green-600">Show all →</a>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-2">
        {stories.map((s) => (
          <div key={s.title} className="min-w-[130px]">
            <div className="rounded-lg overflow-hidden shadow-sm">
              <img
                src={s.img}
                alt={s.title}
                className="w-full h-36 object-cover"
              />
            </div>
            <div className="text-sm mt-2">{s.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoryCarousel;
