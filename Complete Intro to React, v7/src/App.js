import { render } from "react-dom";
import { Link } from "react-router-dom";
import { StrictMode, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";
import ThemeContext from "./ThemeContext";
const App = () => {
  const Theme = useState("red");
  return (
    // StrictMode is a tool for highlighting potential problems in an application.Like Fragment,
    // StrictMode does not render any visible UI. It activates additional checks and warnings for its descendants.
    // Note:Strict mode checks are run in development mode only; they do not impact the production build.
    <StrictMode>
      <BrowserRouter>
        <ThemeContext.Provider value={Theme}>
          <header>
            <Link to="/">About Me!</Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </ThemeContext.Provider>
      </BrowserRouter>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
