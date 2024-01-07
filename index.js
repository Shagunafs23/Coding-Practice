const mongoose = require("mongoose");

main()
.then(()=>{console.log("connection Successful");
})


.catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

}

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
})

const User = mongoose.model("User",userSchema);

const user2 = new User({
    name:"Shagun mishra",
    email:"shagun@gmail.com",
    age:24,
})

const user3 = new User({
    name:"Amrit",
    email:"amrit@gmail.com",
    age:15,
})
user2
.save()
.then((res)=>{console.log(res);})
.catch((err)=>{console.log(err);});

user3
.save()
.then((res)=>{console.log(res);})
.catch((err)=>{console.log(err);});

User.insertMany([
    {name:"Sam",email:"sam@yahoo.com",age:10},
    {name:"Dam",email:"dam@yahoo.com",age:11},
    {name:"Gam",email:"gam@yahoo.com",age:12},
]).then((data)=>{
    console.log(data);
});