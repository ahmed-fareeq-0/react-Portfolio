import React from 'react';

const Contact = () => {
  return (
    <div className='flex flex-col p-4 items-center justify-center h-screen' id='contact'>
        <form className='text-center' >
            <input type='text' placeholder='First Name' required name='user_name' className=' w-full bg-transparent outline-none my-2 border border-682AE9 focus:border-white  p-3 rounded-md text-682AE9'/>
            <input type='email' placeholder='Your Email' name='user_email' className=' w-full bg-transparent outline-none my-2 border border-682AE9 focus:border-white  p-3 rounded-md text-682AE9' />
            <textarea placeholder="Your message" required name='message' className=' w-full h-32  resize-none bg-transparent outline-none my-2 border border-682AE9 focus:border-white  p-3 rounded-md text-682AE9'></textarea>
            <button className=' w-full  bg-682AE9  text-blue-50 outline-hidden p-2 rounded-lg mt-5'>Send</button>
        </form>
    </div>
  );
}

export default Contact;
