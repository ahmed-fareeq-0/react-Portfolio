import React from 'react';

const Contact = () => {
  return (
    <div className='flex flex-col p-4 items-center justify-center h-screen' id='contact'>
        <form className='text-center' >
            <input type='text' placeholder='الأسم الكامل' required name='user_name' className=' w-full bg-transparent outline-none my-2 border border-682AE9 focus:border-white  p-3 rounded-md text-682AE9 text-right'/>
            <input type='email' placeholder='البريد الأكتروني' name='user_email' className=' w-full bg-transparent outline-none my-2 border border-682AE9 focus:border-white  p-3 rounded-md text-682AE9 text-right' />
            <textarea placeholder="الموضوع" required name='message' className=' w-full h-32  resize-none bg-transparent outline-none my-2 border border-682AE9 focus:border-white  p-3 rounded-md text-682AE9 text-right'></textarea>
            <button className=' w-full  bg-682AE9  text-blue-50 outline-hidden p-2 rounded-lg mt-5'>ارسال</button>
        </form>
    </div>
  );
}

export default Contact;
