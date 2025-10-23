
import { HashRouter, Routes, Route } from "react-router-dom";

import AuthScreen from "@templates/authScreen.jsx";

function App(){
  return(
     <HashRouter>
      <Routes>
        <Route path="/" element={<AuthScreen />} />
      </Routes>
    </HashRouter>
  )
};

export default App;