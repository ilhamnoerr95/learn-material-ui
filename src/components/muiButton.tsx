import { Button, IconButton, Stack } from "@mui/material";
import Battery5BarIcon from "@mui/icons-material/Battery5Bar";

const muiButton = () => {
	return (
		<Stack spacing={4}>
			<Stack spacing={2} direction="row">
				<Button variant="text">Text</Button>
				<Button variant="contained">contained</Button>
				<Button variant="outlined">outlined</Button>
			</Stack>
			<Stack spacing={2} direction="row">
				<Button variant="contained" color="primary">
					Primary
				</Button>
				<Button variant="contained" color="secondary">
					Secondary
				</Button>
				<Button variant="contained" color="error">
					Error
				</Button>
				<Button variant="contained" color="warning">
					Warning
				</Button>
				<Button variant="contained" color="info">
					Info
				</Button>
				<Button variant="contained" color="success">
					Success
				</Button>
			</Stack>

			<Stack display="block" spacing={2} direction="row">
				<Button variant="contained" size="small">
					small
				</Button>
				<Button variant="contained" size="medium">
					medium
				</Button>{" "}
				<Button variant="contained" size="large">
					large
				</Button>
			</Stack>
			<Stack spacing={2} direction="row">
				<Button
					variant="contained"
					startIcon={<Battery5BarIcon />}
					disableRipple
				>
					Batteries
				</Button>
				<Button
					variant="contained"
					endIcon={<Battery5BarIcon />}
					disableElevation
				>
					Batteries
				</Button>
				<IconButton aria-label="batteries" color="warning" size="small">
					<Battery5BarIcon />
				</IconButton>
			</Stack>
		</Stack>
	);
};

export default muiButton;
