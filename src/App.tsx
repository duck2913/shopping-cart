import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Appbar from "./components/Appbar/Appbar";
import Banner from "./components/Banner/Banner";
import Products from "./components/Products/Products";
import Promotions from "./components/Promotions/Promotions";

function App() {
	return (
		<Box bgcolor={"background.default"} color="text.primary">
			<Container maxWidth="lg" sx={{ backgroundColor: "#fff" }}>
				<Appbar />
				<Banner />
				<Promotions />
				<Products />
			</Container>
		</Box>
	);
}

export default App;
