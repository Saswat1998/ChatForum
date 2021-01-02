import logo from './logo.svg';
import './App.css';
import { Link, Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './home';
import Chat from './chat';
import Login from './login';

function App() {
  return (
    <div style={{backgroundImage:"URL('./collaborative.jpg')", position:"absolute", top:"0", bottom:"0", width:"100%"}}>
      <BrowserRouter>
        <div className="App">
          <h1 style={{backgroundColor:"blue",color:"white"}}>A collaborative Study Environment</h1>       
          <nav class="nav justify-content-center" style={{backgroundColor:"green", height:"2em", marginTop:10}}>
            <Link class="nav-link" style={{color:'white'}} to="/home">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link class="nav-link" style={{color:'white'}} to="/login">Login</Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link class="nav-link" style={{color:'white'}} to="/chat">Chat</Link>&nbsp;&nbsp;&nbsp;&nbsp;
          </nav>
        </div>
        <switch>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/chat" component={Chat}/>
          <Route exact path="/login" component={Login}/>
        </switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
