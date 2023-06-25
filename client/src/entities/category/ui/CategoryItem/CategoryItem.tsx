import {FC} from "react";
import {TagItem} from "@shared/ui";
import {Category} from "../../model/types";

interface Props {
	category: Category;
}

const CategoryItem: FC<Props> = ({category}) => (
	<TagItem text={category.name} />
);

export default CategoryItem;
