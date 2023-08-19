import {
	ProjectDetails,
	fetchProjectThunk,
	selectProject,
	selectProjectIsFetching
} from "@entities/project";
import {useTypedDispatch, useTypedSelector} from "@shared/model";
import {Loader, LoaderWrapper} from "@shared/ui";
import {useEffect} from "react";
import {useParams} from "react-router-dom";

const Page = () => {
	const dispatch = useTypedDispatch();
	const {id} = useParams();

	const project = useTypedSelector(selectProject);
	const isFetching = useTypedSelector(selectProjectIsFetching);

	useEffect(() => {
		if (id != null) {
			dispatch(fetchProjectThunk(id));
		}
	}, [dispatch, id]);

	if (isFetching) {
		return (
			<LoaderWrapper>
				<Loader />
			</LoaderWrapper>
		);
	}

	if (project === null) {
		// todo: improve this logic
		return <div>No project</div>;
	}

	return <ProjectDetails project={project} />;
};

export default Page;
