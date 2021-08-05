import {Button, Input, Text} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import './styles.scss';

export default function UserCreate() {
  let history = useHistory();

  return (
    <div className={"user-create"}>
      <Text fontSize={"2xl"}>Cadastrar usuario</Text>
      <div className={"page-content"}>
        <form>
          <div className={"grid"}>
            <div className={"item span4"}>
              <Text>Nome</Text>
              <Input />
            </div>
            <div className={"item span4"}>
              <Text>Sobrenome</Text>
              <Input />
            </div>
            <div className={"item span4"}>
              <Text>RG/CPF</Text>
              <Input />
            </div>
            <div className={"item span3"}>
              <Text>Matricula</Text>
              <Input />
            </div>
            <div className={"item span3"}>
              <Text>Senha</Text>
              <Input />
            </div>
            <div className={"item span6"}>
              <Text>Email</Text>
              <Input />
            </div>
            <div className={"item span12"}>
              <Text>Descrição</Text>
              <Input />
            </div>
          </div>
          <div className={"action-buttons"}>
            <div onClick={() => history.goBack()}><Button>Voltar</Button></div>
            <Button type={"submit"} colorScheme="blue">Salvar</Button>
          </div>
        </form>
      </div>
    </div>
  )
}