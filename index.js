const http = require("http");

http
    .createServer((req,res) => {
        switch (requestAnimationFrame.url) {
            case "/":
                Response.writeHead(200, {
                    "Content-Type":"text/html",

                });
                Response.write("<h1>Home Page</h1>");
                Response.end();
                break;
<<<<<<< HEAD
            case 'about/ ':
            console.log('something somethign')
=======
            default :
>>>>>>> 404-feature
            Response.writetoHead(404, {
                "Content-Type":"text/html",
                console.log("something")

            });
            Response.write("<p>404 Page not found</p>");
            Response.end();
            break;
        }
    }
    .listen(8080);