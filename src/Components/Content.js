import { Title,Tag,Date,Id,TagContainer,Division,
       DateTitle,DateId,TopicContent } from "./NavBar.Styled"

function Content(props)
{
   return(
       <Division>
          <DateTitle>
             <DateId>
                <Date >{props.Date}</Date>
                <Id > {props.Id}</Id>    
             </DateId>
             <TopicContent>
                <Title> {props.Heading}</Title >   
                <div>{props.Describe}</div>
             </TopicContent>
          </DateTitle>
          <TagContainer>   
             <Tag >{props.Tag1}</Tag> 
             <Tag >{props.Tag2}</Tag> 
          </TagContainer> 
        </Division>
      );
}
export default Content;