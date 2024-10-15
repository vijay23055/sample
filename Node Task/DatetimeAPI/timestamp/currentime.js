import fs from 'fs'

const saveCurrentDateTime = () => {
    const currentDateTime = new Date().toLocaleString();
    fs.writeFileSync('./currentdate-time.txt', currentDateTime);
};

const getCurrenttime = (req, res) => {
    saveCurrentDateTime(); 

    fs.readFile('./currentdate-time.txt', 'utf-8', (err, data) => {
        if (!err) {
            console.log('Read:', data);
            res.status(200).send(data); 
            
        } 
        else {
            console.error(err);
            res.status(500).send('Error reading file');
        }
    });
};

export {
    getCurrenttime 
};
