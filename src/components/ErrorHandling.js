function checkBlankForm() {
    
    onSaveClick = document.getElementById(blankCustomer).value;
    if (isNull(formObject)) {
        document.getElementById('report').innerHTML = "Form is Blank. Please Try again";
     alert("Form is Blank. Please Try again");
        setFormObject(blankCustomer);
    log("in onSaveClick()");
  };}
    
  const [errorMessage, setErrorMessage] = useState('')

    const validate = (value) => {

        if (validator.isStrongPassword(value, {
            minLength: 8, minLowercase: 1,
            minUppercase: 1, minNumbers: 1, minSymbols: 1
        })) {
            setErrorMessage('Is Strong Password')
        } else {
            setErrorMessage('Is Not Strong Password')
        }}

        function checkBlankForm(){}
