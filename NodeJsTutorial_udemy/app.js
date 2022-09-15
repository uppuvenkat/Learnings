const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{
    // console.log('dddddd',req, req.url)
    // process.exit(); // stops server or halts event loop

    let url = req.url
    // console.log('kkkk',url)
    const method = req.method
    if(url === '/'){
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<head><title>Node js tut</title> </head>')
        res.write('<body><form action="/message" method="POST"><input type="text" value="venkat" /> <button tyoe="submit">Send </button></form> </body>')
        res.write('</html>');
        return res.end()
    }
//
    // if(url == '/message' && method === "POST"){
    //     fs.writeFileSync('message.txt', "DUmmy")
    //     res.statusCode = 302;
    //     res.setHeader('location',  '/')
    // }
//
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
          console.log(chunk);
          body.push(chunk);
        });
        req.on('end', () => {
          const parsedBody = Buffer.concat(body).toString();
          const message = parsedBody.split('=')[1];
          fs.writeFileSync('message.txt', message);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      }

    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>Node js tut</title> </head>')
    res.write('<body><h3>My node js srvere sending this html as response</h3> </body>')
    res.write('</html>');
    res.end()
})

server.listen(3000)