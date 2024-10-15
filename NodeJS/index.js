// console.log("hello")

// const os = require('os')

// // console.log(os.cpus())
// console.log(os.version())
// console.log(os.platform())
// console.log(os.hostname())
// console.log(os.homedir())
// console.log(os.machine())
// console.log(os.type())


const fs = require('fs')

// fs.readFile('./sample.txt', 'utf-8', (err, data)=>{
//     if(err)
//         console.log(err)
//     else
//         console.log('read',data)
// })

// fs.writeFile('./sample.txt', 'When file is a filename, asynchronously writes data to the file, replacing the file if it already exists. data can be a string or a buffer.', (err, data)=>{
//     if(!err)
//         fs.readFile('./sample.txt', 'utf-8', (err, data)=>{
//             if(err)
//                 console.log(err)
//             else
//                 console.log('read',data)
//         })
//     // else
//     //     console.log('write',data)
// })

// fs.writeFileSync('./sample2.txt', 'vijay')
// let data = fs.readFileSync('./sample.txt', 'utf-8' )
// console.log('sync',data)

const http = require('http')

const server = http.createServer((req, res)=>{
        res.writeHead(200,{'Content-Type' : 'application/json'} )
        res.end(JSON.stringify
            ({
            message:"json data",
                data:[
                    {
                        name:'vijay'
                    },
                    {
                        dod:'23-05-01'
                    }
                ]
            
              }
           )
        )
})

server.listen(8000,()=>console.log("listen 8000"))