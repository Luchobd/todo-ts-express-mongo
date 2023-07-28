import { EmailUser } from "../../interfaces/email.interface";

export const emailTemplate = ({ type, name, key }: EmailUser) => {
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
                  <h1 class="title">WELCOME TO YOUR <br/> TAKE NOTE APP</h1>
                </div>
                <div>
                  <h2 class="subtitle">Registration mail</h2>
                </div>
                <figure style="width: 100%; text-align: center;">
                  <img
                    width="300px"
                    height="300px"
                    style="border-radius: 10px;"
                    src="https://res.cloudinary.com/dqut4ajgf/image/upload/v1690231090/Email-Register_nt9jjf.png"
                    alt="register-password-email"
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
        subject: "Forgot my password email",
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

              .temporaryKeyContent {
              margin-top: 20px;
              text-align: center;
              }

              .temporaryKey {
                margin-top: 10px;
                display: inline-block;
                text-align: center;
                border: 1px solid #a448ff;
                border-radius: 8px;
                padding: 20px;
                font-size: 40px;
                font-weight: bold;
                color: #fff;
              }

            </style>
          </head>

          <body>
            <main class="container">
              <div class="content">
                <div>
                  <h1 class="title">TAKE NOTE APP</h1>
                </div>
                <div>
                  <h2 class="subtitle">Change of password</h2>
                </div>
                <figure style="width: 100%; text-align: center;">
                  <img width="300px" height="300px" style="border-radius: 10px;"
                    src="https://res.cloudinary.com/dqut4ajgf/image/upload/v1690488157/Email-forgot_bijpya.png" alt="forgot-password-email" />
                </figure>
                <div class="temporaryKeyContent">
                  <h3 class="subtitle" style="text-decoration: underline;">verification key</h3>
                  <span class="temporaryKey">${key}</span>
                </div>
              </div>
            </main>
          </body>
        </html>

        
          `,
      };

    case "change":
      return {
        subject: "Password change successful",
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

              .buttonContent {
                margin-top: 20px;
                text-align: center;
              }

              a .buttonLink {
                width: 50%;
                padding: 15px 10px;
                background-color: #A448FF;
                border-radius: 8px;
                border: none;
                outline: none;
                cursor: pointer;
                text-decoration: none;
                font-family: "Roboto", sans-serif;
                font-size: 20px;
                font-weight: bold;
                text-align: center;
                color: #FFFF00;
                text-transform: uppercase;
              }

              a .buttonLink:active {
                transform: scale(0.9);
              }

            </style>
          </head>

          <body>
            <main class="container">
              <div class="content">
                <div>
                  <h1 class="title">TAKE NOTE APP</h1>
                </div>
                <div>
                  <h2 class="subtitle">😀 Congratulations! 👍</h2>
                </div>
                <figure style="width: 100%; text-align: center;">
                  <img width="300px" height="300px" style="border-radius: 10px;"
                    src="https://res.cloudinary.com/dqut4ajgf/image/upload/v1690471659/Email-successful_d4g4tc.png" alt="change-password-email" />
                </figure>
                <div style="margin-top: 20px;">
                  <p class="text__acount">The password change has been successful.</p>
                </div>
              </div>
            </main>
          </body>
        </html>

          `,
      };

    default:
      return { subject: "", html: "" };
  }
};
