import { Box, Button, IconButton, styled } from "@mui/material";
import { Colors } from "../theme/theme";
import { slideInBottom, slideInRight } from "../../animation";

export const Product = styled(Box)(({ theme }) => ({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	flexDirection: "column",
	[theme.breakpoints.up("md")]: {
		position: "relative",
	},
}));

export const ProductImg = styled("img")(({ theme, src }) => ({
	src: `url(${src})`,
	width: "100%",
	backgroundColor: Colors.light_gray,
	padding: "10px",
	[theme.breakpoints.down("md")]: {
		width: "80%",
		padding: "24px",
	},
}));

export const ProductActionButton = styled(IconButton)(() => ({
	backgroundColor: Colors.white,
	margin: 4,
}));

export const ProductFavButton = styled(ProductActionButton)(({ theme, isFav }) => ({
	color: isFav ? Colors.primary : Colors.light,
	[theme.breakpoints.up("md")]: {
		position: "absolute",
		right: 0,
		top: 0,
	},
}));

export const AddToCartButton = styled(Button)(({ show, theme }) => ({
	width: "120px",
	fontSize: "12px",
	[theme.breakpoints.up("md")]: {
		position: "absolute",
		bottom: "2%",
		width: "300px",
		padding: "10px 5px",
		animation: show && `${slideInBottom} 0.5s both`,
	},
	backgroundColor: Colors.secondary,
	opacity: 0.8,
}));

export const ProductMetaWrapper = styled(Box)(() => ({
	padding: 4,
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
}));

export const ProductActionWrapper = styled(Box)(({ theme, show }) => ({
	[theme.breakpoints.up("md")]: {
		display: show ? "visible" : "none",
		position: "absolute",
		right: 0,
		top: "20%",
		animation: show && `${slideInRight} 0.5s ease-in-out both`,
	},
}));
