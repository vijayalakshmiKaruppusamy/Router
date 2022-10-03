import { useLocation } from "react-router-dom"
import { article } from "../Components/Article"
import { Title, Tag, Date, Id, TagContainer, Division, Describe, DateId } from "../StyledComponents/Readmorestyled"

export default function ReadMore() {
  const { state } = useLocation();
  return (
    <>
      {article.map((feedback) => {
        return (
          <>
            {state.id === feedback.id && (
              <>
                <Division>
                  <Title> {feedback.heading}</Title >
                  <DateId>
                    <Id >Written by {feedback.id}</Id>
                    <Date >on {feedback.date}</Date>
                  </DateId>
                  <Describe>{feedback.describe}</Describe>
                  <TagContainer>
                    <Tag >{feedback.tag1}</Tag>
                    <Tag >{feedback.tag2}</Tag>
                  </TagContainer>
                </Division>
              </>
            )}
          </>
        );
      })}
    </>
  )
}
