import {selectUserUsername} from "@entities/user";
import {logOutThunk} from "@features/auth";
import {useTypedDispatch, useTypedSelector} from "@shared/model";
import {Menu, MenuButton, MenuItem, MenuLink, MenuSection} from "@shared/ui";
import {FC} from "react";
import getMenuItemSections from "../../lib/getMenuItemSections";
import {MenuTitle} from "./ProfileMenu.styled";

interface Props {
	onClose: () => void;
}

const ProfileMenu: FC<Props> = ({onClose}) => {
	const dispatch = useTypedDispatch();
	const username = useTypedSelector(selectUserUsername);
	const menuItemSections = username ? getMenuItemSections(username) : [];

	const handleLogOut = () => {
		dispatch(logOutThunk());
		onClose();
	};

	return (
		<Menu>
			<MenuSection>
				<MenuTitle>
					Logged in as <br /> <span>{username}</span>
				</MenuTitle>
			</MenuSection>
			{Object.entries(menuItemSections).map(([section, items]) => (
				<MenuSection key={section}>
					{items.map(item => (
						<MenuItem key={item.id}>
							<MenuLink onClick={onClose} to={item.path} end>
								{item.text}
							</MenuLink>
						</MenuItem>
					))}
				</MenuSection>
			))}
			<MenuSection>
				<MenuItem>
					<MenuButton onClick={handleLogOut}>Log out</MenuButton>
				</MenuItem>
			</MenuSection>
		</Menu>
	);
};

export default ProfileMenu;
