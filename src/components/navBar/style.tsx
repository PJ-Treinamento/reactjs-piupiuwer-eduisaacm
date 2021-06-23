import React from "react";
import styled from "styled-components";

export const NavBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    font-family:'Nunito', sans-serif;
    position: fixed;
    left: 0;
    top: 82px;
    width: 16vw;
    height: 90%;
    background-color: #B7E4C7;

    div {
        display: flex;
        flex-direction: column;
        align-content: center;
        align-items: center;
    }
`;

export const Botoes = styled.div`
    height: 100%;
    width: 100%;
`;

export const Botao = styled.button`
    display: block;
    min-width: 6.3rem;
    width: 80%;
    background-color: #1B4332;
    color: #fff;
    height: 2rem;
    border-radius: 1rem;
    margin: 2.5rem 0;
    border-radius: 0.4rem;
    box-shadow: 1px 3px 6px #00000029;
    cursor: pointer;
        &:hover {
            background-color: #183a2b;
        }
`;

