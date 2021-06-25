import React, { useCallback, useEffect } from "react";

import ImagemPadrao from "../../assets/images/perfil.svg"
import Like from "../../assets/images/like.svg"
import SemLike from "../../assets/images/passion.svg"
import SemFavorito from "../../assets/images/estrela.svg"
import ComFavorito from "../../assets/images/star.svg"
import Lixeira from "../../assets/images/lixeira.svg"

import * as I from "../../models/index";
import * as S from "./style";

import { useState } from "react";
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

interface PiuProps {
    piu: I.Piu,
    pius: I.Piu[],
}

const Piu: React.FC<PiuProps> = ( {piu, pius} ) => {

    const [numeroLikes, setNumeroLikes] = useState(piu.likes.length);

    const [like, setLike] = useState(SemLike);

    const { user } = useAuth();

    useEffect(() => {
        const LikeSemLike = () => {
            piu.likes.map((users) => {
                if (user.id == users.id) {
                    setLike(Like);
                } else {
                    setLike(SemLike)
                }
            })
        }
        LikeSemLike();
    }, [])


    const darLike = useCallback(() => {
        pius.map((piuDados: I.Piu) => {
            if (piu.id === piuDados.id) {
                const darLikeMesmo = async () => {
                    const response = await api.post('/pius/like', { piu_id: piuDados.id })
                    const operation: string = response.data.operation
            
                    if (operation === 'like') {
                        setNumeroLikes(numeroLikes + 1);
                        setLike(Like);
                        console.log(operation)
                    }
                    else {
                        setNumeroLikes(numeroLikes - 1);
                        setLike(SemLike);
                        console.log(operation)

                    }}
                darLikeMesmo()

            }
        })
    }, [numeroLikes])


    const deletar = useCallback( () => {    
        pius.map((piuDados: I.Piu) => {
          if (piu.id === piuDados.id) {
            const deletePiu = async () => {
              await api.delete('/pius', { data: {piu_id: piuDados.id }})
              window.location.reload();
            }
            return deletePiu()
          }
        })
    }, [])
    


    return(
        <S.piuContent>
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
                <S.Figure>
                    <S.imgInteracao onClick={darLike} className="like" src={like} alt="Curtida" />
                    <figcaption>{numeroLikes}</figcaption>
                </S.Figure>
                <S.imgInteracao src={SemFavorito} alt="Estrela" />
                { (user.id === piu.user.id) && <S.imgInteracao onClick={deletar} src={Lixeira} alt="Lixeira" />}
            </S.Interacao>
        </S.piuContent>
    )
}

export default Piu;