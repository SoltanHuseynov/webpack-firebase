const express=require("express")
const serv=express()
serv.use(express.static("dist"))






fetch("https://raw.githubusercontent.com/SoltanHuseynov/basic-datas/main/localhost.json")
.then(result=>{
    return result.json()
}).then(data=>{
    serv.listen(data.port[1],()=>{
        console.info(`http://${data.ip[0]}:${data.port[1]}`)
    })
})
