import Card from "../../card/Card";
import Footer from "../../footer/Footer";
import Loader from "../../loader/Loader";
import "./memory-board.scss";
import { useCallback, useEffect, useState } from "react";
import useBreakPoints from "../../../hooks/useBreakPoints";

const favorites = [
	{ id: 2402, type: "anime" }, // Ashita no Joe
	{ id: 16498, type: "anime" }, // Attack on Titan
	{ id: 2, type: "manga" }, // Berserk
	{ id: 8247, type: "anime" }, // Bleach
	{ id: 49596, type: "anime" }, // Blue Lock
	{ id: 35507, type: "anime" }, // Classroom of the Elite
	{ id: 57334, type: "anime" }, // Dan Dan Dan
	{ id: 1535, type: "anime" }, // Death Note
	{ id: 38000, type: "anime" }, // Demon Slayer
	{ id: 223, type: "anime" }, // Dragon Ball
	{ id: 30694, type: "anime" }, // Dragon Ball super
	{ id: 5114, type: "anime" }, // Fullmetal Alchemist: Brotherhood
	{ id: 52991, type: "anime" }, // Friend: The Journey's End
	{ id: 59062, type: "anime" }, // Gachiakuta
	{ id: 777, type: "anime" }, // Hellsing Ultimate
	{ id: 11061, type: "anime" }, // Hunter X Hunter (2011)
	{ id: 162479, type: "manga" }, // Kagurabachi
	{ id: 40748, type: "anime" }, // Jujutsu Kaisen
	{ id: 16765, type: "manga" }, // Kingdom
	{ id: 31964, type: "anime" }, // My Hero Academia
	{ id: 30276, type: "anime" }, // One Punch Man
	{ id: 121496, type: "manga" }, // Solo Leveling
	{ id: 50273, type: "anime" }, // Tomodachi Game
	{ id: 656, type: "manga" }, // Vagabond
	{ id: 37521, type: "anime" }, // Vinland Saga
];

const MemoryBoard = ({ gameRecord, setGameRecord }) => {
	const [characters, setCharacters] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [clickedCharactersId, setClickedCharactersId] = useState([]);

	const bp = useBreakPoints();
	console.log(bp);

	const fetchCharacters = useCallback(async () => {
		setLoading(true);
		const randomFavorite =
			favorites[Math.floor(Math.random() * favorites.length)];
		const { id: malId, type } = randomFavorite;

		try {
			const res = await fetch(
				`https://api.jikan.moe/v4/${type}/${malId}/characters?limit=1&sfw`,
			);
			if (!res.ok) throw new Error("Network error was not okay");
			const data = await res.json();

			const allCharacters = data.data.map((c) => ({
				id: c.character.mal_id,
				image_url: c.character.images.webp.image_url,
				name: c.character.name,
			}));

			const getCharacters = (charAmount) =>
				allCharacters.slice(0, charAmount).sort(() => Math.random() - 0.5);

			if (bp === "xs" || bp === "sm") {
				const characters = getCharacters(15);
				setCharacters(characters);
			} else if (bp === "md" || bp === "lg") {
				const characters = getCharacters(15);
				setCharacters(characters);
			} else if (bp === "xl") {
				const characters = getCharacters(14);
				setCharacters(characters);
			}
		} catch (error) {
			console.error("Error:", error);
			setError(error);
		} finally {
			setLoading(false);
		}
	}, [bp]);

	const handleGame = (charId) => {
		const { currentScore, bestScore } = gameRecord;

		if (clickedCharactersId.includes(charId)) {
			if (currentScore > bestScore)
				setGameRecord((prev) => ({
					...prev,
					bestScore: prev.currentScore,
					currentScore: 0,
				}));
			alert(`Game over, final score: ${currentScore}`);
			fetchCharacters();
			setClickedCharactersId([]);
		} else {
			setClickedCharactersId((prev) => [...prev, charId]);
			shuffleCharacters();
			setGameRecord((prev) => ({
				...prev,
				currentScore: currentScore + 1,
			}));
		}
	};

	const shuffleCharacters = () => {
		setCharacters((prev) => [...prev].sort(() => Math.random() - 0.5));
	};

	useEffect(() => {
		fetchCharacters();
	}, [fetchCharacters]);

	if (error) return <p>Error: {error}</p>;

	return (
		<>
			<div className="memory-board">
				{loading && <Loader />}
				{characters?.map((char) => (
					<Card
						key={char.id}
						name={char.name}
						imgUrl={char.image_url}
						handleClick={() => handleGame(char.id)}
					/>
				))}
			</div>
			<Footer />
		</>
	);
};

export default MemoryBoard;
