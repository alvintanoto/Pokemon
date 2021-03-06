/** @jsxRuntime classic */
/** @jsx jsx */

import { useEffect, useState } from "react";
import { jsx, keyframes } from "@emotion/react";
import MenuItem from "./MenuItem";
import { mqx } from "../../helper/functions";
import { fadeIn } from "../../helper/anim";

const Header = (props) => {
    let [isMenuOpen, setMenuOpen] = useState(false);

    let ulCss = {
        position: "fixed",
        display: "flex",
        flexDirection: "row",
        float: "left",
        right: 0,
        marginRight: "2.5%",
        userSelect: "none",
        [mqx[2]]: {
            flexDirection: "column",
            display: "none",
        },
    };

    let buttonCss = {
        float: "right",
        padding: "3vh 5vh",
        display: "none",
        cursor: "pointer",
        position: "fixed",
        backgroundImage: "url('/asset/menu.svg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        outline: "none",
        [mqx[2]]: {
            width: "5vh",
            height: "5vh",
            display: "block",
            margin: "2vh",
            right: 0,
            opacity: 1,
            position: "fixed",
            backgroundImage: !isMenuOpen
                ? "url('/asset/menu.svg')"
                : "url('/asset/cross.svg')",
            zIndex: isMenuOpen ? 11 : 11,
        },
    };

    let menuOpenCss = {
        [mqx[2]]: {
            display: "flex",
            zIndex: 5,
            width: "100vw",
            height: "100vh",
            margin: 0,
            padding: 0,
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            backdropFilter: "blur(8px)",
            animation: `${fadeIn} 0.5s ease-in`,
        },
    };

    const onMenuClicked = () => {
        isMenuOpen ? setMenuOpen(false) : setMenuOpen(true);
    };

    return (
        <div>
            <div
                tabIndex="1"
                css={[buttonCss]}
                id="icon-menu"
                onClick={onMenuClicked}
            />
            <ul css={[ulCss, isMenuOpen ? menuOpenCss : ""]}>
                {props.menuItem.map((menu, index) => {
                    return (
                        <MenuItem
                            menu={menu}
                            key={index}
                            active={props.active}
                            focusedCss={props.menuOpenCss}
                        />
                    );
                })}
            </ul>
        </div>
    );
};

export default Header;
