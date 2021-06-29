
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import './styles/header.css'
import Bollywood from './components/Bollywood/Bollywood';
import Home from './components/Home';
import PagenotFound from './components/Pagenotfound';
import ReactAnim from './components/Technology/ReactAnim';

function App()
{
  return(
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/Bollywood/:blog" render={() => <ReactAnim/>} exact/>
          <Route path="/Bollywood" component={Bollywood} exact/>
          <Route path="/Technology" component={ReactAnim} exact/>
          <Route path="/Hollywood" exact/>
          <Route path="/Fitness" exact/>
          <Route path="/Food" exact/>
          <Route path="/home" component={Home} exact/>
          <Route path="/" component={Home} exact/>
          <Route path="/google" component={() => { 
              window.location.href = 'https://www.google.com/'; 
              return null;
          }}/>
          <Route component={PagenotFound} />
        </Switch>
      </BrowserRouter>
    </>
  )
}
export default App;