import React from "react";

import * as S from "./style";

import Logo from "../../assets/images/logo.svg";
import { Link, useHistory } from "react-router-dom";


interface HeaderProps {
    direcao: string;
}

const Header: React.FC<HeaderProps> = ({direcao, ...rest}) => {
    return (
        <S.HeaderStyle>
            <S.Logo src={ Logo } alt="" />
            <S.LinksContainer>
                <S.Links className="black"> {direcao}</S.Links>
                <S.Links className="white">Sair</S.Links>
            </S.LinksContainer>
        </S.HeaderStyle>
    )
}

export default Header;