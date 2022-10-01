import profile from "../Assets/Profile-Icon.svg"
import search from "../Assets/search.svg"
import trending from "../Assets/trending_up.svg"
import addCircle from "../Assets/add_circle.svg"
import { List,ProfileIcon,SearchingIcon,TrendingIcon,
       CreateIcon,SearchLink,TrendingLink,CreateLink  } from "./NavBar.Styled"

function Navigate(){
    return(
      <div>
        <List>
          <div>
            <ProfileIcon src={ profile } alt="Profile" />
          </div>
          <div>
            <SearchingIcon src={ search } alt="Search" />
            <SearchLink to="/search">search</SearchLink>
          </div>
          <div>
            <TrendingIcon  src={ trending } alt="Treanding" />
            <TrendingLink to="/trending">trending</TrendingLink>
          </div>
          <div>
            <CreateIcon src={ addCircle} alt="" />
            <CreateLink to="/create">create</CreateLink>
          </div>
        </List>
      </div>
    );
  }
export default Navigate;  