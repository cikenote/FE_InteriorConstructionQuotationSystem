import { Fragment, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";

const menus = [
    {
        id: 1,
        title: "Trang chủ",
        link: "/home",
    },

    {
        id: 2,
        title: "Dự án",
        link: "/project",
    },

    {
        id: 3,
        title: "Tin tức",
        link: "/blog",
    },
    {
        id: 4,
        title: "Liên hệ",
        link: "/contact",
    },
    {
        id: 5,
        title: "Đồ nội thất",
        link: "/shop",
    },
    {
        id: 6,
        title: "Báo giá",
        link: "/quotation",
    },
];

const MobileMenu = () => {
    const [openId, setOpenId] = useState(0);
    const [menuActive, setMenuState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    return (
        <div>
            <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
                <div className="menu-close">
                    <div
                        className="clox"
                        onClick={() => setMenuState(!menuActive)}
                    >
                        <CloseIcon></CloseIcon>
                    </div>
                </div>
                <ul className="responsivemenu">
                    {menus.map((item, mn) => {
                        return (
                            <ListItem
                                className={item.id === openId ? "active" : null}
                                key={mn}
                            >
                                {item.submenu ? (
                                    <Fragment>
                                        <p
                                            onClick={() =>
                                                setOpenId(
                                                    item.id === openId
                                                        ? 0
                                                        : item.id
                                                )
                                            }
                                        >
                                            {item.title}
                                            <i
                                                className={
                                                    item.id === openId
                                                        ? "fa fa-angle-up"
                                                        : "fa fa-angle-down"
                                                }
                                            ></i>
                                        </p>
                                        <Collapse
                                            in={item.id === openId}
                                            timeout="auto"
                                            unmountOnExit
                                        >
                                            <List className="subMenu">
                                                <Fragment>
                                                    {item.submenu.map(
                                                        (submenu, i) => {
                                                            return (
                                                                <ListItem
                                                                    key={i}
                                                                >
                                                                    <a
                                                                        onClick={
                                                                            ClickHandler
                                                                        }
                                                                        href={
                                                                            submenu.link
                                                                        }
                                                                    >
                                                                        {
                                                                            submenu.title
                                                                        }
                                                                    </a>
                                                                </ListItem>
                                                            );
                                                        }
                                                    )}
                                                </Fragment>
                                            </List>
                                        </Collapse>
                                    </Fragment>
                                ) : (
                                    <a href={item.link}>{item.title}</a>
                                )}
                            </ListItem>
                        );
                    })}
                </ul>
            </div>

            <div className="showmenu" onClick={() => setMenuState(!menuActive)}>
                <button type="button" className="navbar-toggler open-btn">
                    <span className="icon-bar first-angle"></span>
                    <span className="icon-bar middle-angle"></span>
                    <span className="icon-bar last-angle"></span>
                </button>
            </div>
        </div>
    );
};

export default MobileMenu;
