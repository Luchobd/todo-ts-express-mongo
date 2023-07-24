import { EmailUser } from "../../interfaces/email.interface";

export const emailTemplate = ({ type, name }: EmailUser) => {
  switch (type) {
    case "register":
      return {
        subject: "Welcome to Take Note App",
        html: `
        <html>
          <head>
            <style>
              @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");
              @import url("https://fonts.googleapis.com/css2?family=Comic+Neue:wght@700&display=swap");
              * {
                box-sizing: border-box;
                margin: 0;
                padding: 0;
                font-family: "Roboto", sans-serif;
              }
          
              div {
                margin-bottom: 20px;
              }
          
              .container {
                padding-top: 20px;
                width: 100%;
                height: 100vh;
                background-color: #1e1e1e;
                color: #fff;
                font-family: "Roboto", sans-serif;
              }

              .content {
                background-color: #1e1e1e;
                padding: 20px 0;
              }
          
              .title {
                color: #a448ff;
                font-size: 60px;
                font-weight: bold;
                font-family: "Comic Neue", cursive;
                text-align: center;
              }
          
              .subtitle {
                color: #fff;
                font-size: 28px;
                font-weight: bold;
                text-align: center;
              }
          
              .text__acount {
                color: #fff;
                font-size: 16px;
                font-weight: bold;
                text-align: center;
              }
            </style>
          </head>
          <body>
            <main class="container">
              <div class="content">
                <div>
                  <h1 class="title">TAKE NOTE</h1>
                </div>
                <div>
                  <h2 class="subtitle">Email Template Register</h2>
                </div>
                <figure style="width: 100%; text-align: center;">
                  <img
                    width="300px"
                    height="300px"
                    style="border-radius: 10px;"
                    src="https://res.cloudinary.com/dqut4ajgf/image/upload/v1690231090/Email-Register_nt9jjf.png"
                    alt=""
                  />
                </figure>
                <div style="margin-top: 20px;">
                  <h3 class="text__acount">Thank you for registering your <br/> friend ${name} account.</h3>
                </div>
              </div>
            </main>
          </body>
        </html>
        
        `,
      };

    case "forgotten":
      return {
        subject: "Welcome to our platform",
        html: `
          <html>
            <head>
              <style>
                * {
                  box-sizing: border-box;
                  margin: 0;
                  padding: 0;
                }
              </style>
            </head>
            <body>
              <h1 style="color: blue">Template de forgotten</h1>
            </body>
          </html>
          
          `,
      };

    default:
      return { subject: "", html: "" };
  }
};
