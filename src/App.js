
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import './styles/header.css'
import Bollywood from './components/Bollywood/Bollywood';
import Home from './components/Home';
import PagenotFound from './components/Pagenotfound';

function App()
{
  return(
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/Bollywood" component={Bollywood} exact/>
          <Route path="/Technology" />
          <Route path="/Hollywood" />
          <Route path="/Fitness" />
          <Route path="/Food" />
          <Route path="/home" component={Home} exact/>
          <Route path="/" component={Home} exact/>
          <Route component={PagenotFound} />
        </Switch>
      </BrowserRouter>
      {/* <Gallery />
      <Latest />
      <LatestArticle />
      <LatestStories /> */}
    </>
  )
}
export default App;