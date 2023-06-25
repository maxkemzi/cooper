import {IconType} from "react-icons";
import {FaTelegramPlane} from "react-icons/fa";
import {
	IoAddOutline,
	IoAlertCircle,
	IoCheckmarkCircle,
	IoChevronDownOutline,
	IoCloseOutline,
	IoEyeOffOutline,
	IoEyeOutline,
	IoHeart,
	IoHeartOutline,
	IoInformationCircle,
	IoLocationOutline,
	IoLogoGithub,
	IoLogoInstagram,
	IoSearchOutline,
	IoWarning
} from "react-icons/io5";
import {IconName} from "../types";

type ComponentVariants =
	| {solid?: IconType; outline: IconType}
	| {solid: IconType; outline?: IconType};

type IconComponents = {[key in IconName]: ComponentVariants};

const iconComponents: IconComponents = {
	// Status icons
	success: {
		solid: IoCheckmarkCircle
	},
	info: {
		solid: IoInformationCircle
	},
	warning: {
		solid: IoWarning
	},
	error: {
		solid: IoAlertCircle
	},
	// Brand logo icons
	github: {
		solid: IoLogoGithub
	},
	instagram: {
		solid: IoLogoInstagram
	},
	telegram: {
		solid: FaTelegramPlane
	},
	// Other icons
	search: {
		outline: IoSearchOutline
	},
	add: {
		outline: IoAddOutline
	},
	close: {
		outline: IoCloseOutline
	},
	eye: {
		outline: IoEyeOutline
	},
	eyeOff: {
		outline: IoEyeOffOutline
	},
	caretDown: {
		outline: IoChevronDownOutline
	},
	location: {
		outline: IoLocationOutline
	},
	heart: {
		solid: IoHeart,
		outline: IoHeartOutline
	}
};

export default iconComponents;
