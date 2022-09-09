import React, {useState} from 'react';
import {IoMenu} from 'react-icons/io5';

const Navbar = () => {

    const [show, setShow] = useState(false);
    const [showCode, setShowCode] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [navbar, setNavber] = useState(false)
    // const [sections, setSections] = useState(['Home()','About()'])


    window.addEventListener("scroll", () => window.scrollY >= 500 ? setNavber(true) : setNavber(false))
    
    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // sections.map((section) => {})
        if(inputValue === "About()"){
            window.location = '#about'
        }else if(inputValue === "Home()"){
            window.location = '#home'
        }
        setShowCode(false)
    }


  return (
    <nav className='w-full px-6 z-50 fixed inset-x-0 top-1 flex justify-center items-center '>
        <div className={navbar ?  " transition-all bg-171D2A w-full md:w-880  p-4 rounded-2xl flex justify-between items-center" : " transition-all w-full md:w-880  p-4 rounded-2xl flex justify-between items-center"} >
            <p className=' text-lg font-bold text-682AE9'>. ahmedFareeq( )</p>

            <div className=' hidden md:flex gap-6 ml-6 '>
            <a href='#home' className=' text-base text-808080 font-medium hover:text-682AE9 cursor-pointer duration-100 ease-out'>.Home( )</a>
            <a href='#about' className=' text-base text-dbdbdb font-medium hover:text-682AE9 cursor-pointer duration-100 ease-out'>.about( )</a>
            <a href='#projects' className=' text-base text-dbdbdb font-medium hover:text-682AE9 cursor-pointer duration-100 ease-in-out'>.projects( )</a>
            <a href='#skills' className=' text-base text-dbdbdb font-medium hover:text-682AE9 cursor-pointer duration-100 ease-in-out'>.skils( )</a>
            <a href='#contact' className=' text-base text-dbdbdb font-medium hover:text-682AE9 cursor-pointer duration-100 ease-in-out'>.contact( )</a>

            <span  onClick={() => {setShowCode(!showCode)}} className=' text-base text-dbdbdb font-medium hover:text-682AE9 cursor-pointer duration-100 ease-in-out'>.test( )</span>
            
            </div>

            {showCode && (
               <div className=' w-275   fixed top-24 right-5 flex flex-col items-center justify-evenly '>
               <input onChange={handleChange} className='border border-purple-600  w-full h-full p-4 rounded-lg bg-0B0F15 text-amber-500 font-mono ' type='text' placeholder='Write the title of the page on the function call method ..' />
                <button onClick={handleSubmit} className=' w-full bg-682AE9  text-blue-50 outline-hidden p-2 rounded-lg mt-5'>Go</button>
               </div>
            )}
            

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
