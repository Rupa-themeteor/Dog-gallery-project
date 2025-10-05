import React from "react";
import DogCard from "./Components/DogCard";
import "./index.css";

function App() {
  const dogs = [
    { id: 1, title: "Julie's Rabbit Ears", image: "https://placedog.net/400/300?id=1" },
    { id: 2, title: "The Innocent Look", image: "https://placedog.net/400/300?id=2" },
    { id: 3, title: "Big Eyed Buggy", image: "https://placedog.net/400/300?id=3" },
    { id: 4, title: "The Saint Doggo", image: "https://placedog.net/400/300?id=4" },
    { id: 5, title: "Big Eyed Buggy", image: "https://placedog.net/400/300?id=5" },
    { id: 6, title: "The Innocent Look", image: "https://placedog.net/400/300?id=6" },
    { id: 7, title: "The Saint Doggo", image: "https://placedog.net/400/300?id=7" },
    { id: 8, title: "Julie's Rabbit Ears", image: "https://placedog.net/400/300?id=8" },
  ];

  return (
    <div className="container">
      {dogs.map((dog) => (
        <DogCard key={dog.id} image={dog.image} title={dog.title} />
      ))}
    </div>
  );
}

export default App;
