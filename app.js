const express = require('express')
const bodyParser = require('body-parser');
const { getDate } = require('./date');
const app = express()
const port = 3000
app.use(express.static("public"));
const date=require(__dirname+"/date.js");
let addedItem=["Eat","Sleep","Code","Repeat"];
let workItems=[];
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
console.log(date);
let day=getDate();
res.render('Lists', {listTitle: day,newAddItems:addedItem});
})
app.post('/',(req,res)=>{
 let item=req.body.newItem;

 if(req.body.list=="Work List"){
  workItems.push(item);
  res.redirect('/work');
 }else{
  addedItem.push(item);
  res.redirect('/');
 }

})
app.get("/work",(req,res)=>{
  res.render('Lists', {listTitle:"Work List",newAddItems:workItems});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})