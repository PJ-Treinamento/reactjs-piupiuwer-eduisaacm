import React from "react";

import ImagemPadrao from "../../assets/images/perfil.svg"
import Like from "../../assets/images/like.svg"
import SemLike from "../../assets/images/passion.svg"
import SemFavorito from "../../assets/images/estrela.svg"
import ComFavorito from "../../assets/images/star.svg"
import Lixeira from "../../assets/images/lixeira.svg"

import * as I from "../../models/index";
import * as S from "./style";


const Piu: React.FC<I.Pius> = ( {pius} ) => {
    return(
    <S.piuContent>
        <div>
            <p className="username"></p>
        </div>
        {pius.map((piu) => (
            <S.piuContent key={piu.id}>
                <S.PerfilTexto>
                    <S.Perfil>
                        <S.ImgPerfilContainer>
                            <S.ImgPerfil src={piu.user.photo} alt={piu.user.first_name} />
                        </S.ImgPerfilContainer>
                        <p>{piu.user.first_name}</p>
                        <p>{piu.user.username}</p>
                    </S.Perfil>
                    <S.Texto>{piu.text}</S.Texto>
                </S.PerfilTexto>    
                <S.Interacao>
                    <figure>
                        <S.imgInteracao src={Like} alt="Curtida" />
                        <figcaption></figcaption>
                    </figure>
                    <S.imgInteracao src={SemFavorito} alt="Estrela" />
                    <S.imgInteracao src={Lixeira} alt="Lixeira" />
                </S.Interacao>
            </S.piuContent>
        ))}
    </S.piuContent>
    )
}

export default Piu;