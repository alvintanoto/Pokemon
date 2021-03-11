/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from "@emotion/react";

import Header from "../Header/Header";

const MyPokemon = (props) => {
    let headerCss = {
        backgroundColor: "#E4EBE0",
        margin: 0,
        zIndex: 3,
        fontFamily: "Montserrat",
    };
    return (
        <div css={headerCss}>
            <Header active={props.active} menuItem={props.menuItem} />
            Ini My Pokemon
        </div>
    );
};

export default MyPokemon;