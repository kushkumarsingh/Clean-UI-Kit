function validate_email{
    document.getElementsByName("email");
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(myForm.emailAddr.value))
    {
      return (true)
    }
      alert("You have entered an invalid email address!")
      return (false)
}