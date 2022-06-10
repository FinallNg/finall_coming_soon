import React from 'react'

const Form = () => {
  return (
    <div className='form-box'>
        <form>
            <input type='email' name='email' placeholder='Email Adress' required></input>
            <div>
            <input type='no' name='submit'></input>
            </div>
        </form>
    </div>
  )
}

export default Form