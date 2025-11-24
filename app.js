const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Coffee Time ☕</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

          body {
            margin: 0;
            font-family: 'Poppins', sans-serif;
            background: url("https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1350&q=80")
              no-repeat center center fixed;
            background-size: cover;
            color: #fff;
          }

          .overlay {
            background: rgba(0, 0, 0, 0.55);
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }

          .container {
            position: relative;
            text-align: center;
            padding-top: 150px;
            z-index: 10;
          }

          h1 {
            font-size: 3.2rem;
            margin-bottom: 10px;
            font-weight: 600;
          }

          p {
            font-size: 1.3rem;
            max-width: 600px;
            margin: 20px auto;
            font-weight: 300;
          }

          .box {
            display: inline-block;
            margin-top: 40px;
            padding: 20px 35px;
            border-radius: 15px;
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(5px);
            color: #f8e7d0;
            font-size: 1.2rem;
          }

          .coffee-icon {
            font-size: 80px;
            margin-bottom: 20px;
          }
        </style>
      </head>

      <body>
        <div class="overlay"></div>
        <div class="container">
          <div class="coffee-icon">☕</div>
          <h1>Welcome to CoffeeTime</h1>
          <p>
            Brewing happiness, one request at a time — straight from your
            Dockerized Node.js app on EC2.
          </p>
          <div class="box">
            Your app is now fully running inside Docker ☕🚀
          </div>
        </div>
      </body>
    </html>
  `);
});

app.listen(port, '0.0.0.0', () => {
  console.log(`CoffeeTime app running on port ${port}`);
});
