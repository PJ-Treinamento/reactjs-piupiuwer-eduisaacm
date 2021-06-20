import React from "react";
import {Link} from "react-router-dom";

import Input from "../input/index";

import * as S from "./style";

interface LoginPopUpProps{
    onClose: Function,
    id: string
}

const LoginPopUp: React.FC<LoginPopUpProps> = ({ id='modal', onClose = () => {}, children }) => {

    const onlyOutsideClick = (e: React.FormEvent<HTMLInputElement>) => {
        if (e.target.id === id) onClose();

    }
    return(
        <S.PopupContainer id="modal" onClick={onlyOutsideClick}>
            <div className="container">
                <S.Fechar onClick={onClose}/>
                <p>Fazer o login</p>
                <S.Form>
                    <Input 
                        label="E-mail:"
                        name="E-mail"                
                    />
                    <Input 
                        label="Senha:"
                        name="Senha"                
                    />
                </S.Form>
                <Link to="/feed">
                    <S.Botao>Entrar</S.Botao>
                </Link>


            </div>
        </S.PopupContainer>
    );

}

export default LoginPopUp;