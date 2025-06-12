function checkBlankForm() {
    
    onSaveClick = document.getElementById(blankCustomer).value;
    if (isNull(formObject)) {
        document.getElementById('report').innerHTML = "Form is Blank. Please Try again";
     alert("Form is Blank. Please Try again");
        setFormObject(blankCustomer);
    log("in onSaveClick()");
  };}
    
