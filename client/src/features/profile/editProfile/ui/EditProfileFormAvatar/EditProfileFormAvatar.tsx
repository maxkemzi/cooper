import {Avatar, Button, ButtonProps, List} from "@shared/ui";
import {ChangeEvent, FC, useEffect, useRef, useState} from "react";
import {FlexContainerStyled} from "./EditProfileFormAvatar.styled";

interface Props {
	initialPath: string | null;
	onUpload?: (file: File) => void;
	onDelete?: () => void;
	onReset?: () => void;
}

const EditProfileFormAvatar: FC<Props> = ({
	onUpload,
	onDelete,
	onReset,
	initialPath
}) => {
	const [path, setPath] = useState<string | null>(initialPath);
	const [isDirty, setIsDirty] = useState(false);

	const hiddenFileInputRef = useRef<HTMLInputElement | null>(null);

	useEffect(() => {
		setIsDirty(path !== initialPath);
	}, [path, initialPath]);

	useEffect(() => {
		setPath(initialPath);
	}, [initialPath]);

	const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
		if (!e.target.files) {
			return;
		}

		const file = e.target.files[0];

		const objectUrl = URL.createObjectURL(file);
		setPath(objectUrl);

		onUpload?.(file);
	};

	const handleDelete = () => {
		if (path === null) {
			return;
		}

		setPath(null);

		onDelete?.();
	};

	const handleReset = () => {
		if (!isDirty) {
			return;
		}

		setPath(initialPath);

		onReset?.();
	};

	const handlePickerOpen = () => {
		if (hiddenFileInputRef.current) {
			hiddenFileInputRef.current.value = "";
			hiddenFileInputRef.current.click();
		}
	};

	const renderButton = () => {
		const avatarIsNotSet = initialPath === null && !isDirty;
		if (avatarIsNotSet) {
			return null;
		}

		const commonProps: ButtonProps = {
			variant: "outline"
		};

		if (isDirty) {
			return (
				<Button onClick={handleReset} {...commonProps}>
					reset
				</Button>
			);
		}

		return (
			<Button onClick={handleDelete} {...commonProps}>
				delete
			</Button>
		);
	};

	return (
		<FlexContainerStyled>
			<Avatar size="md" imagePath={path} />
			<List>
				<Button onClick={handlePickerOpen} variant="outline">
					upload
				</Button>
				{renderButton()}
			</List>
			<input
				onChange={handleUpload}
				ref={hiddenFileInputRef}
				type="file"
				hidden
			/>
		</FlexContainerStyled>
	);
};

export default EditProfileFormAvatar;
