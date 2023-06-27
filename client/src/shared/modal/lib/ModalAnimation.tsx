import {motion} from "framer-motion";
import {FC, PropsWithChildren} from "react";

const ModalAnimation: FC<PropsWithChildren> = ({children}) => (
	<motion.div
		initial={{opacity: 0, y: -8}}
		animate={{opacity: 1, y: 0}}
		exit={{opacity: 0, y: -8}}
		transition={{x: {ease: "easeOut", duration: 0.4}}}
	>
		{children}
	</motion.div>
);

export default ModalAnimation;
