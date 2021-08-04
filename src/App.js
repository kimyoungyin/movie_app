import "./style.css";
import Home from "./routes/Home";
import About from "./routes/About";
import { HashRouter, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Detail from "./routes/Detail";

const App = () => {
    return (
        <HashRouter>
            <Navigation />
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/movie-detail" component={Detail} />
        </HashRouter>
    );
};

export default App;
