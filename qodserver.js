
const express = require('express');
const axios = require('axios');
var app = express();
port= 5000 || process.env.PORT;
app.set('views','VIEW');
app.set('view engine',"ejs");
app.get('/',(req,res)=> {
getA().then(received=>{ var result= received.data.contents.quotes;
        for(items in result)
        {   res.render("QUOTE",{
            quote:"The human mind and body are truly extraordinary. They are the quintessence of excellence in motion. We talk, touch, see, hear, taste, smell, and feel. We dream, aspire, and become. All that we are is mind and body and spirit-that is our universe."       
            ,author: "Lorii Myers"//result[items].author
        })
        }
}).catch(err=>{ console.log(err)})
 

})
async function getA() {
const result = await axios.get("https://quotes.rest/qod");
return result="fsds";
}



app.listen(port, ()=>{console.log("server started")});

