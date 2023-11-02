import express from 'express'
import ping from 'ping'
const app=express();
const port=4444


app.get('/check-connection', (req, res)=>{
    const routerIp = '192.168.0.1'; // IP-адреса вашого роутера
    ping.promise.probe(routerIp)
        .then((result) => {
            res.json({ isRouterAlive: result.alive });
        })
        .catch((error) => {
            res.status(500).json({ error: 'Error while pinging the router' });
        });
})




app.listen(port, (err)=>{
    if(err){
        return console.log(err)
    }

    console.log('server ok')
});