import "./footer.scss"
const Footer = () => {
	return (
		<footer>
			<p>
				Character details are fetched on start and remain the same until you
				fail or win.
			</p>
			<button type="button" onClick={() => window.location.reload()}>New Round</button>
		</footer>
	);
};

export default Footer;
