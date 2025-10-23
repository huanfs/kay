
import { HashRouter, Routes, Route } from "react-router-dom";

import AuthScreen from "@templates/authScreen.jsx";
import Main from "@templates/main.jsx";

function App(){
  return(
     <HashRouter>
      <Routes>
        <Route path="/" element={<AuthScreen />}/>
        <Route path="/main" element={<Main />}/>
      </Routes>
    </HashRouter>
  )
};

export default App;