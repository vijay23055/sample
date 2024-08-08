import AssignReturnBook from '../Compoents/Book/Assignreturnbook'
import Create from '../Compoents/Book/Create'
import Books from '../Compoents/Book'
import CreateStudent from '../Compoents/students/CreateStudent'
import Students from '../Compoents/students'
import { Navigate } from 'react-router-dom'

export default [
    {
        path:'/book',
        element:<Books/>
    },
    {
        path:'/book/create',
        element:<Create/>
    },
    {
        path:'/book/edit/:id',
        element:<Create/>
    },
    {
        path:'/book/assign-return',
        element:<AssignReturnBook/>
    },
    {
        path:'/student/create',
        element:<CreateStudent/>
    },
    {
        path:'/student',
        element:<Students/>
    },
    {
        path:'*',
        element:<Navigate to='/book'/>
    }
    
]