import React, { useState } from "react";

import { useAuth } from '../../hooks/auth';

import api from '../../services/api';

import * as I from "../../models/index";
import * as S from "./style";

import Fala from "../../assets/images/Capturar.png";
import ImgPadrao from "../../assets/images/imgicone.svg";
import AudioPadrao from "../../assets/images/audioIcone.svg";
import { useEffect } from "react";


const PostarPiu: React.FC = () => {
    const { user } = useAuth();

    const [mensagemErro, setMensagemErro] = useState(false);

    const [contador, setContador] = useState(0);

    const [piuTexto, setPiuTexto] = useState("");

    const [corDeErro, setCorDeErro] = useState("");


    useEffect(()=>{
        
        setContador(piuTexto.length);

        const Validacao = () => {
            if (piuTexto.length > 140) {
                setCorDeErro("erro")
            }

            if (piuTexto.length > 0 && piuTexto.length < 140) {
                setCorDeErro("")
                setMensagemErro(false)
            }
        }
        
        Validacao();
    },[piuTexto.length])

    const postarPiu = async () => {
        if (piuTexto.length == 0 || piuTexto.length > 140) {
            setMensagemErro(true)
            setCorDeErro("erro")
        } else {
            setMensagemErro(false)
            await api.post('/pius', { text: piuTexto })
            window.location.reload();
        }
    }

    
    return(
        <S.NovoPiuContainer>
            {mensagemErro && <span className={corDeErro} >Número de caracteres inválidos.</span>}
            <S.Post>
                <S.ImgPerfilContainer>
                    <S.ImgPerfil src={user.photo} alt={user.first_name} />
                </S.ImgPerfilContainer>
                <S.Fala src={Fala}/>
                <form>
                    <S.TextArea  className={corDeErro} value={piuTexto} placeholder="Dê um piu!" onChange={ (e) => setPiuTexto(e.target.value)}></S.TextArea>
                </form>
                <S.Contador className={corDeErro}>{contador}/140</S.Contador>

            </S.Post>
            <S.IconesBotao>
                <S.Icones>
                    <S.Icone src={ImgPadrao} alt="Upload de Imagem" />
                    <S.Icone src={AudioPadrao} alt="Upload de Áudio" />
                </S.Icones>
                <S.BotaoPostar onClick={postarPiu}>Postar</S.BotaoPostar>
            </S.IconesBotao>
        </S.NovoPiuContainer>
    )
}

export default PostarPiu;