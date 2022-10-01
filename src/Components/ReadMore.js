import { useState } from "react"
import { ReadMoreLink } from "./NavBar.Styled"


function ReadMore({children}){
    const [readMore,setReadMore] = useState(false);

    const Expand = () => 
    {
        setReadMore(prevState => !prevState)
    }
    return(
         <div>
             {readMore ? children : children.substr(0,500)}
             <ReadMoreLink  onClick={Expand}>{readMore ? '' : '...read more'} </ReadMoreLink>
         </div>
    );
}
export default ReadMore;