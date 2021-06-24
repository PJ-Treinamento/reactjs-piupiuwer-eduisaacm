import React from "react";
import styled from "styled-components";

export const piuContent = styled.li`
    border-bottom: 1px solid;
`;

export const PerfilTexto = styled.div`
    display: flex;
    align-items: center;
    margin: 24px 7px;
`;

export const Perfil = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ImgPerfilContainer = styled.figure`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;

export const ImgPerfil = styled.img`
    width: 100%;
    height: auto;
    border-radius: 50%;
`;

export const Texto = styled.p`
    padding-left: 1rem;
`;

export const Interacao = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 0.5rem;
`;

export const imgInteracao = styled.img`
    max-width: 1.7rem;
`;