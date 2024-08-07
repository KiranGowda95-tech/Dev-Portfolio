import {nanoid} from 'nanoid'
import {FaHtml5,FaJs,FaReact} from 'react-icons/fa'

export const links=[
    {id:nanoid(),href:'#home',text:'home'},
    {id:nanoid(),href:'#about',text:'about'},
    {id:nanoid(),href:'#skills',text:'skills'},
    {id:nanoid(),href:'#projects',text:'projects'},
]

export const skills=[
    {
        id:nanoid(),
        title:'HTML/CSS',
        icon:<FaHtml5 className='h-16 w-16 text-emerald-500'/>,
        text:' Highly Skilled in HTML & CSS, adeptly craftingvisually appearingly and responsive websites for optimal user experiance'
    },
    {
        id:nanoid(),
        title:'Javascript',
        icon: <FaJs className='h-16 text-emerald-500'/>,
        text:'Experiance in JavaScript, building interictive and dynamic web applications with a focus on seamless user interactions and functionality'
    },
    {
        id:nanoid(),
        title:'React',
        icon:<FaReact className='h-16 w-16 text-emerald-500'/>,
        text: 'Intermediate proficiency in React,developing effecient and interactive front-end applications with a strong emphasis on component-based architecture '
    }
]