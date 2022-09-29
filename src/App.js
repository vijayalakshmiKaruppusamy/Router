import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Profile from './Components/Profile'
import Search from "./Components/Search"
import Trending from "./Components/Trending"
import Create from "./Components/Create"
import profile from "./Assets/Profile-Icon.svg"
import search from "./Assets/search.svg"
import trending from "./Assets/trending_up.svg"
import addCircle from "./Assets/add_circle.svg"
import { List,HeaderList,ProfileIcon,SearchingIcon,TrendingIcon,CreateIcon,SearchLink,TrendingLink,CreateLink,MainContainer  } 
              from "./Components/NavBar.Styled"


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
      </Routes>

      </MainContainer>
        
     </Router>
  );
}

function Navigate(){
  return(
    <div>
      <List>
        <HeaderList>
          <ProfileIcon src={ profile } alt="Profile" />
        </HeaderList>
        <HeaderList>
          <SearchingIcon src={ search } alt="Search" />
          <SearchLink to="/search">search</SearchLink>
        </HeaderList>
        <HeaderList>
          <TrendingIcon  src={ trending } alt="Treanding" />
          <TrendingLink to="/trending">trending</TrendingLink>
        </HeaderList>
        <HeaderList>
          <CreateIcon src={ addCircle} alt="" />
          <CreateLink to="/create">create</CreateLink>
        </HeaderList>
      </List>
     
      
   </div>
  );
}

export default App;
