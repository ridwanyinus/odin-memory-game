import "./card.scss";

const Card = ({ name, imgUrl, handleClick }) => {
	return (
		<button type="button" className="card" onClick={handleClick}>
			<img src={imgUrl} alt="Anime/Manga" />
			<span className="character-name">{name}</span>
		</button>
	);
};

export default Card;
