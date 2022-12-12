import React from "react";

import { Route, Routes } from "react-router-dom";

import Header from "./components/Layout/Header";
import Homepage from "./pages/Homepage";
import AtHome from "./pages/AtHome";
import Wanted from "./pages/Wanted";
import History from "./pages/History";
import HomeProvider from "./store/HomeProvider";

function App() {
  return (
    <HomeProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/athome" element={<AtHome />} />
        <Route path="/wanted" element={<Wanted />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </HomeProvider>
  );
}

export default App;

// useState to manage the state variable that contains data retreived from backend and useEffect to refresh it.
