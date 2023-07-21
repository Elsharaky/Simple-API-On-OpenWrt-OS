import express from "express";
import {exec} from "child_process";

const app = express();
app.listen(8080,() => console.log("Server started!"));
app.use(express.json());

// Reboot route

app.get('/api/reboot', (req,res) => {
    exec('reboot',(error,stdout,stderr) => {
        if(error){
            res.status(500).send(`Error: ${error.message}`);
        }
        res.status(200).send('Router is rebooting...');
    })
});

// Create file route

app.post('/api/create-file', (req,res) => {
    const fileName = req.body.fileName;
    const content = req.body.content;

    exec(`echo "${content}" >> /tmp/'${fileName}'`,(error,stdout,stderr) => {
        if(error){
            res.status(500).send(`Error: ${error.message}`);
        }
        res.status(200).send('File created successfully!');
    })
});
