const mongoose=require('mongoose')

const collegeSchema=new mongoose.Schema({
  name:{
      type:String,
      unique:true,
      required:'name is Required',
      trim:true
  },
  fullName:{
      type:String,
      required:'fullName is Required',
      trim:true

  },
  logoLink:{
    type:String,
    required:'logoLink is Required',
    trim:true
},
isDeleted: {
    type: Boolean,
    default: false,
}

},
{ timestamps: true });

module.exports =mongoose.model('college',collegeSchema)