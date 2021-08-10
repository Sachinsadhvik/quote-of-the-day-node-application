
const express = require('express');
const axios = require('axios');
var app = express();
app.set('views','VIEW');
app.set('view engine',"ejs");
app.get('/',(req,res)=> {
getA().then(received=>{ var result= received.data.contents.quotes;
        for(items in result)
        {   res.render("QUOTE",{
            quote:result[items].quote,
            author:result[items].author
        })
        }
}).catch(err=>{ console.log(err)})
 

})


console.log("hello")
async function getA() {
const result = await axios.get("https://quotes.rest/qod");
return result;
}

port= 5000 || process.env.PORT;

app.listen(5000, ()=>{console.log("server started")});

