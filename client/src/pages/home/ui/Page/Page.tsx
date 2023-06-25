import {RouteNames} from "@shared/constants";
import {Button, Typography} from "@shared/ui";
import {LayoutHero} from "@widgets/LayoutHero";
import {FC} from "react";
import {NavLink} from "react-router-dom";
import PlanetImage from "../PlanetImage/PlanetImage";

const Page: FC = () => (
	<LayoutHero
		leftContentSlot={
			<>
				<Typography mb="md" variant="h1">
					Find your
					<br />
					<Typography variant="highlight">dream team!</Typography>
				</Typography>
				<Typography mb="xxl" variant="subtitle1">
					Cooper will help you find a team to create a project or participate in
					an existing one.
				</Typography>
				<NavLink to={RouteNames.Signup}>
					<Button size="lg">GET STARTED</Button>
				</NavLink>
			</>
		}
		rightSVGImageSlot={<PlanetImage />}
	/>
);

export default Page;
