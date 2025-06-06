import React, { useEffect, useState } from "react";
import ButtonComponent from "./Button/Button_Component"; // Import your button component

export default function HoverCard({ movieID }) {
  const [movies, setMovies] = useState([]);

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
      }
    };

    fetchMovies();
  }, []);

  const movie = movies.find((m) => m.id === movieID);

  if (!movie) {
    // Show a loading or fallback UI if the movie is not found
    return (
       <div className="bg-black rounded-lg overflow-hidden shadow-lg p-4">
      <p className="text-white text-center">Loading movie details...</p> 
       </div>
    );
  }

  return (
    <div className="bg-black rounded-lg overflow-hidden shadow-lg" >
      <img
        src={movie.poster}
        alt={movie.title}
        className="w-full h-70 object-file"
      />
      <div className="p-1">
        <h1 className="text-[20px] text-white font-bold mb-2 ml-1">{movie.title}</h1>
        <ButtonComponent
          ActionUrl={movie.movieUrl}
          Title={"Watch Now"}
          BtnType={""}
        />
        <p className="text-white text-lg mt-2">
          {movie.year}  {movie.country} | {movie.runtime} | {movie.language}
        </p>
        <p className="text-gray-400 text-md mt-1 mb-2">
          {movie.plot.split(" ").slice(0, 20).join(" ")}.
        </p>
      </div>
    </div>
  );
}