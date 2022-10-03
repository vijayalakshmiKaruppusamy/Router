import {
   Title, Tag, Date, Id, TagContainer, Division,
   DateTitle, DateId, TopicContent, Describe,ReadLink} from "../StyledComponents/Contentstyled"

function Content(props) {
   return (
      <Division>
         <DateTitle>
            <DateId>
               <Date >{props.Date}</Date>
               <Id > {props.Id}</Id>
            </DateId>
            <TopicContent>
               <Title> {props.Heading}</Title >
               {props.Describe.length <= 600 && <div>{props.Describe}</div>}
               {props.Describe.length > 600 &&
               <Describe>
                  {props.Describe.substring(0, 600) + "..."}
                  <ReadLink to="/Readmore" state={{ id: props.Id }}>read more</ReadLink>
               </Describe>}
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