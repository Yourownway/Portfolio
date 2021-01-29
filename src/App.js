import "./sass/style.css";
import { BrowserRouter as Router } from "react-router-dom";

import { Accueil, Contact, Header, Profil, Projects } from "./components/index";
import NavLeft from "./components/Atoms/NavLeft";
import useMediaQuery from "./Hooks/useMediaQuery";
import useWhell from "./Hooks/useWhell";
import React, { useEffect, useState } from "react";

function App() {
  const phone = useMediaQuery("(max-width: 768px)");
  const [eventWhell, setEventWhell] = useState(null);

  const smoothWhell = useWhell(eventWhell);
  const [hash, setHash] = useState();
  useEffect(() => {
    window.addEventListener("popstate", (e) => setHash(e.target.location.hash));
  }, [hash]);

  return (
    <>
      <Router>
        <Header />
        {phone ? null : <NavLeft hash={hash} />}
        <div
          className="container"
          id="container"
          onWheel={(e) => setEventWhell(e)}>
          <Accueil />
          <Profil />
          <Projects />
          <Contact />
        </div>
      </Router>
    </>
  );
}

export default App;
