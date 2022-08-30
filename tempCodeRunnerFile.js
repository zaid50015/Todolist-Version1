// New Work Route
app.get("/work",(req,res)=>{
  res.render('Lists', {listTitle:"Work List",newAddItems:addedItem});
})