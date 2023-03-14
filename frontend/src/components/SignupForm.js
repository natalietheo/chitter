import { useState } from "react";
import PropTypes from "prop-types"

const SignupForm = ({ navigate }) => {

  SignupForm.propTypes = {
    navigate: PropTypes.func,
  }

  const [UserExsistsErrorMessage, setUserExsistsErrorMessage] = useState('');
  const [EmptyFieldErrorMessage, setEmptyFieldErrorMessage] = useState('')
  const [GeneralErrorMessage, setGeneralErrorMessage] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    fetch( '/user', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email, password: password, username: username })
    })
      .then(response => {
        if(response.status === 201) {
          console.log(response.body)
          // navigate('/login')
        } else if (email === '' || password === '' || username === '') {
          console.log(response.body)
          setEmptyFieldErrorMessage('All fields are required - please try again')

        } else if (response.status === 400){
          console.log(response.body)
          navigate('/signup');
          setUserExsistsErrorMessage('That user already exists - Please create a new account or login');
          console.log(response.json().error)
        } else {
          console.log(response)
          navigate('/signup');
          setGeneralErrorMessage("Oops that didn't work. Please try again")
          console.log(response.json().error)
        }
      })
  }

  const handleError = () => {
    setGeneralErrorMessage('')
    setUserExsistsErrorMessage('')
    setEmptyFieldErrorMessage('')
  }




  return (
      <div >
          <div className='errorMessages'>
              {UserExsistsErrorMessage && (<p className="error"> {UserExsistsErrorMessage} </p>)}
              {EmptyFieldErrorMessage && (<p className="error"> {EmptyFieldErrorMessage} </p>)}
              {GeneralErrorMessage && (<p className="error"> {GeneralErrorMessage} </p>)}
          </div>
        <form className="m-8 p-8" onSubmit={ handleSubmit }>
          <input placeholder="Username" id="name" type='text' className="input input-bordered input-primary w-full max-w-xs" value={ username } onChange={handleUsernameChange} onClick={handleError} /><br/>
          <input placeholder="Email" id="email" type='text' className="input input-bordered input-primary w-full max-w-xs" value={ email } onChange={handleEmailChange} onClick={handleError} /><br/>
          <input placeholder="Password" id="password" type='password' className="input input-bordered input-primary w-full max-w-xs" value={ password } onChange={handlePasswordChange} onClick={handleError} /><br/>
          <input id='submit' type="submit" className="input input-bordered input-primary w-full max-w-xs"   />
        </form>
      </div>



  );
};

export default SignupForm;
