import React from 'react';
import { fonts } from '../../assets/styles/global';

import styled from 'styled-components';

export const Main = styled.main`
    background-color: #D8F3DC;
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    font-family: ${fonts.secondary};
    height: 100vw;
    justify-content: center;
`;

export const Conteudo = styled.div`
    margin-top: 100px;
    background-color: white;
    margin-left: 14rem;
    width: 46%;
    border-radius: 22px;
`;