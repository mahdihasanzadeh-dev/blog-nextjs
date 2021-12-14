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
        const client = await MongoClient.connect('mongodb+srv://admin:s2Pj3Lj8v2PhrdJ@cluster0.x8a62.mongodb.net/blog?retryWrites=true&w=majority')
        const db = client.db()
        await db.collection('messages').insertOne(newMessage)
        client.close()
        res.status(200).json({message:'Successfully stored message',newMessage:newMessage})

    }
}
export default handler