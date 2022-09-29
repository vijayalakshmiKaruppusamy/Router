import { Title,Tag,Date,Id,TagContainer,Division,Description } from "./NavBar.Styled"
function Content(props)
{
    return(
       <Division>
          <Title> {props.Heading}</Title >   
          <Id > {props.Id}</Id>    
          <Date >{props.Date}</Date>
          <Description>{props.Describe}</Description>
          <TagContainer>   
          <Tag >{props.Tag1}</Tag> 
          <Tag >{props.Tag2}</Tag> 
          </TagContainer> 
        </Division>

    );
}
export default Content;