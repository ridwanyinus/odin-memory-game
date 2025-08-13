export const fetchAnimeCharacters = async (malId, type) => {
	const res = await fetch(
		`https://api.jikan.moe/v4/${type}/${malId}/characters?sfw`,
	);

	if (!res.ok) {
		throw new Error(`Failed to fetch characters: ${res.status}`);
	}

	const data = await res.json();

	return data.data.map((c) => ({
		id: c.character.mal_id,
		image_url: c.character.images.webp.image_url,
		name: c.character.name,
	}));
};

export const getRandomAnime = (favorites) =>
	favorites[Math.floor(Math.random() * favorites.length)];
