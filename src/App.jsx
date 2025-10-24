
import { HashRouter, Routes, Route } from "react-router-dom";

import AuthScreen from "@templates/authScreen.jsx";
import Main from "@templates/main.jsx";
import Letter from "@templates/letter.jsx";
import Flower from "@templates/flower.jsx";
import Sort from"@templates/sort.jsx";

function App(){
  return(
     <HashRouter>
      <Routes>
        <Route path="/" element={<AuthScreen />}/>
        <Route path="/main" element={<Main />}/>
        <Route path="/letter" element={<Letter />}/>
        <Route path="/flower" element={<Flower />}/>
        <Route path="/sort" element={<Sort />}/>
      </Routes>
    </HashRouter>
  )
};

export default App;