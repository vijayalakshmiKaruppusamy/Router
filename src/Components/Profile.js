import Content from "./Content"
import ReadMore from "./ReadMore"
import { WholeBlog } from "./NavBar.Styled"
function Profile(){
    const article = [
        {
            heading : "15 Disadvantages Of Freedom And How You Can Workaround It.",
            id : "@samurai2099",
            date : "27 May",
            describe : <ReadMore>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                         ut labore et dolore magna aliqua. Dignissim enim sit amet venenatis urna cursus eget nunc 
                         scelerisque. Semper viverra nam libero justo. Ac ut consequat semper viverra nam libero justo 
                         laoreet sit. Feugiat nibh sed pulvinar proin gravida. Cras tincidunt lobortis feugiat vivamus.
                         Ut consequat semper viverra nam libero. Senectus et netus et malesuada. Mauris ultrices eros in 
                         cursus turpis. Ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet. 
                         Aliquet nibh praesent tristique magna sit amet purus. Orci dapibus ultrices in iaculis nunc. 
                         At in tellus integer feugiat scelerisque varius. Volutpat consequat mauris nunc congue nisi vitae 
                         suscipit tellus mauris.
                        </ReadMore>,
            tag1 : "#meditation",
            tag2 : "#mentalpeace"
        },
        {
            heading : "The Death Of Freedom",
            id : "@capitalism",
            date : "24 May",
            describe : <ReadMore>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                         ut labore et dolore magna aliqua. Dignissim enim sit amet venenatis urna cursus eget nunc 
                         scelerisque. Semper viverra nam libero justo. Ac ut consequat semper viverra nam libero justo 
                         laoreet sit. Feugiat nibh sed pulvinar proin gravida. Cras tincidunt lobortis feugiat vivamus.
                         Ut consequat semper viverra nam libero. Senectus et netus et malesuada. Mauris ultrices eros in 
                         cursus turpis. Ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet. 
                         Aliquet nibh praesent tristique magna sit amet purus. Orci dapibus ultrices in iaculis nunc. 
                         At in tellus integer feugiat scelerisque varius. Volutpat consequat mauris nunc congue nisi vitae 
                         suscipit tellus mauris.
                        </ReadMore>,
            tag1 : "#anarchy",
            tag2 : "#silence"
        }
    ];
    return(
    
        <WholeBlog>
            {
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
    }
        </WholeBlog>
    
    );
    
}
export default Profile;
