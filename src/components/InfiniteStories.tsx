"use client";

import { useState, useRef, useEffect } from "react";
import StoryCard, { Story } from "./StoryCard";

type InfiniteStoriesProps = {
  stories: Story[];
  initialCount?: number;
  batchSize?: number;
};

const InfiniteStories = ({
  stories,
  initialCount = 4,
  batchSize = 4,
}: InfiniteStoriesProps) => {
  const [visibleCount, setVisibleCount] = useState(initialCount);
  const [isLoading, setIsLoading] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const isLoadingRef = useRef(false);

  const hasMore = visibleCount < stories.length;

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoadingRef.current) {
          isLoadingRef.current = true;
          setIsLoading(true);

          setTimeout(() => {
            setVisibleCount((prev) =>
              Math.min(prev + batchSize, stories.length),
            );
            setIsLoading(false);
            isLoadingRef.current = false;
          }, 300);
        }
      },
      { rootMargin: "200px" },
    );

    observer.observe(sentinel);

    return () => observer.disconnect();
  }, [hasMore, batchSize, stories.length]);

  const visibleStories = stories.slice(0, visibleCount);

  return (
    <>
      <section
        aria-label="Featured Stories"
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
      >
        {visibleStories.map((story) => (
          <StoryCard key={story.id} {...story} />
        ))}
      </section>

      {hasMore && (
        <div
          ref={sentinelRef}
          className="flex justify-center items-center py-12"
        >
          {isLoading && (
            <div className="flex gap-2">
              <span className="w-2 h-2 bg-black rounded-full animate-bounce [animation-delay:-0.3s]" />
              <span className="w-2 h-2 bg-black rounded-full animate-bounce [animation-delay:-0.15s]" />
              <span className="w-2 h-2 bg-black rounded-full animate-bounce" />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default InfiniteStories;
