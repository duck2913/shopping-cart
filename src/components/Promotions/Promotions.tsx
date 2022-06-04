import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { MessageText, PromotionContainer } from "../../styles/promotions/promotionsStyles";

const messages = [
	"20% off on your first order!",
	"Summer sales starts now, visit us right away",
	"Please like and subscribe",
];

const Promotions = () => {
	const [index, setIndex] = useState<number>(0);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIndex((currIdx) => (currIdx + 1) % messages.length);
		}, 3000);

		return () => {
			clearTimeout(timer);
		};
	});
	return (
		<PromotionContainer>
			<Box display={"flex"} justifyContent="center" alignItems="center">
				<MessageText>{messages[index]}</MessageText>
			</Box>
		</PromotionContainer>
	);
};

export default Promotions;
