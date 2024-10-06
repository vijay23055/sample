import { MongoClient } from 'mongodb'
import { v4 as uuid } from 'uuid';
import 'dotenv/config'


const db_name = process.env.DB_NAME

const client = new MongoClient(process.env.DB_URL);

const createrecpie = async(req,res)=>{
    try{

        await client.connect();

        const usesrCollection = client.db(db_name).collection('users');
        const RecipeCollection = client.db(db_name).collection('recipes');

        let user = await usesrCollection.findOne({id:req.body.userid})
        req.body.id = uuid()
        if(user)
        {
            await RecipeCollection.insertOne(req.body)

            res.status(201).send({message:"Recipe Data Fecthed successfully"})
        }
        else{
            res.status(500).send({message:"Invalid userid"})
        }    
    }
    catch (error){

        console.error(`Error ${req.orginalUrl} `)

        res.status(500).send({message:error.message || "Invalid Server Error"})
    }
    
    finally{
        client.close()
    }
}

export default{
    createrecpie 
}