import {MongoClient} from 'mongodb'
const handler = async (req,res)=>{
    if(req.method==='POST'){
        const {name, email , message} = req.body
        if(!email || !email.includes('@') || !name || name.trim()==='' || !message || message.trim()===''){
            res.status(422).json({message:'Invalid Input'})
            return;
        }
        const newMessage = {
            email,
            name,
            message
        }
        const connectionString =`mongodb+srv://${process.env.mongodb_usernamme}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.x8a62.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`
        const client = await MongoClient.connect(connectionString)
        const db = client.db()
        await db.collection('messages').insertOne(newMessage)
        client.close()
        res.status(200).json({message:'Successfully stored message',newMessage:newMessage})

    }
}
export default handler