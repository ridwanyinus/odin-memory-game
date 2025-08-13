import { useEffect, useState } from "react";

const calcBreakPoints = (w) => {
	if (w <= 375) return "xs";
	else if (w < 767) return "sm";
	else if (w <= 1024) return "md";
	else if (w <= 1312) return "lg";
	return "xl";
};

export const useBreakPoints = () => {
	const [breakPoints, setBreakPoints] = useState(
		typeof window === "undefined" ? "lg" : calcBreakPoints(window.innerWidth),
	);

	useEffect(() => {
		const onResize = () => setBreakPoints(calcBreakPoints(window.innerWidth));
		onResize();
		window.addEventListener("resize", onResize);

		return () => window.removeEventListener("resize", onResize);
	}, []);

	return breakPoints;
};
