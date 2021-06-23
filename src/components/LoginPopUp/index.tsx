import React, {useState, useCallback, FormEvent} from "react";
import {Link} from "react-router-dom";
import { useAuth } from "../../hooks/auth";

import Input from "../input/index";

import * as S from "./style";

interface LoginPopUpProps{
    onClose: () => void,
    id?: string
}



const LoginPopUp: React.FC<LoginPopUpProps> = ({ id='modal', onClose, children }) => {


    const onlyOutsideClick = (e: React.FormEvent<HTMLInputElement>) => {
        const target = e.target as Element;
        if (target.id === id) onClose();
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [mensagemVazio, setMensagemVazio] = useState(false);

    const [mensagemErro, setMensagemErro] = useState(false);


    const { login, user } = useAuth();

    const doLogin = useCallback(async (e: FormEvent) => {
        e.preventDefault();
        {(email.length == 0 || password.length == 0) && setMensagemVazio(true)}
        {(email.length > 0 && password.length > 0) && setMensagemVazio(false)}
        console.log("oi");
        login(email, password);
        {(!user && email.length > 0 && password.length > 0) && setMensagemErro(true)}


    }, [login, email, password]);


    return(
        <S.PopupContainer id="modal" onClick={() => onlyOutsideClick}>
            <div className="container">
                <S.Fechar onClick={onClose}/>
                <S.Titulo>Fazer o login</S.Titulo>
                {mensagemVazio && <S.Erro>Todos os campos devem estar preenchidos.</S.Erro>}
                {mensagemErro && <S.Erro>E-mail ou senha incorreto.</S.Erro>}
                <S.Form>
                    <Input 
                        type="text"
                        label="E-mail:"
                        name="E-mail" 
                        onChange={event => setEmail(event.target.value)}                 
                    />
                    <Input
                        type="password" 
                        label="Senha:"
                        name="Senha" 
                        onChange={event => setPassword(event.target.value)}               
                    />
                </S.Form>
                <Link to="/feed">
                    <S.Botao onClick={doLogin}>Entrar</S.Botao>
                </Link>
            </div>
        </S.PopupContainer>
    );

}

export default LoginPopUp;