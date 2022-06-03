import { Box, List, styled, Typography } from "@mui/material";
import { Colors } from "../theme/theme";

export const AppbarContainer = styled(Box)(() => ({
	display: "flex",
	marginTop: 4,
	justifyContent: "center",
	alignItems: "center",
	padding: "2px 8px",
}));

export const AppbarHeader = styled(Typography)(() => ({
	padding: "4px",
	flexGrow: 1,
	fontSize: "4rem",
	fontFamily: '"Montez","cursive"',
	color: Colors.secondary,
}));

type MyListProp = {
	type: string;
};

export const MyList = styled(List)<MyListProp>(({ type }) => ({
	display: type === "row" ? "flex" : "block",
	flexGrow: 3,
	justifyContent: "center",
	alignItems: "center",
}));
