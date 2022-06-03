import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import { MyList } from "../../styles/appbar/appbarStyles";

const Actions = () => {
	return (
		<MyList type="row" sx={{ flexGrow: 0 }}>
			<ListItemButton sx={{ justifyContent: "center" }}>
				<ListItemIcon sx={{ justifyContent: "center" }}>
					<ShoppingCartIcon />
				</ListItemIcon>
			</ListItemButton>
			<ListItemButton sx={{ justifyContent: "center" }}>
				<ListItemIcon sx={{ justifyContent: "center" }}>
					<FavoriteIcon />
				</ListItemIcon>
			</ListItemButton>
			<ListItemButton sx={{ justifyContent: "center" }}>
				<ListItemIcon sx={{ justifyContent: "center" }}>
					<PersonIcon />
				</ListItemIcon>
			</ListItemButton>
		</MyList>
	);
};

export default Actions;
