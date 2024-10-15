import {findId} from "../utils/helper.js"
const users = [
    {
        id:1,
        name:"Ram",
        email:"ram@gmail.com",
        mobile:"0987654321",
        password:"123",
        status:true
    },
    {
        id:2,
        name:"Raj",
        email:"raj@gmail.com",
        mobile:"8765432190",
        password:"123",
        status:true
    },
    {
        id:3,
        name:"Ajmal",
        email:"ajmal@gmail.com",
        mobile:"7890123456",
        password:"123",
        status:false
    }
]

const getAllUsers = (req,res)=>{
    res.status(200).send({
        message:"Data Fetch Successfull",
        data:users
    })
}

const getUserId = (res, req)=>{
    const index = findId(users, id)
    if(index!==-1)
    {
        res.status(200).send({
            message:"Data Fetch Successfull",
            data:users[index]
        })
    }
    else
    {
        res.status(400).send({
            message:`Invalid Id:${id}`
        })
    }
}

export default {
    getAllUsers,
    getUserId
}