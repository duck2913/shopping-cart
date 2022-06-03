import { Typography } from "@mui/material";
import { BannerContainer, BannerContent, BannerTitle } from "../../styles/banner/bannerStyles";
import { BannerImg } from "../../styles/banner/bannerStyles";

const Banner = () => {
	return (
		<>
			<BannerContainer>
				<BannerImg src="https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"></BannerImg>
				<BannerContent>
					<Typography variant="subtitle1">The newest collection</Typography>
					<BannerTitle variant="h2">New bags</BannerTitle>
					<Typography variant="body1">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quia
						sequi aliquam omnis autem veniam, voluptatem ipsam expedita voluptatum
						fugiat
					</Typography>
				</BannerContent>
			</BannerContainer>
		</>
	);
};

export default Banner;
