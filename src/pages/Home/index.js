import './styles.scss';
import {Text} from "@chakra-ui/react";
import {Link} from "react-router-dom";

export default function Home() {
  return (
    <div className={"home"}>
      <Text fontSize={"2xl"} style={{margin: "0px"}}>Bem vindo Cristhian</Text>
      <div className={"page-content"}>
        <Link to={"/cadastrar/usuario"} className={"func"}>
          Visualizar usuarios
        </Link>
        <Link to={"/cadastrar/usuario"} className={"func"}>
          Cadastrar um usuario
        </Link>
        <Link to={"/cadastrar/usuario"} className={"func"}>
          Bloquear um usuario
        </Link>
        <Link to={"/cadastrar/usuario"} className={"func"}>
          Verificar solicitações
        </Link>
        <Link to={"/cadastrar/usuario"} className={"func"}>
          Cadastrar usuario temporario
        </Link>
      </div>
    </div>
  )
}