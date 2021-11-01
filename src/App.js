import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import coinDetail from "./pages/coinDetail";
import coinSummary from "./pages/coinSummary";
import Header from "./components/Header";
import { WatchListContextProvider } from "./context/watchListContext";

const App = () => {
  return (
    <div>
      <WatchListContextProvider>
        <BrowserRouter>
          <Header />
          <Route exact path="/" component={coinSummary} />
          <Route path="/coins/:id" component={coinDetail} />
        </BrowserRouter>
      </WatchListContextProvider>
    </div>
  );
};

export default App;
