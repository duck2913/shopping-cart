import React from "react";
import { AppbarContainer } from "../../styles/appbar/appbarStyles";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Menu, MenuItem, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Colors } from "../../styles/theme/theme";
import Actions from "./Actions";

const AppbarMobile = () => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<>
			<AppbarContainer sx={{ justifyContent: "space-between" }}>
				<IconButton edge="start" color="inherit" aria-label="menu" onClick={handleClick}>
					<MenuIcon />
				</IconButton>
				<Menu
					id="basic-menu"
					anchorEl={anchorEl}
					open={open}
					onClose={handleClose}
					MenuListProps={{
						"aria-labelledby": "basic-button",
					}}
				>
					<MenuItem>Home</MenuItem>
					<MenuItem>Category</MenuItem>
					<MenuItem>Product</MenuItem>
					<MenuItem>Contact us</MenuItem>
				</Menu>
				<Typography
					sx={{
						padding: "4px",
						fontSize: "4rem",
						fontFamily: '"Montez","cursive"',
						color: Colors.secondary,
					}}
				>
					My Bags
				</Typography>
				<IconButton edge="start" color="inherit" aria-label="menu">
					<SearchIcon />
				</IconButton>
			</AppbarContainer>
			<div style={{ position: "fixed", bottom: 0, left: 0, width: "100%" }}>
				<Actions />
			</div>
		</>
	);
};

export default AppbarMobile;
