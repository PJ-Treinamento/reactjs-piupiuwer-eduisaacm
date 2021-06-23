import styled from "styled-components";

import { fonts } from "../../assets/styles/global";

export const PopupContainer = styled.div`
    font-family: ${fonts.secondary};
    background-color: #00000030;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;

    .container {
        background-color: white;
        width: 30rem;
        height: 28.5rem; 
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const Fechar = styled.button`
    background-color: transparent;
    outline: none;
    width: 32px;
    height: 32px;
    right: calc(-50% + 32px);
    top: 16px;
    cursor: pointer;
    display: flex;
    position: relative;
    align-items: center;

    &:before,
    &:after {
        content:' ';
        position: absolute;
        width: 2.5px;
        height: 24px;
        background-color: black;
        border-radius: 1px;
    }
    &:before {
        transform: rotate(45deg);
    }
    &:after {
        transform: rotate(-45deg)
    }
`;

export const Form = styled.form `
    margin: 35px 0;
`;

export const Botao = styled.button `
    width: 9.4rem;
    height: 3.4rem;
    border-radius: 0.4rem;
    box-shadow: 2px 3px 6px #00000029;
    cursor: pointer;
    font-size: 1rem;
    font-family: 'Nunito',sans-serif;
    background-color: #2D6A4F;
    color: white;
`;

export const Erro = styled.p`
    color: red;
    font-size: 16px;
`;

export const Titulo = styled.p`
    font-size: 1.6rem;
`;