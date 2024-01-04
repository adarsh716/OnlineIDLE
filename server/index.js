const express=require("express");
const app=express();
require("dotenv").config();
require("./condig/db").connect();
const route=require("./routes/routes");
const cors=require("cors");
const bodyParser=require("body-parser");

const port=process.env.PORT || 4000
app.get("/",()=>{
	console.log("hello");
})

app.use(express.json({ type:'application/json' }))
app.use(express.urlencoded({ limit: "10mb", extended: true, parameterLimit: 50000 }))
app.use(express.static("public"));
app.use(
	cors({
		origin: "http://localhost:3000",
		credentials: true,
	})
)

app.use(bodyParser());
app.use(express.json());
app.use("/api/v1/",route);

app.listen(port,()=>{
    console.log(`Sever is running at ${port}`);
})
