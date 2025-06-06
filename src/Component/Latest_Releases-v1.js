import React, { useEffect, useState } from "react";
import { FaPlay, FaPlus, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CustomLeftArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute left-0 z-10 p-2 bg-gray-800 text-white rounded-full">
      <FaAngleLeft />
    </button>
  );
};

const CustomRightArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute right-0 z-10 p-2 bg-gray-800 text-white rounded-full">
      <FaAngleRight />
    </button>
  );
};

export default function Latest_Releases({ showData }) {
  console.log("Latest Releases", showData);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("/YouTube.json", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setError("Failed to load movies.");
      }
    };

    fetchMovies();
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
      slidesToSlide: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
      slidesToSlide: 7,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 2,
    },
  };

  return (
    <section className="p-2 mt-0">
      <div className="lg:mx-auto">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-0">
          <h2
            className={`text-2xl font-bold text-white ${
              showData === 0 ? "text-center w-full" : ""
            }`}>
            Latest Releases
          </h2>
          {showData !== 0 && (
            <a
              href="/Latest-Releases"
              className="flex items-center text-white view-all-btn">
              View All <FaAngleRight className="ml-1" />
            </a>
          )}
        </div>
      </div>

      <div className="box-card mt-4 relative">
        {error && <p className="text-red-500">{error}</p>}
        {showData !== 0 ? (
          <Carousel
            responsive={responsive}
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}>
            {movies.length > 0 ? (
              movies.map((movie) => (
                <div
                  key={movie.id}
                  className="group relative responsive p-1 rounded-[10px]">
                  <a href={`/watch/${movie.id}`} className="block">
                    <img
                      src={movie.poster}
                      onError={(e) => {
                        e.target.src =
                          "https://via.placeholder.com/300x450?text=No+Poster";
                      }}
                      alt={movie.title}
                      className="w-full h-60 rounded-lg border-1 object-file"
                    />
                    {/* You can bring back the hover card here if needed */}
                  </a>
                </div>
              ))
            ) : (
              <p className="text-white">No movies available.</p>
            )}
          </Carousel>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-8 xl:grid-cols-8 gap-2">
            {movies.length > 0 ? (
              movies.map((movie) => (
                <a
                  href={`/watch/${movie.id}`}
                  key={movie.id}
                  className="rounded-lg border p-0">
                  <img
                    src={movie.poster}
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/300x450?text=No+Poster";
                    }}
                    alt={movie.title}
                    className="w-full h-60 rounded-lg object-file"
                  />
                </a>
              ))
            ) : (
              <p className="text-white">No movies available.</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
