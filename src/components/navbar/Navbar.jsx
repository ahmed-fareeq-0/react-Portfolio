import React, {useState} from 'react';
import {IoMenu} from 'react-icons/io5';

const Navbar = () => {

    const [show, setShow] = useState(false);

  return (
    <nav className=' w-full px-6 z-50 fixed inset-x-0 top-2 flex justify-center items-center '>
        <div className=' w-full md:w-880  p-4 rounded-2xl flex justify-between items-center '>
            <p className=' text-lg font-bold text-682AE9'>. ahmedFareeq( )</p>

            <div className=' hidden md:flex gap-6 ml-6 '>
            <a href='#home' className=' text-base text-808080 font-medium hover:text-682AE9 cursor-pointer duration-100 ease-out'>.Home( )</a>
            <a href='#about' className=' text-base text-dbdbdb font-medium hover:text-682AE9 cursor-pointer duration-100 ease-out'>.about( )</a>
            <a href='#projects' className=' text-base text-dbdbdb font-medium hover:text-682AE9 cursor-pointer duration-100 ease-in-out'>.projects( )</a>
            <a href='#skills' className=' text-base text-dbdbdb font-medium hover:text-682AE9 cursor-pointer duration-100 ease-in-out'>.skils( )</a>
            <a href='#contact' className=' text-base text-dbdbdb font-medium hover:text-682AE9 cursor-pointer duration-100 ease-in-out'>.contact( )</a>
            </div>

             {/* menu */}
            <div className='block md:hidden cursor-pointer ml:auto'>
                <IoMenu onClick={() => setShow(!show)}  className=' text-2xl text-dbdbdb' />
            </div>

            {show && (
                
                <div className=' border border-purple-600 p-4 w-275 bg-0B0F15 rounded-lg fixed top-24 right-5 flex flex-col items-center justify-evenly gap-6'>
                    <a href='#home' onClick={() => setShow(!show)} className=' text-base text-808080 font-medium hover:text-682AE9 cursor-pointer duration-100 ease-out'>.Home( )</a>
                    <a href='#about' onClick={() => setShow(!show)} className=' text-base text-dbdbdb font-medium hover:text-682AE9 cursor-pointer duration-100 ease-out'>.about( )</a>
                    <a href='#projects' onClick={() => setShow(!show)} className=' text-base text-dbdbdb font-medium hover:text-682AE9 cursor-pointer duration-100 ease-in-out'>.projects( )</a>
                    <a href='#skills' onClick={() => setShow(!show)} className=' text-base text-dbdbdb font-medium hover:text-682AE9 cursor-pointer duration-100 ease-in-out'>.skils( )</a>
                    <a href='#contact' onClick={() => setShow(!show)} className=' text-base text-dbdbdb font-medium hover:text-682AE9 cursor-pointer duration-100 ease-in-out'>.contact( )</a>
                </div>
            )}

        </div>
    </nav>
  );
}

export default Navbar;
