import "./header.scss";

const Header = ({ record }) => {
	return (
		<header className="header">
			<h1 className="header__title">Memory Game</h1>
			<p className="header__desc">
				Click each card only once. Cards shuffle after every click.
			</p>
			<div className="header__scoreboard">
				<span className="score">
					Score: <strong>{record.currentScore}</strong>
				</span>
				<span className="best">
					Best Score: <strong>{record.bestScore}</strong>
				</span>
			</div>
		</header>
	);
};

export default Header;
