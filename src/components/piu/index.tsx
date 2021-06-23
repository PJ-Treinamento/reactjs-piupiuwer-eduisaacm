import React from "react";

import ImagemPadrao from "../../assets/images/perfil.svg"
import Like from "../../assets/images/like.svg"
import Estrela from "../../assets/images/estrela.svg"
import Lixeira from "../../assets/images/lixeira.svg"

import * as S from "./style";


function Piu() {
    return(
    <S.piuContent>
        <div>
            <S.imgInteracao src={ImagemPadrao} alt="" />
            <p className="username"></p>
        </div>
        <p className="conteudo-texto">Oi tudo bem?</p>
        <div>
            <div className="interacao">
                <figure>
                    <S.imgInteracao src={Like} alt="Curtida" />
                    <figcaption></figcaption>
                </figure>
                <S.imgInteracao src={Estrela} alt="Estrela" />
                <S.imgInteracao src={Lixeira} alt="Lixeira" />
            </div>
        </div>
    </S.piuContent>
    )
}

export default Piu;