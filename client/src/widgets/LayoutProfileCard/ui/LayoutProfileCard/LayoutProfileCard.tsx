import {selectUserAvatar} from "@entities/user";
import {SignupButton, selectIsAuth} from "@features/auth";
import {RouteName} from "@shared/constants";
import {useListenClickOutside} from "@shared/lib";
import {useTypedSelector} from "@shared/model";
import {Icon} from "@shared/ui";
import {useRef, useState} from "react";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import {
	AvatarStyled,
	ButtonStyled,
	IconStyled,
	LinkStyled,
	UserInfoStyled
} from "./LayoutProfileCard.styled";

const LayoutProfileCard = () => {
	const ref = useRef(null);
	const [menuIsOpen, setMenuIsOpen] = useState(false);
	const isAuth = useTypedSelector(selectIsAuth);
	const avatar = useTypedSelector(selectUserAvatar);

	const handleMenuClose = () => setMenuIsOpen(false);

	const handleMenuToggle = () => setMenuIsOpen(prev => !prev);

	useListenClickOutside(ref, handleMenuClose);

	if (!isAuth) {
		return <SignupButton />;
	}

	return (
		<UserInfoStyled ref={ref}>
			<LinkStyled to={RouteName.CREATE}>
				<IconStyled name="add" />
			</LinkStyled>
			<ButtonStyled onClick={handleMenuToggle}>
				<AvatarStyled imagePath={avatar} />
				<Icon name="caretDown" size="16" />
			</ButtonStyled>
			{menuIsOpen ? <ProfileMenu onClose={handleMenuClose} /> : null}
		</UserInfoStyled>
	);
};

export default LayoutProfileCard;
