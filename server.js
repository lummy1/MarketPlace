import config from './server/config/config.js' 
import app from './server/express.js'
import mongoose from 'mongoose' 


	mongoose.Promise = global.Promise
	
	mongoose.connect(config.mongoUri, { useNewUrlParser: true,
	//useCreateIndex: true, 
	//useUnifiedTopology: true 
	} ).then(()=>{
		console.log("mongodb database connected")
	})
	mongoose.connection.on('error', () => {
	throw new Error(`unable to connect to database: ${config.mongoUri}`) 
	})
	


app.get("/", (req, res) => {
res.json({ message: "Welcome to server1 application." });
});
app.listen(config.port, (err) => { 
if (err) {
console.log(err) 
}
console.info('Server1 started on port %s.', config.port) 
})

// const path = require("path");
// const app = express();
// const assetsRouter = require("./server/assets-router");
// app.use("/src", assetsRouter);
// app.use("/", express.static(path.join(__dirname, "public")));


// app.get("/api/v1", (req, res) => {
//  res.json({
//  project: "React and Express Development",
//  from: "Olumide",
//  });
// });
// app.get("/*", (_req, res) => {
//  res.sendFile(path.join(__dirname, "public", "index.html"));
// })
// const { PORT = 5000 } = process.env;
// app.listen(PORT, () => {
//  console.log();
// console.log(` client App running in port ${PORT}`);
// console.log();
//  console.log(` > Local: \x1b[36mhttp://localhost:\x1b[1m${PORT}/\x1b[0m`);
// });
