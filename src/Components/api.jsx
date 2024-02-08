export const questions = [
    {
        id: 1,
        question: 'What is the virtual DOM?',
        answer: 'The virtual DOM (Document Object Model) is a programming concept where a virtual representation of the actual DOM is kept in memory and synced with the real DOM by a library such as React. This allows React to efficiently update the UI by only re-rendering the components that have changed, rather than re-rendering the entire DOM.'
    },
    {
        id: 2,
        question: 'What is the virtual DOM?',
        answer: 'The virtual DOM (Document Object Model) is a concept used in React to improve performance and optimize the updating process of the UI. It is a lightweight copy of the actual DOM and is used to determine the most efficient way to update the user interface.'
    },
    {
        id: 3,
        question: 'How do you create a React App?',
        answer: 'To create a React app, you can use create-react-app, which is a command-line tool that sets up a new React project with all the necessary configuration and dependencies. Simply run `npx create-react-app my-app` in your terminal, replacing "my-app" with the name of your project.'
    },
    {
        id: 4,
        question: 'What are synthetic events in React?',
        answer: 'Synthetic events in React are wrapper objects around native browser events that behave identically to native events but are cross-browser compatible. React uses synthetic events to provide a consistent event interface across different browsers and to optimize event handling performance.'
    }
];
