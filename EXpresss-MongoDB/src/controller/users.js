import { MongoClient } from 'mongodb'
import { generateid } from '../utils/helper.js';
import { v4 as uuid } from 'uuid';
import 'dotenv/config'

// const url = process.env.DB_URL
const db_name = process.env.DB_NAME

const client = new MongoClient(process.env.DB_URL);

const getalluser = async(req,res)=>{
    try{

        await client.connect();

        const UserCollection = client.db(db_name).collection('users');


        let users = await UserCollection.find().project({_id:0}).toArray();

        res.status(200).send({message:"Data Fecthed successfully",data:users})
    }
    catch (error){

        console.error("Error in get all user")

        res.status(500).send({message:error.message || "Invalid Server Error"})
    }
    
    finally{
        client.close()
    }
}

const getuserbyid = async(req,res)=>{
    try{

        await client.connect();

        const UserCollection = client.db(db_name).collection('users');
        let {id} = req.params

        let user = await UserCollection.findOne({id:id});

        res.status(200).send({message:"Data Fecthed successfully",data:user})
    }
    catch (error){

        console.error("Error in get all user")

        res.status(500).send({message:error.message || "Invalid Server Error"})
    }
    
    finally{
        client.close()
    }
}

const createuser = async(req,res)=>{
    
    try{
        await client.connect();

        const UserCollection = client.db(db_name).collection('users');

        // req.body.id = generateid(7)
        req.body.id = uuid()
        req.body.status = true

        let users = await UserCollection.findOne({email:req.body.email})

        if(!users)
        {
            await UserCollection.insertOne(req.body)

            res.status(201).send({message:"user created successfully"})
        }

        else{
            res.status(401).send({message:`user with ${req.body.email} already exists`})
        }
    }
    catch (error){
        console.error("Error in get all user")
        res.status(500).send({message:error.message || "Invalid Server Error"})
    }
    finally{
        client.close()
    }
}

const deleteuserbyid = async(req,res)=>{
    try{

        await client.connect();

        const UserCollection = client.db(db_name).collection('users');
        let {id} = req.params

        req.body.id = uuid()
        req.body.status = true

        let users = await UserCollection.findOne({id:id})

        if(users){
            await UserCollection.deleteOne(users)
            res.status(200).send({message:"Data deleted successfully",})
        }
        else{
            res.status(401).send({message:"Invalid user id"})
        }
        
    }
    catch (error){

        console.error("Error in get all user")

        res.status(500).send({message:error.message || "Invalid Server Error"})
    }
    
    finally{
        client.close()
    }
}

const edituserbyid = async(req,res)=>{
    try{

        await client.connect();

        const UserCollection = client.db(db_name).collection('users');
        let {id} = req.params


        let users = await UserCollection.findOne({id:id})

        if(users){
            await UserCollection.updateOne({id:id},{$set:{...users,...req.body}})
            res.status(200).send({message:"Data edited successfully"})
        }
        else{
            res.status(400).send({message:"Invalid user id"})
        }
    }
        
    catch (error){

        console.error("Error in get all user")

        res.status(500).send({message:error.message || "Invalid Server Error"})
    }
    
    finally{
        client.close()
    }
}


export default {
    getalluser,
    createuser,
    getuserbyid,
    deleteuserbyid,
    edituserbyid
}