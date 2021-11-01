# Understanding Questions:

1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.

- The user presses the 1 button.
- The onClick attribute is passed into the CalcButton component
- That component returns a button with the onClick attribute set to the value of the onClick attribute passed in through props.
- When that button is clicked, it calls the function that was passed in through props.
- The handleAddOne function calls the dispatch function
- The dispatch function calls our reducer functio with two parameters (state, action), our current state and an action object with a type property.
- Our reducer function contians a switch statement which checks the type property within the second parameter, the action parameter.
- If the type within the action object is "ADD_ONE", then our reducer with return an object {...state, total: state.total + 1} this object will be returned into the dispatch function
- The dispatch function will set the current state to this returned object
- The state has been updated and where the state total is now one more than the previous state total.
- When state is updated in an immutible way, then our component will rerender because of Reacts "reactive" aspect, with our new state being passed in as the value attribute to the TotalDisplay component, the component returns a jsx textarea element with the value set to the value passed into the TotalDisplay component. That jsx is compiled into html and shown in the browser.
- TotalDisplay shows the total plus 1.
