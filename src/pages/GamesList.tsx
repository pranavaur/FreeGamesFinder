import { useState, useEffect } from "react";
import axios from "axios";

interface GamesData {
  id: number;
  title: string;
}

interface Response {
  data: GamesData;
  status: number;
}

const GamesList = () => {
  const [gamesData, setGamesData] = useState<GamesData[]>([]);

  useEffect(() => {
    const getGamesData = async () => {
      const data: Response = await axios.get(
        "https://free-to-play-games-database.p.rapidapi.com/api/games",
        {
          headers: {
            "X-RapidAPI-Key":
              "2d81ad683amsh9c7dcc3e0bda830p1c1431jsn170be6b1c358",
            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
          },
        }
      );
      console.log(data);

      setGamesData(data.data);
    };

    getGamesData();
  }, []);

  return (
    <div className="bg-white dark:bg-dark text-dark dark:text-white flex justify-center flex-grow">
      <ul>
        {gamesData
          .filter((g: GamesData) => g.id < 200)
          .map((game: GamesData) => (
            <li key={game.id}>{game.title}</li>
          ))}
      </ul>
    </div>
  );
};

export default GamesList;
