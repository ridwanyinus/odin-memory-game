import "./header.scss";

const Header = ({ record }) => {
	return (
		<header className="header">
			<h1 className="header__title">Otaku Recall</h1>
			<p className="header__desc">
				Don't click the same character twice. Cards remix after each click.
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
