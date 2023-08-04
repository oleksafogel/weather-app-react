import "./App.css";

import SearchField from "./SearchField";
import CurrentLocation from "./CurrentLocation";
import CurrentEmoji from "./CurrentEmoji";
import CurrentWeather from "./CurrentWeather";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <SearchField />
        <div className="row current">
          <div className="col">
            <CurrentLocation />
          </div>
          <div className="col d-flex justify-content-center align-items-center">
            <CurrentEmoji />
          </div>
          <div className="col d-flex justify-content-center align-items-start">
            <CurrentWeather />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
