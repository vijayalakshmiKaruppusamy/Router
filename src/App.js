import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Profile from './Components/Profile'
import Search from "./Components/Search"
import Trending from "./Components/Trending"
import Create from "./Components/Create"
import ReadMore from "./Components/ReadMore"
import Navigate from "./Components/Navigate"
import { MainContainer } from "./Components/NavBar.Styled"
 
function App() {
  return (
     <Router>
      <MainContainer>
         <Navigate />
         <Routes>
          <Route path="/" element={<Profile />}/>
          <Route path="/search" element={<Search />}/>
          <Route path="/trending" element={<Trending />}/>
          <Route path="/create" element={<Create />} />
          <Route path="/readmore" element={<ReadMore />} />
          </Routes>
       </MainContainer>
      </Router>
  );
}
export default App;
