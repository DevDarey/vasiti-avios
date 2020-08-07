const Axios = require('../model/axiosModel')
exports.addProduct = async(req,res)=>{
    const body = req.body
    const axios = new Axios(body)
try{
    await axios.save()
    res.status(201).json({
        Message:'Product Created'
    })

}
catch(e){
    res.status(400).send(e)
}



}
exports.deleteProduct = async(req,res)=>{
    try{
        const id = req.params.id
        const remove=  await Axios.findByIdAndDelete(id)
        if(!remove){
            res.status(404).send()
        }
        res.send(remove)


    }
    catch(e){
        res.status(400).send(e)

    }



}
exports.getProduct = async(req,res)=>{
  
    const id = req.params.id
   
    try{
        const axios =  await Axios.findById(id)
        if(!axios){
            res.status(404).send()
        }
        res.send(axios)

    }
    catch(e){
    res.status(400).send(e)
    }


}
exports.getAllProducts = async(req,res)=>{
    try {
        const axios = await Axios.find()
        res.send(axios)
    } catch (error) {
        res.status(400).send(error)
        
    }
}
exports.updateProduct =  async(req,res)=>{
    try{
        const id = req.params.id
        const body = req.body
        const updateTask = await Axios.findByIdAndUpdate(id,body,{new:true,runValidators:true})
        if(!updateTask){
            res.status(404).send()
        }
        res.send(updateTask)
        


    }
    catch(e){
       res.status(400).send(e)
    }
 

}