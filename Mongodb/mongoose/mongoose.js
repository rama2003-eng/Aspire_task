// Title - Storing information using Mongoose
// Author - Ramapraba J
// Created Date - 08/05/2024

var mongoose=require('mongoose')

var Schema=mongoose.Schema;

var skillSchema = new Schema({
    skillName:String,
    experience:Number,
    proficiency:String
})

var jobSeekerSchema = new Schema({
    jobseekerName:String,
    emailId:String,
    age:Number,
    certified:Boolean,
    skills:[skillSchema]
})

var js=mongoose.model('jobseeker',jobSeekerSchema);
mongoose.connect("mongodb://127.0.0.1:27017/employee");

var jobseeker1=new js({
    jobseekerName:"Ramapraba",
    emailId:"rama@gmail.com",
    age:20,
    certified:true,
    skills:[{skillName : "java", experience : 8, proficiency : "beginner"},
    {skillName : "C", experience : 4, proficiency : "beginner"}
    ]
})

jobseeker1.save();