export const Validate =(name,date,title,description,fTag,sTag) => 
  {
    const errors = {};
    
     if(!name)
        errors.name = "Please enter Your name!";
      else if(name.charAt(0) !== '@' || /[A-Z]/.test(name))
        errors.name = "Invalid!";

      if(!date)
         errors.date="Plese enter the Date";
    
      if(!title)
        errors.title = "Please enter the title";
      else if(title.length < 10)
        errors.title = "Enter Proper title";
  
      if(!description)
        errors.description = "Please enter the content";
      else if(description.length < 20)
        errors.description = "Enter Proper description";
      
      if(!fTag)
        errors.fTag = "Please enter this field";
      else if(fTag.charAt(0) !== '#')
        errors.fTag = "Tag must be start with #";
      
      if(!sTag)
        errors.sTag = "Please enter this field";
      else if(sTag.charAt(0) !== '#')
        errors.sTag = "Tag must be start with #";

      return errors;
}