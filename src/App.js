import Navigation from "./components/Navigation"
import Body from "./components/Body"
import './styles/app.scss'
import "slick-carousel/slick/slick.css" 
import "slick-carousel/slick/slick-theme.css"


function App() {
  return (
    <div className="App">
        <Navigation/>
        <Body/>
    </div>
  );
}

export default App;
