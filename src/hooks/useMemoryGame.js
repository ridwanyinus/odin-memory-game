import { useCallback, useEffect, useState } from "react";
import { favorites } from "../data/animeData";
import { fetchAnimeCharacters } from "../services/jikanApi";

const CARD_COUNTS = {
	xs: 15,
	sm: 15,
	md: 15,
	lg: 15,
	xl: 14,
};

export const useMemoryGame = (gameRecord, setGameRecord, bp) => {
	const [characters, setCharacters] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [clickedCharactersId, setClickedCharactersId] = useState([]);

	const fetchCharacters = useCallback(async () => {
		setLoading(true);
		setError(null);

		const randomFavorite =
			favorites[Math.floor(Math.random() * favorites.length)];
		const { id: malId, type } = randomFavorite;

		try {
			const allCharacters = await fetchAnimeCharacters(malId, type);

			const getCharacters = (charAmount) =>
				allCharacters.slice(0, charAmount).sort(() => Math.random() - 0.5);
			const characters = getCharacters(CARD_COUNTS[bp] || 15);

			setCharacters(characters);
		} catch (error) {
			console.error("Error:", error);
			setError(error.message);
		} finally {
			setLoading(false);
		}
	}, [bp]);

	const shuffleCharacters = useCallback(() => {
		setCharacters((prev) => [...prev].sort(() => Math.random() - 0.5));
	}, []);

	const handleGame = useCallback(
		(charId) => {
			const { currentScore, bestScore } = gameRecord;

			if (clickedCharactersId.includes(charId)) {
				if (currentScore > bestScore) {
					setGameRecord((prev) => ({
						...prev,
						bestScore: prev.currentScore,
						currentScore: 0,
					}));
				} else {
					setGameRecord((prev) => ({
						...prev,
						currentScore: 0,
					}));
				}
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
		},
		[
			clickedCharactersId,
			gameRecord,
			setGameRecord,
			fetchCharacters,
			shuffleCharacters,
		],
	);

	const handleRetry = useCallback(() => {
		setError(null);
		fetchCharacters();
	}, [fetchCharacters]);

	useEffect(() => {
		fetchCharacters();
	}, [fetchCharacters]);

	return {
		characters,
		loading,
		error,
		handleGame,
		handleRetry,
	};
};
