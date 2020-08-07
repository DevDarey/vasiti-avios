const mongoose = require('mongoose')
//require('dotenv').config()
const aviosSchema =  new mongoose.Schema({ 
    product_name:{
        type:String        
    },
    product_description:{
        type:String
    },
    product_varities
        :[
            {
                size:{
                    type:Number
                },
                color:{
                    type:String

                },
                quantity:{
                    type:Number

                },
                images:[
                  {
                      image1:{
                          type:String

                      },
                      image2:{
                          type:String

                      }
                  }
                ],
                price:{
                    type:Number

                }
                
            }
        ],
    
    date_uploaded:{
        
        default:Date
    },
    date_edited:{
        default:Date
    },
    show:{
        type:Boolean
    }

},{
    timestamps:true
})

const Avios  = mongoose.model('Avios', aviosSchema)
module.exports = Avios