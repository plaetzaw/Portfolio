import { useState } from 'react'

const Contact = (props) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [invalidName, setInValidName] = useState(false)
  const [invalidEmail, setInValidEmail] = useState(false)
  const [invalidMessage, setInValidMessage] = useState(false)

  function encode (data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

  const onClick = async (e) => {
    e.preventDefault()
    let nameError = false
    let emailError = false
    let messageError = false
    /// Checking for validity of each field
    if (name.length <= 0) {
      nameError = true
    }

    if (email.length <= 0) {
      emailError = true
    }

    if (message.length <= 0) {
      messageError = true
    }
    // Checking to see if the input values are valid, if so
    // it will initiate the fetch request
    console.log(nameError, '&&', emailError, '&&', messageError)
    if (nameError === false && emailError === false && messageError === false) {
      try {
        await window.fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({
            'form-name': 'contact',
            name: name,
            email: email,
            message: message
          })
        })
        // console.log('awaited fetch result:', result)
        setSubmitted(true)
        console.log(name, email, message, 'information submitted?', submitted)
      } catch (e) {
        console.log(e)
      }
    // if the values are not valid, it will show the corresponding errors
    } else {
      setInValidName(nameError)
      setInValidEmail(emailError)
      setInValidMessage(messageError)
    }
  }

  const Form = (
    <>
      <form
        name='contact'
        method='post'
        data-netlify='true'
        data-netlify-honeypot='bot-field'
        className='flex flex-col items-center'
      >
        <span className='text-[#F2EFEF] py-4 text-4xl text-center'>Contact Me!</span>
        <span className='text-[#F2EFEF]'>Name</span>{invalidName && <p className='text-red-600'>Please enter your name</p>}
        <input
          type='text'
          name='name'
          value={name}
          invalidField={invalidName}
          placeholder='Your name'
          onChange={(e) => { setName(e.target.value) }}
          className={`border-8 w-4/5 my-2' ${invalidName ? 'border-red-700' : ''}`}
        />
        <span className='text-[#F2EFEF]'>Email</span>{invalidEmail && <p className='text-red-600'>Please enter your email</p>}
        <input
          type='text'
          name='email'
          value={email}
          invalidField={invalidEmail}
          placeholder='Your email'
          onChange={(e) => { setEmail(e.target.value) }}
          className={`border-8 w-4/5 my-2' ${invalidEmail ? 'border-red-700' : ''}`}
        />
        <span className='text-[#F2EFEF]'>Message</span>{invalidMessage && <p className='text-red-600'>Please enter your message</p>}
        <textarea
          type='textarea'
          name='message'
          value={message}
          invalidField={invalidMessage}
          placeholder='Your message'
          onChange={(e) => { setMessage(e.target.value) }}
          className={`border-8 w-4/5 my-2 py-4 ${invalidMessage ? 'border-red-700' : ''} `}
        />
        <button className='bg-[#5F3C92] text-2xl w-1/4 border-white border-4 rounded' onClick={onClick}>Send!</button>
      </form>
    </>
  )

  const Success = (
    <div className='flex flex-col text-center'>
      <h1 className='p-4 text-5xl text-blue-600'>Success!</h1>
      <p className='p-4 text-xl text-white rounded-xl'>Your message has been submitted. I will get back to you in a timely manner. Thank you for reaching out!</p>
    </div>
  )

  return (
    <div className='px-4 py-8 bg-[#241F36]' ref={props.position}>
      {submitted ? Success : Form}
    </div>
  )
}

export default Contact
