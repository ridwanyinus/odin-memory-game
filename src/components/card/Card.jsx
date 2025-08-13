import "./card.scss";

const Card = ({ name, imgUrl, handleClick }) => {
	return (
		<button type="button" className="card" onClick={handleClick}>
			<img src={imgUrl} alt={`${name} character portrait`} />
			<span className="character-name">{name}</span>
		</button>
	);
};

export default Card;
