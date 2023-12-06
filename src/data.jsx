import { FaReact, FaNodeJs } from 'react-icons/fa'
import { GrMysql } from "react-icons/gr";
import { DiJavascript1, DiMongodb } from 'react-icons/di'

export const Experience = [
    {

        id: 2,
        title: 'REACT',
        desc: 'أمتلك مهارة في تطوير واجهات المستخدم باستخدام إطار العمل الشهير لتطوير تطبيقات الويب الحديثة. إلمامي بمفاهيم العناصر الواجهية والقدرة على تقسيم التطبيقات إلى مكونات قابلة لإعادة الاستخدام يعززان إنتاجية التطوير. أستخدم بفعالية الحالة والدورة الحياة لتحديث واجهة المستخدم بشكل ديناميكي، مما يؤدي إلى تجربة مستخدم سلسة ومتقدمة',
        location: 'location',
        icon: <FaReact />,
        bg: '#1F7FE5'

    },
    {
        id: 1,
        title: 'JAVASCRIPT',
        desc: 'أمتلك مهارة فيها كونها لغة برمجة حاسمة في عالم تطوير الويب. إلمامي بالأساسيات والمفاهيم المتقدمة يسمح لي بتطوير تطبيقات الويب بشكل ديناميكي وفعّال.',
        location: 'location',
        icon: <DiJavascript1 />,
        bg: '#FFD600'

    },

    {
        id: 3,
        title: 'REACT NATIVE',
        desc: 'أمتلك مهارة في تطوير تطبيقات الموبايل وهو إطار عمل متعدد المنصات يسمح ببناء تطبيقات  باستخدام لغة واحدة مخصصة لأكثر من منصة',
        location: 'location',
        icon: <FaReact />,
        bg: '#1F7FE5'
    },

    {
        id: 6,
        title: 'MONGODB',
        desc: 'أمتلك مهارة في استخدام قاعدة البيانات الغير علاقية ويستند على تخزين البيانات في شكل وثائق بدلاً من الجداول المستخدمة في قواعد البيانات العلاقية ',
        location: 'location',
        icon: <DiMongodb />,
        bg: '#367E18'

    },

    {
        id: 4,
        title: 'MYSQL',
        desc: 'أمتلك مهارة في إدارة قواعد البيانات لتخزين واسترجاع وحذف وتعديل البيانات ',
        location: 'location',
        icon: <GrMysql />,
        bg: '#EE7214'


    },
    {
        id: 5,
        title: 'NODE JS',
        desc: 'أمتلك مهارة جيدة في انشاء واجهاة برمجة التطبيقات وهي منصة تستخدم لتطوير تطبيقات الويب من جانب الخادم',
        location: 'location',
        icon: <FaNodeJs />,
        bg: '#1A5D1A'

    },

]

export const ProjectsData = [
    {
        id: 1,
        nameProject: 'ASIA-MERN-STACK',
        image: '/image/Screenshot 2022-09-11 131945.png',
        Technologies: 'react.js sass',
        githubSrc: 'https://github.com/ahmed-fareeq-0/ASIA-MERN-STACK'
    },
    {
        id: 2,
        nameProject: 'portfolio',
        image: '/image/Screenshot 2022-09-11 132049.png',
        Technologies: 'react.js sass',
        githubSrc: 'https://github.com/ahmed-fareeq-0/portfolio'
    },
    {
        id: 3,
        nameProject: 'portfolio',
        image: '/image/Screenshot 2022-09-11 141104.png',
        Technologies: 'react.js tailwind.css',
        githubSrc: 'https://github.com/ahmed-fareeq-0/react-Portfolio'
    }
]