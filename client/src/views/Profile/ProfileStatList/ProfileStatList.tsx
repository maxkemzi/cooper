import StatItem from "@components/StatItem/StatItem";
import React, {FC} from "react";

interface ProfileStatListProps {
	projectsCount: number;
}

const ProfileStatList: FC<ProfileStatListProps> = ({projectsCount}) => (
	<aside>
		<StatItem title="followers" value={projectsCount} />
		<StatItem title="projects" value={projectsCount} />
	</aside>
);

export default ProfileStatList;
