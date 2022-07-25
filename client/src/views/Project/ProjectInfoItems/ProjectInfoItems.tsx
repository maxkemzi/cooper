import {InfoItem, InfoList} from "@components/InfoList";
import {getInfoItems} from "@utils/helpers";
import React, {FC, memo, useMemo} from "react";
import {ProjectPageSection} from "../ProjectPage/ProjectPage.styled";

interface ProjectInfoItemsProps {
	infoItems: {[key: string]: string | number};
}

const ProjectInfoItems: FC<ProjectInfoItemsProps> = memo(({infoItems}) => {
	const items = useMemo(() => getInfoItems(infoItems), [infoItems]);

	return (
		<ProjectPageSection>
			<InfoList>
				{items.map(item => (
					<InfoItem key={item.id} value={item.value} title={item.title} />
				))}
			</InfoList>
		</ProjectPageSection>
	);
});

export default ProjectInfoItems;
