import axios from "axios";
import React, {useEffect} from "react";

import Header from "../../components/header/index";
import NavBar from "../../components/navBar/index";
import Piu from "../../components/piu/index";
import PostarPiu from "../../components/postarPiu";

import api from "../../services/api";

import * as I from "../../models/index";
import * as S from "./style";
import { useState } from "react";



function Feed() {

    const [pius, setPius] = useState([])

    useEffect(() => {
        const loadPius = async () => {
          const response = await api.get('/pius');
          setPius(response.data);
          console.log(response.data);
        }
        pius.forEach(element => {
        });
        loadPius()
    }, []);    
        

    return(
        <div>
            <Header 
                direcao="Meu Perfil"
            />
            <S.Main>
                <NavBar />
                <S.Conteudo>
                    <PostarPiu />
                    <Piu pius={pius} />
                </S.Conteudo>
            </S.Main>
        </div>
    );
}

export default Feed;