# otium.dev

At this time this is a simple weather app, I hope to build more functionailty 
in the future. You can view this site by visiting otium.dev in your modern up to
date browser. You can also clone this package and follow the steps carefully 
below.

Setps to Clone and Open
1. clone this package
2. read this
3. open the file App.tsx found in the app directory root/app/src/compnents/Context.tsx
4. within the first function named ContextProvider change the globalLocal variable to true.
   *(note. this is verry important the varibale globalLocal must be set to true.)*
   Save chnages and close out of ContextProvider.tsx.
5. Open the server directory (root/server) open terminal and run 'npm start'
   wait for a responce saying the server is listening (you dont need to know the 
   port info or anything else) minimize this terminal.
6. proceded to the app directory root/app open a new terminal and run the 
   following command 'npm i' wait till that proccess finishes and run 'npm run build' wait.
7. You will get a responce from the terminal command in step 8. with a clickable colorized
   link that should say something like the following text:
   'http://localhost:5173/'
   While holding the 'Ctrl' button click the link with your mouse to open the app.
