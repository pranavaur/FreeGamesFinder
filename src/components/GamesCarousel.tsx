import GameCard from "./GameCard";

import { Game, GroupedGames } from "../pages/GamesList";

function GamesCarousel({ groupedGame }: GroupedGames) {
  return (
    <div>
      {groupedGame.map((game: Game) => (
        <GameCard game={game} />
      ))}
    </div>
  );
}
export default GamesCarousel;
