import { User, logout } from "@/entities/User";
import { useAppDispatch } from "@/shared/lib/useAppDispatch/useAppDispatch";
import { Avatar, DropDown, Icon } from "@/shared/ui";
import { FC, memo } from "react";
import { navMenuItems } from "../../model/consts";
import cls from "./NavMenu.module.scss";
import { useTheme } from "@/shared/lib/hooks/useTheme";
import {useNavigate} from "react-router-dom";

interface INavMenuProps {
    user: User;
}

export const NavMenu: FC<INavMenuProps> = memo(({ user }) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    const {toogleTheme} = useTheme();
    const onLogout = async() => {
        const res = await dispatch(logout());
        if(res.meta.requestStatus === 'fulfilled'){
            navigate('/login')
        }
    };

    return (
        <nav className={cls.menu}>
            <ul className={cls.list}>
                {navMenuItems.map((item) => (
                    <li>
                        {item.path ? (
                            <a href="">
                                <Icon type={item.iconType} />
                            </a>
                        ) : (
                            <Icon type={item.iconType} />
                        )}
                    </li>
                ))}

                <li>
                    <DropDown
                        menuClass={cls.dropDown}
                        trigger={<Avatar variant="personal" src={user?.avatar} size={22} />}
                        items={[
                            {
                                href: `/profile/${user?._id}`,
                                content: "Профиль",
                                icon: ""
                            },
                            {
                                content: "Сменить тему",
                                onClick: toogleTheme,
                                icon: ""
                            },
                            {
                                content: "Настройки",
                                href: '/settings',
                                icon: "",
                                disabled: true
                            },
                            {
                                content: "Выйти",
                                onClick: onLogout,
                                icon: ""
                            },
                        ]}
                    />
                </li>
            </ul>
        </nav>
    );
});
