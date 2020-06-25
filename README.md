This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Primary Objectives

1. Render a catalog of course cards. Each card shows its course's image and title. Use the provided courses in `src/courses.js`.
2. Organize the cards into a three column grid.
3. Each course has tags, list all of them above the catalog
   - List of tags should be generated from the tags that exist on the courses
   - Tags should be sorted alphabetically
   - Tags should list the number of times they appear in all the courses
4. When a tag is clicked, show only the courses with that tag. Only one tag can be selected at a time; clicking a selected tag will show all courses.
5. Lay out the page to match the included `wireframe.png` and add some styles.
   - NOTE: Read bonus objective #3 before completing this task

## Bonus Objectives

> Note: We recommend choosing one or two of these that best display your skills instead of trying to do all of them.

1. Show the course author name under the course titles on the cards.
   - Course authors must be fetched asyncronously from an endpoint in `src/fetchAuthorData.js`.
2. Make the grid and tags list responsive
3. Use your CSS skills to redesign the page, add animations, or any other changes you think would improve the user experience.

## Important Bonus Backend Objective

> Note: I think you should try to do this as practice will help a lot for learning mongo / graphql

Goal: Replace the static cards you are rendering from courses.js to use your own stored data in mongoDB using graphQL.

Initial Tasks: Sign up to mlab.com, this is a website that allows you limited free data storage for mongoDB
LOOK UP DOTENV, YOURE GOING TO NEED TO USE YOUR PASSWORD TO CONNECT TO MLAB, BUT CLEARLY I SHOULDN'T SEE THAT PASSWORD
DOTENV IS A GOOD LOCAL WAY OF HANDLING THIS

1. Create a backend server (Look up how to create a server with Express/NodeJS)
2. Create your schemas and collections for mongoDB
3. Create your graphQL API that can get and create data.
4. Actually post data from courses.js into your database, (create data and store it into your database)
5. Retrieve the data from mlab, and use that instead to render your courses.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
