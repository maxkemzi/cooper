import {InfoItem} from "@components/InfoList";
import Title from "@components/Title/Title";
import {formatDate, getInfoItems} from "@utils/helpers";
import React, {FC, memo, useMemo} from "react";
import {
	ProjectPageBlock,
	ProjectPageInfoList,
	ProjectPageSection,
	ProjectsPageDate
} from "../ProjectPage/ProjectPage.styled";

interface ProjectCreatorInfoProps {
	infoItems: {[key: string]: string | number};
	createdDate: string;
}

const ProjectCreatorInfo: FC<ProjectCreatorInfoProps> = memo(
	({createdDate, infoItems}) => {
		const formattedDate = formatDate(new Date(createdDate));
		const items = useMemo(() => getInfoItems(infoItems), [infoItems]);

		return (
			<ProjectPageSection>
				<ProjectPageBlock>
					<Title marginRight="12px">About the client</Title>
					<ProjectsPageDate>Member since {formattedDate}</ProjectsPageDate>
				</ProjectPageBlock>
				<ProjectPageInfoList>
					{items.map(item => (
						<InfoItem key={item.id} value={item.value} title={item.title} />
					))}
				</ProjectPageInfoList>
			</ProjectPageSection>
		);
	}
);

export default ProjectCreatorInfo;
