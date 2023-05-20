/**
 * ----------------------------------------------------------------
 * initial set up
 * ----------------------------------------------------------------
 * 1. visit: console.firebase.google.com 
 * 2. create project (skip google analytics)
 * 3. Register app (create config)
 * 4. install firebase: npm install firebase
 * 5. add config file to your project
 * 6. Danger: Don't share firebase config to github
 * 
 * ----------------------------------------------------------------
 * integration
 * ----------------------------------------------------------------
 * 7. go to firebase doc > build > Authentication > web > get start
 * 8. export app from the firebase.config.js file: export default app
 * 9. Login.jsx: import getAuth from firebase/auth 
 * 10. create const auth = getAuth(app)
 * ----------------------------------------------------------------
 * provider set up
 * ----------------------------------------------------------------
 * 11. import googleAuthProvider and crate a new Provider
 * 12. use signInWithPopUp and pass auth and provider
 * 13. Activate sign in method (google, github)
 * 14. [vite]: change 127.0.0.1 to localhost
 * ----------------------------------------------------------------
 * MORE Auth Provider
 * ----------------------------------------------------------------
 * 1. activate the auth provider (create app, provide redirect url, clint id, clint secret)
*/