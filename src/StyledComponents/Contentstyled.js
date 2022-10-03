import styled from "styled-components";
import { Link } from "react-router-dom";

export const Division = styled.div`
margin:3rem 0 0 10rem`

export const DateTitle = styled.div`
display:flex;
height:200px`

export const DateId = styled.div`
width:73px;`

export const Date = styled.div`
font-size: 32px;
font-family:LexendDeca-Regular;
color: #1E1E1E;`

export const Id = styled.div`
transform: rotate(-90deg);
margin-top: 4.5rem;
font-size: 16px;
font-family:LexendDeca-Regular;
color: #101010;`

export const TopicContent = styled(DateId)`
width:900px;
display:flex;
flex-direction:column;
row-gap:1rem;`

export const Title = styled.div`
font-size: 28px;
font-family:LexendDeca-Regular;
color: #006711;`

export const Describe = styled.div`
font-family:LexendDeca-Regular;`

export const ReadLink = styled(Link)`
font-family:LexendDeca-Bold;
text-decoration:none;
color:#006711;`

export const TagContainer = styled.div`
display : flex;
column-gap:1rem;
margin-left:4.5rem`

export const Tag = styled.div`
width:90px;
text-align:center;
border: 1px solid #006711;
padding:5px;
border-radius: 100px;
font-size: 13px;
font-family:LexendDeca-Regular;
color: #006711;`