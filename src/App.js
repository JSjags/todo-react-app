import { Fragment } from "react";
import GlobalStyle from "./components/GlobalStyles/Index";
import Wrapper from "./components/Wrapper/Wrapper.styles";
import Header from "./components/Header/Index.jsx";
import Todo from "./components/Todo/Index.jsx";

function App() {
  return (
    <Fragment>
      <GlobalStyle /> 
      <Wrapper>
        <Header />
        <Todo />
      </Wrapper> 
    </Fragment>
  );
}

export default App;
