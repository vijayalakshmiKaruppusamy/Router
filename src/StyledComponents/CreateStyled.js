import styled from "styled-components";

export const Form = styled.form`
 display:flex;
 flex-direction:column;
 row-gap:1rem;
 margin : 4rem 0 0 15rem;
 border: 2px solid grey;
 background-color:whitesmoke`

 export const FormTitle = styled.h1`
 text-align:center`
 
export const InputField = styled.div`
 display:grid;
 grid-template-columns:200px 200px 200px;
 padding:1rem;`

export const Mandatory = styled.span`
 color:red;`

export const Error = Mandatory;

export const Button = styled.button`
 width:30px;
 display:flex;
 margin:0 0 1rem 13rem;
 border:none;
 gap:5px;`

