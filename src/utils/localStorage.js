const loadFromStorage = (key, fallback = { bestScore: 0, currentScore: 0 }) => {
	const raw = localStorage.getItem(key);
	return raw ? JSON.parse(raw) : fallback;
};

const saveToStorage = (key, value) =>
	localStorage.setItem(key, JSON.stringify(value));

export { loadFromStorage, saveToStorage };
