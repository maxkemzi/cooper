import {InfoItem} from "@components/InfoList";
import {getInfoItems} from "@utils/helpers";
import React, {FC, memo, useMemo} from "react";
import {
	ProjectPageInfoList,
	ProjectPageSection
} from "../ProjectPage/ProjectPage.styled";

interface ProjectInfoItemsProps {
	infoItems: {[key: string]: string | number};
}

const ProjectInfoItems: FC<ProjectInfoItemsProps> = memo(({infoItems}) => {
	const items = useMemo(() => getInfoItems(infoItems), [infoItems]);

	return (
		<ProjectPageSection>
			<ProjectPageInfoList>
				{items.map(item => (
					<InfoItem key={item.id} value={item.value} title={item.title} />
				))}
			</ProjectPageInfoList>
		</ProjectPageSection>
	);
});

export default ProjectInfoItems;
