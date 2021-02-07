import React from 'react';
import Routes from "./Routes/Routes";
import GlobalComponents from "./Layouts/Components/Global/GlobalComponents";
import {GlobalStyle} from "./Static/Styles/GlobalStyles";

function App() {
  return (
      <React.Fragment>
          <GlobalStyle />
          <Routes/>
          <GlobalComponents />
      </React.Fragment>
  );
}

export default App;
