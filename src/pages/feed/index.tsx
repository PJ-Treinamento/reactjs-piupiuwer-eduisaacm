import axios from "axios";
import React, {useEffect} from "react";

import Header from "../../components/header/index";
import NavBar from "../../components/navBar/index";
import Piu from "../../components/piu/index"

import api from "../../services/api";

import * as M from "../../models/index";
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
                    <Piu />
                </S.Conteudo>
            </S.Main>
        </div>
    );
}

export default Feed;