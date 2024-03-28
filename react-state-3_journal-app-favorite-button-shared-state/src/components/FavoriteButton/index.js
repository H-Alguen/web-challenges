import "./FavoriteButton.css";
import { ReactComponent as StarFilled } from "./star-filled.svg";
import { ReactComponent as Star } from "./star.svg";

export default function FavoriteButton({ isFavorite, id, onToggleFavorite }) {
  return (
    <button
      className="favorite-button"
      onClick={() => onToggleFavorite(id)}
      aria-label="favorite"
    >
      {isFavorite ? <StarFilled /> : <Star />}
    </button>
  );
}

//  const [isFavorite, setIsFavorite] = useState(false);
//setIsFavorite(!isFavorite)
