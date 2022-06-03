import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Colors } from "../theme/theme";

export const BannerContainer = styled(Box)(({ theme }) => ({
	display: "flex",
	justifyContent: "center",
	width: "100%",
	height: "100%",
	background: Colors.light_gray,
	[theme.breakpoints.down("sm")]: {
		flexDirection: "column",
		alignItems: "center",
	},
}));

export const BannerContent = styled(Box)(() => ({
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	maxWidth: 420,
	padding: "30px",
}));

export const BannerTitle = styled(Typography)(({ theme }) => ({
	fontSize: "70px",
	marginBottom: "20px",
	lineHeigh: 1.5,
	[theme.breakpoints.down("sm")]: {
		fontSize: "42px",
		lineHeight: 1.15,
		marginBottom: "1rem",
	},
}));

export const BannerImg = styled("img")(({ theme, src }) => ({
	src: `url(${src})`,
	backgroundSize: "cover",
	width: 500,
	[theme.breakpoints.down("md")]: {
		width: 350,
		height: 300,
	},
	[theme.breakpoints.down("sm")]: {
		width: 300,
	},
}));
