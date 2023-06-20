import { useState, useEffect } from "react";
import GamesCarousel from "../components/GamesCarousel";

export type Game = {
  id: number;
  title: string;
  genre: string;
  developer: string;
  thumbnail: string;
  platform: string;
  short_description: string;
};

export type GroupedGames = {
  [key: string]: Game[];
};

const GamesList = () => {
  const [gamesData, setGamesData] = useState<Game[]>([]);
  const [groupedGames, setGroupedGames] = useState<GroupedGames>({});

  useEffect(() => {
    const getGames = async () => {
      const response = await fetch(
        "https://free-to-play-games-database.p.rapidapi.com/api/games",
        {
          headers: {
            "X-RapidAPI-Key": `${import.meta.env.VITE_RAPID_API_KEY}`,
            "X-RapidAPI-Host": `${import.meta.env.VITE_RAPID_APP_HOST}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("failed to fetch");
      }

      const res = await response.json();
      setGamesData(res);
    };

    getGames();
  }, []);

  useEffect(() => {
    /*
      Example object: {
        'Shooter': [{game1 obj}, {game2 obj}]
      }
    */

    // const reducedGames = res.reduce(
    //   (groupedGame: any, game) => ({
    //     ...groupedGame,
    //     [game.genre]: [...(groupedGame[game.genre] || []), game],
    //   }),
    //   {}
    // );

    const grouped = gamesData.reduce(function (
      gamesObject: GroupedGames,
      currentGame: Game
    ) {
      let currentGenre = currentGame.genre;
      if (currentGenre in gamesObject) {
        gamesObject[currentGenre] = [...gamesObject[currentGenre], currentGame];
      } else {
        gamesObject[currentGenre] = [currentGame];
      }
      return gamesObject;
    },
    {});

    setGroupedGames(grouped);
  }, [gamesData]);

  // console.log(groupedGames);

  return (
    <div className="bg-white dark:bg-dark text-dark dark:text-white flex justify-center flex-grow">
      <ul>
        {Object.keys(groupedGames).map((genre) => {
          return <GamesCarousel groupedGame={groupedGames[genre]} />;
        })}
      </ul>
    </div>
  );
};

export default GamesList;
