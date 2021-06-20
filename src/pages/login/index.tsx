import React, {useState} from "react";

import * as S from "./style";
import LoginPopUp from "../../components/LoginPopUp";

import fundoLogin from "../../assets/images/fundo-login.png";
import Logo from "../../assets/images/logo.svg";



function Login() {

    const [isModalVisible, setIsModalVisible] = useState(false);

    return(
        <div>
            <S.Fundo>
                <S.Conteudo>
                    <S.Logo src={ Logo } alt="Piupiwer" />
                    <div>
                        <S.Titulo><S.TituloCor1>Piu</S.TituloCor1><S.TituloCor2>piwer</S.TituloCor2></S.Titulo>
                        <p className="legenda">Conectando passarinhos de todo o mundo</p>
                        <S.Botoes>
                        <li>
                            <S.Botao1 className="buttons">Cadastrar</S.Botao1>
                        </li>
                        <li>
                            <S.Botao2 className="buttons" onClick={() => setIsModalVisible(true) }>Entrar</S.Botao2>
                            {isModalVisible && <LoginPopUp onClose={() => setIsModalVisible(false)}>
                            
                            
                            </LoginPopUp>
                            }
                        </li>
                    </S.Botoes>
                    </div>
                </S.Conteudo>
                <div className="imagem">
                    <S.BackImg src={fundoLogin} alt="Conecte-se com o Piupiwer."/>
                </div>
            </S.Fundo>
        </div>

    );
}

export default Login;