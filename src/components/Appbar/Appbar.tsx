import { useMediaQuery, useTheme } from "@mui/material";
import AppbarDesktop from "./AppbarDesktop";
import AppbarMobile from "./AppbarMobile";

const Appbar = () => {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down("md"));

	return <div>{matches ? <AppbarMobile /> : <AppbarDesktop />}</div>;
};

export default Appbar;
