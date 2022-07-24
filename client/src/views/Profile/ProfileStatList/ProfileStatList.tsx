import StatItem from "@components/StatItem/StatItem";
import React, {FC} from "react";
import StyledProfileStatList from "./ProfileStatList.styled";

interface ProfileStatListProps {
	projectsCount: number;
	favoritesCount: number;
}

const ProfileStatList: FC<ProfileStatListProps> = ({
	projectsCount,
	favoritesCount
}) => (
	<StyledProfileStatList>
		<StatItem marginBottom="8px" title="favorites" value={favoritesCount} />
		<StatItem title="projects" value={projectsCount} />
	</StyledProfileStatList>
);

export default ProfileStatList;
