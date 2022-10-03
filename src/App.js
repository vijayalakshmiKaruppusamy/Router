import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Profile from './Components/Profile'
import Search from "./Components/Search"
import Trending from "./Components/Trending"
import Create from "./Components/Form/Create"
import Navigate from "./Components/Navigate"
import ReadMore from "./Components/ReadMore"
import { MainContainer } from "./StyledComponents/NavBar.Styled"
 
function App() {
  return (
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
  );
}
export default App;
