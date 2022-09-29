import Content from "./Content"
import ReadMore from "./ReadMore"
function Profile(){
    const article = [
        {
            heading : "15 Disadvantages Of Freedom And How You Can Workaround It.",
            id : "@samurai2099",
            date : "27 May",
            describe : <ReadMore>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna   aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor in reprehenderit in voluptate velit  esse cillum dolore eu fugiat nulla pariatur. Excepteur   sint occaecat cupidatat non proident, sunt in culpa qui  officia deserunt mollit anim id est laborum.
                       </ReadMore>,
            tag1 : "#meditation",
            tag2 : "#mentalpeace"
        },
        {
            heading : "The Death Of Freedom",
            id : "@capitalism",
            date : "24 May",
            describe : <ReadMore>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna   aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor in reprehenderit in voluptate velit  esse cillum dolore eu fugiat nulla pariatur. Excepteur   sint occaecat cupidatat non proident, sunt in culpa qui  officia deserunt mollit anim id est laborum.
                       </ReadMore>,
            tag1 : "#anarchy",
            tag2 : "#silence"
        }
    ];
    return(
        
            article.map((feedback) => {
            return(
             <Content   
              Heading = {feedback.heading}
              Id = {feedback.id}
              Date = {feedback.date}
              Describe = {feedback.describe }
              Tag1 = {feedback.tag1}
              Tag2 = {feedback.tag2} />
            );
        })
    
    );
    
}
export default Profile;