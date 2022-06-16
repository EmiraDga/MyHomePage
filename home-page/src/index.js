import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Main from './components/main';
function App(){
return (
<div className='App'>
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