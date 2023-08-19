import {ToastTypeWithId} from "@shared/toast/types";
import {Toast} from "@shared/ui";
import {AnimatePresence, motion} from "framer-motion";
import {FC} from "react";
import {useTheme} from "styled-components";
import {ToastListStyled} from "./ToastList.styled";
import {ToastPosition} from "./types";

interface Props {
	position: ToastPosition;
	toasts: ToastTypeWithId[];
	onCloseById: (id: ToastTypeWithId["id"]) => void;
}

const ToastList: FC<Props> = ({position, onCloseById, toasts}) => {
	const theme = useTheme();
	const LIST_SPACING = theme.spacing.md;

	return (
		<ToastListStyled $position={position} $spacing={LIST_SPACING}>
			<AnimatePresence>
				{toasts.map(({id, variant, message}) => {
					const handleClose = () => onCloseById(id);

					// todo: separate framer-motion code from component code
					return (
						<motion.div
							key={id}
							initial={{x: `calc(100% + ${LIST_SPACING})`}}
							animate={{x: 0}}
							exit={{x: `calc(100% + ${LIST_SPACING})`}}
							transition={{x: {ease: "easeOut", duration: 0.4}}}
						>
							<Toast
								onClose={handleClose}
								variant={variant}
								message={message}
							/>
						</motion.div>
					);
				})}
			</AnimatePresence>
		</ToastListStyled>
	);
};

export default ToastList;
