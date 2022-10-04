import "./App.css";
import MainContent from "./components/mainContentSlideShow/MainContent";
import DarkHeader from "./layouts/darkHeader/DarkHeader";
import LightHeader from "./layouts/lightHeader/LightHeader";

function App() {
  return (
    <div className="App">
      <DarkHeader />
      <LightHeader />
      <MainContent />
    </div>
  );
}

export default App;
