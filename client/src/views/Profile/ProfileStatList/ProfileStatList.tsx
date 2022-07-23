import StatItem from "@components/StatItem/StatItem";
import React, {FC} from "react";

interface ProfileStatListProps {
	projectsCount: number;
	favoritesCount: number;
}

const ProfileStatList: FC<ProfileStatListProps> = ({
	projectsCount,
	favoritesCount
}) => (
	<aside>
		<StatItem marginBottom="8px" title="favorites" value={favoritesCount} />
		<StatItem title="projects" value={projectsCount} />
	</aside>
);

export default ProfileStatList;
