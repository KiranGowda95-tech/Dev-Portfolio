import {nanoid} from 'nanoid'
import {FaHtml5,FaJs,FaReact,FaNodeJs} from 'react-icons/fa'

export const links=[
    {id:nanoid(),href:'#home',text:'home'},
    {id:nanoid(),href:'#skills',text:'skills'},
    {id:nanoid(),href:'#about',text:'about'},
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
        icon: <FaJs className='h-16 w-16 text-emerald-500'/>,
        text:'Experiance in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality'
    },
    {
        id:nanoid(),
        title:'React',
        icon:<FaReact className='h-16 w-16 text-emerald-500'/>,
        text: 'Intermediate proficiency in React,developing effecient and interactive front-end applications with a strong emphasis on component-based architecture '
    },
    {
        id:nanoid(),
        title:'Node js',
        icon:<FaNodeJs className='h-16 w-16 text-emerald-500'/>,
        text: 'Intermediate proficiency in Node Js,developing effecient and interactive micro-services applications with a strong emphasis on backend architecture '
    },
]


export const projects = [
    {
      id: nanoid(),
      img: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
      url: 'https://react-projects.netlify.app/',
      github: 'https://github.com/john-smilga',
      title: 'first project',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
    },
    {
      id: nanoid(),
      img: 'https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800',
      url: 'https://react-projects.netlify.app/',
      github: 'https://github.com/john-smilga',
      title: 'second project',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
    },
    {
      id: nanoid(),
      img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
      url: 'https://react-projects.netlify.app/',
      github: 'https://github.com/john-smilga',
      title: 'third project',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
    },
  ];