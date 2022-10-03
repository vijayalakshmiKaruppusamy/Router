import styled from "styled-components"
import { Link } from "react-router-dom"
import "../../src/Styles/font.css"

export const MainContainer = styled.div`
display:flex;`

export const List = styled.ul`
position:fixed;
box-sizing:border-box;
margin:0;
padding :0;
width: 95px;
height:655px;
border:1px solid green;`

export const ProfileIcon = styled.img`
position:absolute;
top:98px;
left:15px;`

export const SearchingIcon = styled(ProfileIcon)`
left: 28px;
top: 205px;`

export const TrendingIcon = styled(SearchingIcon)`
top: 290px;`

export const CreateIcon = styled(TrendingIcon)`
top: 516px;`

export const SearchLink = styled(Link)`
position: absolute;
font-size: 16px;
font-family:LexendDeca-Regular;
left: 23px;
top: 245px;
text-decoration: none;
color: #101010;`

export const TrendingLink = styled(SearchLink)`
top:325px;`

export const CreateLink = styled(TrendingLink)`
top:556px`

export const ReadMoreLink = styled(Link)`
text-decoration: none;
color:#006711;`