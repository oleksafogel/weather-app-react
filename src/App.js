import "./App.css";
import SearchField from "./SearchField";
import CurrentLocation from "./CurrentLocation";
import CurrentEmoji from "./CurrentEmoji";
import CurrentWeather from "./CurrentWeather";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="row Header">
        <div className="col-4">
          <SearchField />
          <CurrentLocation />
        </div>
        <div className="col-4">
          <CurrentEmoji />
        </div>
        <div className="col-4">
          <CurrentWeather />
        </div>
      </div>
      <div className="row footer">
        <div className="col-12 footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}
