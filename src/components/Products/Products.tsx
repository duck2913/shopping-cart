import { Grid } from "@mui/material";
import { products } from "../../data/products";
import SingleProduct from "./SingleProduct";

const Products = () => {
	return (
		<Grid container justifyContent="center">
			{products.map((product) => (
				<Grid
					item
					key={product.id}
					display="flex"
					flexDirection="column"
					alignItems="center"
				>
					<SingleProduct />
				</Grid>
			))}
		</Grid>
	);
};

export default Products;
