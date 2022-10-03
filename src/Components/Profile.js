import Content from "./Content"
import { article } from "./Article"
import rectangle from "../Assets/Rectangle.svg"
import { WholeBlog, Latest, Latesttext } from "../StyledComponents/ProfileStyled"
function Profile() {
    return (
        <div>
            <Latest>
                <img src={rectangle} alt="Rectangle" />
                <Latesttext>Latest</Latesttext>
            </Latest>

            <WholeBlog>
                {
                    article.map((feedback) => {
                        return (
                            <Content
                                Heading={feedback.heading}
                                Id={feedback.id}
                                Date={feedback.date}
                                Describe={feedback.describe}
                                Tag1={feedback.tag1}
                                Tag2={feedback.tag2} />
                        );
                    })
                }
            </WholeBlog>
        </div>

    );

}
export default Profile;

