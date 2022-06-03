import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar/appbarStyles";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./Actions";

const AppbarDesktop = () => {
	return (
		<>
			<AppbarContainer>
				<AppbarHeader>Hello</AppbarHeader>
				<MyList type="row">
					<ListItemText>Home</ListItemText>
					<ListItemText>Category</ListItemText>
					<ListItemText>Products</ListItemText>
					<ListItemText>Contact us</ListItemText>
					<ListItemButton>
						<ListItemIcon>
							<SearchIcon />
						</ListItemIcon>
					</ListItemButton>
				</MyList>
				<Actions />
			</AppbarContainer>
		</>
	);
};

export default AppbarDesktop;
