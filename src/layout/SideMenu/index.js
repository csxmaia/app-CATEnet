import {Text} from "@chakra-ui/react";

import './styles.scss';
import {Link} from "react-router-dom";

export default function SideMenu() {
  return (
    <div className={"side-menu"}>
      <div className={"header-menu"}>
        <Text fontSize={"2xl"}>Profile: {"{{Role}}"}</Text>
      </div>
      <div className={"menu"}>
        <Text style={{fontWeight: "600", marginLeft: "8px"}} fontSize={"xl"}>Admin</Text>
        <div className={"items"}>
          <Link to={"/cadastrar/usuario"}><div>Visualizar usuarios</div></Link>
          <Link to={"/cadastrar/usuario"}><div>Cadastrar um usuario</div></Link>
          <Link to={"/cadastrar/usuario"}><div>Bloquear um usuario</div></Link>
          <Link to={"/cadastrar/usuario"}><div>Verificar solicitações</div></Link>
          <Link to={"/cadastrar/usuario"}><div>Cadastrar usuario temporario</div></Link>
        </div>
        <Text style={{fontWeight: "600", marginLeft: "8px", marginTop: "12px"}} fontSize={"xl"}>Técnico</Text>
        <div className={"items"}>
          <Link to={"/cadastrar/usuario"}><div>Visualizar usuarios</div></Link>
          <Link to={"/cadastrar/usuario"}><div>Verificar solicitações</div></Link>
          <Link to={"/cadastrar/usuario"}><div>Cadastrar usuario temporario</div></Link>
        </div>
      </div>
    </div>
  )
}