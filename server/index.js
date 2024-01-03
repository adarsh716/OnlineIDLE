const express=require("express");
const app=express();
require("dotenv").config();
require("./condig/db").connect();
const route=require("./routes/routes");
const cors=require("cors");
const bodyParser=require("body-parser");

const port=process.env.PORT || 4000
app.use("/api/v1/",route);
app.use(
	cors({
		origin: "*",
		credentials: true,
	})
)
app.use(bodyParser());
app.use(express.json());

app.listen(port,()=>{
    console.log(`Sever is running at ${port}`);
})

