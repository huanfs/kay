
import { HashRouter, Routes, Route } from "react-router-dom";

import AuthScreen from "@templates/authScreen.jsx";
import Main from "@templates/main.jsx";
import Letter from "@templates/letter.jsx";

function App(){
  return(
     <HashRouter>
      <Routes>
        <Route path="/" element={<AuthScreen />}/>
        <Route path="/main" element={<Main />}/>
        <Route path="/letter" element={<Letter />}/>
      </Routes>
    </HashRouter>
  )
};

export default App;