import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Main from './main';
function App(){
return (
<div>
  <Header ></Header>
  <Main 
  name="Emira"></Main>
  </div>
)
}



ReactDOM.render(
  <App/>, 
  document.getElementById("root")
);