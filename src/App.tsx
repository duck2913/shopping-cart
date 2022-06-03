import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Appbar from "./components/Appbar/Appbar";

function App() {
	return (
		<Box bgcolor={"background.default"} color="text.primary">
			<Container maxWidth="lg" sx={{ backgroundColor: "#fff" }}>
				<Appbar />
			</Container>
		</Box>
	);
}

export default App;
