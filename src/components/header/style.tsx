import React from "react";

import styled from "styled-components";

export const HeaderStyle = styled.header `
    background-color: #c4c4c4;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    position: fixed;
    width: 100vw;
`;

export const Logo = styled.img`
    max-width: 64px;
    margin: 5px 5.5%;
    cursor: pointer;
`;

export const LinksContainer = styled.nav`
    display: flex;
    justify-content: space-between;

    .black {
        color: black;
    }

    .white {
        color: white;
    }
`;

export const Links = styled.a`
    margin-left: 48px;
    margin-right: 32px;
    cursor: pointer;
        &:hover {
            text-decoration: underline;
        }

`;