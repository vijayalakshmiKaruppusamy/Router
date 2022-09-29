import styled from "styled-components";
import { Link } from "react-router-dom"

export const Division = styled.div`
display:flex;
flex-direction:column;
`

export const List = styled.ul`
box-sizing:border-box;
margin:0;
padding :0;
width: 95px;
height:655px;
border:1px solid green;`

export const HeaderList = styled.li`
display:flex;
flex-direction:column;
`;

export const ProfileIcon = styled.img`
position:absolute;
top:98px;
left:15px;
`;

export const SearchingIcon = styled(ProfileIcon)`
left: 28px;
top: 205px;`;

export const TrendingIcon = styled(SearchingIcon)`
top: 290px;
`;

export const CreateIcon = styled(TrendingIcon)`
top: 516px;`;

export const SearchLink = styled(Link)`
position: absolute;
font-size: 16px;
left: 26px;
top: 245px;
text-decoration: none;
color:black;
`;

export const TrendingLink = styled(SearchLink)`
top:325px;
`;

export const CreateLink = styled(TrendingLink)`
top:556px`;

export const ReadMoreLink = styled(Link)`
text-decoration: none;
color:#006711;;
`

export const Title = styled.div`
font-size: 32px;
color: #006711;`

export const Date = styled.div`
font-size: 32px;
color: #101010;`

export const Id = styled.div`
// transform: rotate(-90deg);
font-size: 16px;
color: #101010;`;

export const TagContainer = styled.div`
display : flex;
column-gap:1rem;`;


export const Tag = styled.div`
width:90px;
text-align:center;
border: 1px solid #006711;
border-radius: 100px;
font-weight: 500;
font-size: 13px;
color: #006711;`

export const Description = styled.div`
`

export const MainContainer = styled.div`
display:flex;`

export const InputField = styled.div`
 display:grid;
 grid-template-columns:200px 200px 200px;
 padding:1rem;
 `;

 export const Mandatory = styled.span`
 color:red;`;

 export const Error = Mandatory;

 export const Form = styled.form`
 display:flex;
 flex-direction:column;
 margin : 8rem 0 0 15rem;
 row-gap:1rem;
 border: 2px solid grey;
 background-color:whitesmoke`

 export const FormTitle = styled.h1`
 text-align:center`
 
 export const Button = styled.button`
 width:30px;
 display:flex;
 margin:0 0 1rem 13rem;
 border:none;
 gap:5px;`

