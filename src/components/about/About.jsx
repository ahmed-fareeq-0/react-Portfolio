import React from 'react';
import { Typewriter} from 'react-simple-typewriter';
import Portrait from './20220908_051312.jpg';

const About = () => {

  return (
      <div className=' w-[90%] h-full p-4' id='about'>
        <section className=' w-full grid grid-cols-1 md:grid-cols-2 gap-2 my-36'>
          <div className=' w-full h-320 flex items-center'>
            <div className=' relative w-275 h-340 bg-gray-100 rounded-md'>
              <img className=' w-full h-full absolute -right-4 top-4 object-cover rounded-lg shadow-lg ' src={Portrait} alt='' />
            </div>
          </div>

          <div className='w-full h-320 flex flex-col cdc'>

          <h2 className=' text-2xl text-682AE9 mt-10 '>
          مطور
          <span className=' text-red-400'> <Typewriter
            words={[' تطبيقات الموبايل والمواقع ( )']}
            loop={1}
            cursor
            cursorStyle='.'
            typeSpeed={200}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={() => console.log(`Done after 5 loops!`)}
          /></span>
          </h2>

          <p className='text-lg text-textBase mt-5'>
          مبرمج طموح متخصص في تطوير التطبيقات والويب، وذو مسار حافل
سجل تسليم المشاريع بنجاح في مجالات مثل أنظمة المبيعات وتعيين الطبيب
تطبيقات الحجز، وأكثر من ذلك. شغوف باستخدام التكنولوجيا لإنشاء فعال و
حلول مبتكرة، ومواكبة أحدث اتجاهات الصناعة دائمًا. ملتزم بِ
تعزيز تجارب المستخدم وإحداث تأثير إيجابي من خلال التكنولوجيا.
          </p>
          </div>
        </section>
      </div>
  );
}

export default About;
