import Home from "./pages/Home";
// import aos
import Aos from 'aos';  
// import aos css
import 'aos/dist/aos.css';

function App() {
  Aos.init({
    duration: 1800,
    offset: 0,
  });
  return <Home />;
}

export default App;
