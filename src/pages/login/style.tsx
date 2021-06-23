import styled from 'styled-components';

export const Fundo = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: 'Nunito', sans-serif;
    background: #d8f3dc;
`;

export const Conteudo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    margin-left: 2rem;
`;

export const FraseDeEfeito = styled.p`
    font-size: 1.5rem;
`;

export const BackImg = styled.img`
    height: 100vh;
`;

export const Logo = styled.img`
    width: 7rem;
`;

export const Botoes = styled.ul`
    display: flex;
    margin-top: 10%;
    justify-content: space-around;
    width: 100%;

    .buttons {
        width: 9.4rem;
        height: 3.4rem;
        border-radius: 0.4rem;
        box-shadow: 2px 3px 6px #00000029;
        cursor: pointer;
        font-size: 1rem;
        font-family: 'Nunito', sans-serif;
    }


`;

export const Botao1 = styled.button`
    color: white;
    background-color: #2D6A4F;
    cursor: move;
        &:hover {
            background-color: #1d4734;
        }
`;

export const Botao2 = styled.button`
    border: 2px solid #2D6A4F ;
    cursor: move;
        &:hover {
            background-color: #d6d6d6;
        }
`;

export const Titulo = styled.h1`
    font-size: 6rem;
    text-shadow: 2px 2px 3px #00000044;
`;

export const TituloCor1 = styled.span`
    color: black;
`;

export const TituloCor2 = styled.span`
    color: #2d6a4f;
`;

export const PopupContainer = styled.div`
    position: absolute;
    left: 50%;
`;

