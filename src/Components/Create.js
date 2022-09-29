import { InputField,Form,Button,Mandatory,Error,FormTitle } from "./NavBar.Styled"
import {  useState,useRef,useEffect } from "react";

function Create(){
    
    var name = useRef();
    var date = useRef();
    var title = useRef();
    var description = useRef();
    var [formErrors , setFormErrors] = useState({}); 
    
  const handleSubmit = (e) => {
     e.preventDefault();   
     setFormErrors(Validate(name.current.value,
                           date.current.value,
                           title.current.value,
                           description.current.value));
  }


  const Validate =(name,date,title,description) => 
  {
    const errors = {};
     
      if(!name)
        errors.name = "Please enter Your name!";
      else if(name.charAt(0) !== '@' || /[A-Z]/.test(name))
        errors.name = "Invalid";
  
      if(!title)
        errors.title = "Please enter the title";
      else if(title.length < 5)
        errors.title = "Enter Proper title";
  
      if(!description)
        errors.description = "Please enter the content";
      else if(description.length < 10)
        errors.description = "Enter Proper description";
  
     return errors;
}

const handleClick = () => {
    name = "";
    date ="";
    title= "";
    description = "";
    
    setFormErrors({});
  };

useEffect(() => {
    localStorage.setItem('Username', name.current.value);
    localStorage.setItem('Date', date.current.value);
    localStorage.setItem('Title', title.current.value);
    localStorage.setItem('Description', description.current.value);
  },
  );

    
return(
    <div>
      <Form onSubmit={handleSubmit}>
        <FormTitle>Article</FormTitle>
         <InputField>
            <label>Username<Mandatory>*</Mandatory></label>
            <input 
              ref = { name }
              type="text" 
              name="name" />
            <Error>{ formErrors.name}</Error>
        </InputField>
        <InputField>
            <label>Date</label>
            <input 
               ref = { date }
               type="date"
               name="date" />
            <Error>{ formErrors.date}</Error>
        </InputField>
        <InputField>
            <label>Title<Mandatory>*</Mandatory></label>
            <input 
               ref = { title }
               type="text" 
               name="title" />
            <Error>{ formErrors.title}</Error>
        </InputField>
        <InputField>
            <label>Description<Mandatory>*</Mandatory></label>
            <input 
               ref = { description }
               type="textarea"
               name="description" />
            <Error>{ formErrors.description}</Error>
        </InputField>

        <Button>
        <input type="submit" name="submit" value="Submit" />
        <input type="reset" name="clear" value="Clear" onClick={handleClick} />
        </Button>

   </Form>
   </div>
   )
}
export default Create;