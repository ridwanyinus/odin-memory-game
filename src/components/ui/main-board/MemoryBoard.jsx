import Card from "../../card/Card";
import Footer from "../../footer/Footer";
import Loader from "../../loader/Loader";
import "./memory-board.scss";
import { useBreakPoints } from "../../../hooks/useBreakPoints";
import { useMemoryGame } from "../../../hooks/useMemoryGame";

const MemoryBoard = ({ gameRecord, setGameRecord }) => {
	const bp = useBreakPoints();
	const { characters, loading, error, handleGame, handleRetry } = useMemoryGame(
		gameRecord,
		setGameRecord,
		bp,
	);

	if (error) {
		return (
			<div role="alert" className="error--message">
				<p>Oops! Couldn't load characters: {error}</p>
				<button type="button" onClick={handleRetry}>
					Try Again
				</button>
			</div>
		);
	}

	return (
		<>
			{loading && <Loader />}
			<main aria-label="Memory game board">
				<div className="cards__grid">
					{characters?.map((char) => (
						<Card
							key={char.id}
							name={char.name}
							imgUrl={char.image_url}
							handleClick={() => handleGame(char.id)}
							role="gridcell"
							aria-label={`Character card: ${char.name}`}
						/>
					))}
				</div>
			</main>
			<Footer />
		</>
	);
};

export default MemoryBoard;
