
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Firebase Setup

To integrate Firebase into your application, follow these steps:

1. **Install Firebase**  
   Install the Firebase SDK by running:
   ```bash
   npm install firebase
   ```

2. **Create a `.env` File**  
   In the root directory of your project, create a `.env` file to securely store your Firebase configuration. Add the following keys, replacing the values with your Firebase project credentials:

   ```plaintext
   REACT_APP_API_KEY=your-api-key
   REACT_APP_AUTH_DOMAIN=your-auth-domain
   REACT_APP_DATABASE_URL=your-database-url
   REACT_APP_PROJECT_ID=your-project-id
   REACT_APP_STORAGE_BUCKET=your-storage-bucket
   REACT_APP_MESSAGING_SENDER_ID=your-messaging-sender-id
   REACT_APP_APP_ID=your-app-id
   REACT_APP_MEASUREMENT_ID=your-measurement-id
   ```

3. **Add `.env` to `.gitignore`**  
   To ensure your Firebase credentials remain private, add the `.env` file to `.gitignore` by adding the following line to it:

   ```plaintext
   .env
   ```

4. **Update `firebase.js` Configuration**  
   In your `src/firebase.js` file, use environment variables to configure Firebase:

   ```javascript
   // src/firebase.js

   import { initializeApp } from "firebase/app";
   import { getDatabase } from "firebase/database";

   const firebaseConfig = {
       apiKey: process.env.REACT_APP_API_KEY,
       authDomain: process.env.REACT_APP_AUTH_DOMAIN,
       databaseURL: process.env.REACT_APP_DATABASE_URL,
       projectId: process.env.REACT_APP_PROJECT_ID,
       storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
       messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
       appId: process.env.REACT_APP_APP_ID,
       measurementId: process.env.REACT_APP_MEASUREMENT_ID,
   };

   const app = initializeApp(firebaseConfig);
   const database = getDatabase(app);

   export { database };
   ```

Following these steps ensures that your Firebase credentials are hidden from public view.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.You may also see any lint errors in the console.

### `npm test`

Launches the test runner in interactive watch mode.See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified, and the filenames include the hashes.Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
