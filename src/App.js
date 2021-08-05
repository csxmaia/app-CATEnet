import Layout from "./layout";
import './App.css';
import UserCreate from "./pages/User/Create";
import { ChakraProvider } from "@chakra-ui/react"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Router>
          <Layout>
            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route exact path="/cadastrar/usuario">
                <UserCreate/>
              </Route>
            </Switch>
          </Layout>
        </Router>
      </ChakraProvider>
    </div>
  );
}

export default App;
