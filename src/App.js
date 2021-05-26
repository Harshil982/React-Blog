import Header from './components/Header'
import {BrowserRouter,Route} from 'react-router-dom';
import './styles/header.css'
import Gallery from './components/Gallery'
import Latest from './components/Latest';
import LatestStories from './components/LatestStories';
import LatestArticle from './components/LatestArticle';

function App()
{
  return(
    <>
      <BrowserRouter>
        <Header />
        <hr />
        <Route path="/Home" />
        <Route path="/Bollywood" />
        <Route path="/Technology" />
        <Route path="/Hollywood" />
        <Route path="/Fitness" />
        <Route path="/Food" />
      </BrowserRouter>
      <Gallery />
      <Latest />
      <LatestArticle />
      <LatestStories />
    </>
  )
}
export default App;