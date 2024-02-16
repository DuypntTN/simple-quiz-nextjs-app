- Project Name: Simple Quiz App
- Purpose: This application is an assignment for the position of Full Stack Developer at ![VaniHeros](https://www.linkedin.com/company/vani-heroes/). The application is a simple quiz app that allows users to answer questions and get their results at the end of the quiz.
- Live Demo: [Simple Quiz App](https://simple-quiz-nextjs-app.vercel.app/)
To Start the Application:
1. Clone the repository from the link provided.
2. Run the command `npm install` to install all the dependencies.
3. Run the command `npm run dev` to start the application.
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Scenarios:
1. When the application starts, the user is presented with a welcome page that contains a button to start the quiz.
![Welcome Page](/simple-quiz-app/Images/intro.png)
2. When the user clicks on the start button, the user is presented with the first question.
![First Question](/simple-quiz-app/Images/quiz.png)
- In the quiz page, the user can select an answer by clicking on single or multiple options.
![Multiple Options](/simple-quiz-app/Images/quiz3.png)
![Single Option](/simple-quiz-app/Images/quiz1.png)
- If the user answers wrongly, a toast message is displayed to inform the user that the answer is wrong.
![Wrong Answer](/simple-quiz-app/Images/quiz2.png)
3. When completed the quiz, the user is presented with the result page in final.
![Result Page](/simple-quiz-app/Images/quiz4.png)

## Technologies Used
- Next.js
- React
- TypeScript
- Tailwind CSS

## Project structure explanation
![Project Structure](/simple-quiz-app/Images/struc.png)
- The `app` folder contains the main application components.
- The `app/page.tsx` is the main page of the application. (also the introduction page)
- The `app/play` folder contains the components for the quiz page. (The quiz page is the main page of the application)
- The `app/success` folder contains the components for the result page. (The result page is the final page of the application)

## Features
- The application is responsive and can be used on any device.
- The application is built with TypeScript and has a type-safe codebase.
- The application is built with Tailwind CSS and has a clean and modern UI.
- The application is built with Next.js and has a fast and optimized performance.

## Future Improvements
- Add a timer to the quiz page to limit the time for each question.
- Add a feature to save the user's result to the database.
- Add a feature to allow the user to share their result on social media.
- More...

## Author
- [Asley Duy](www.linkedin.com/in/duy-phan-nguyen-thanh-794a1b183)