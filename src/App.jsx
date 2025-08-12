import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import MemoryBoard from "./components/ui/main-board/MemoryBoard";
import { loadFromStorage, saveToStorage } from "./utils/localStorage";

const App = () => {
	const [gameRecord, setGameRecord] = useState(() =>
		loadFromStorage("gameCount", { bestScore: 0, currentScore: 0 }),
	);

	useEffect(() => {
		saveToStorage("gameRecord", gameRecord);
	}, [gameRecord]);

	return (
		<div className="memory-game">
			<Header record={gameRecord} />
			<MemoryBoard gameRecord={gameRecord} setGameRecord={setGameRecord} />
		</div>
	);
};

export default App;
