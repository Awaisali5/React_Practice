React Hooks: 

#UseState

UseState: UseState is a React Hook that lets you add a state variable to your component.

1-useState returns an array with exactly two values:

The current state. During the first render, it will match the initialState you have passed.
The set function that lets you update the state to a different value and trigger a re-render.

2- useState is a Hook, so you can only call it at the top level of your component or your own Hooks. You can’t call it inside loops or conditions. If you need that, extract a new component and move the state into it.

set functions do not have a return value.

#Updating state based on the previous state 
you may pass an updater function to setAge instead of the next state:


 The { ...form } spread syntax ensures that the state object is replaced rather than mutated.
#UseEffect

useEffect is a React Hook that lets you synchronize a component with an external system.



UseEffect: useEffect() is so named because it runs any side-effects that we'd like to add to the render process but which can't be run inside the main function body. 
1-code inside useEffect() runs after the component renders

2-Connecting to an external system 
Some components need to stay connected to the network, some browser API, or a third-party library, while they are displayed on the page. These systems aren’t controlled by React, so they are called external.

3-You need to pass two arguments to useEffect:

A setup function with setup code that connects to that system.
It should return a cleanup function with cleanup code that disconnects from that system.
A list of dependencies including every value from your component used inside of those functions.


#React Component Life Cycle:
A component's lifecycle has three main phases: 

#The Mounting Phase:
1-the Mounting Phase, (Creating the Component and render in the DOM)
*The mounting phase has three main lifecycle methods that are called in order:
1-The constructor() lifecycle method:
The constructor() method is called when the component is first created. You use it to initialize the component's state and bind methods to the component's instance

2-The render() lifecycle method
The render() method is responsible for generating the component's virtual DOM representation based on its current props and state. It is called every time the component needs to be re-rendered, either because its props or state have changed, or because a parent component has been re-rendered.

3-The getDerivedStateFromProps() lifecycle method
getDerivedStateFromProps() is a lifecycle method available in React 16.3 and later versions that is invoked during the mounting and updating phase of a component.

During the mounting phase, getDerivedStateFromProps() is called after the constructor and before render(). This method is called for every render cycle and provides an opportunity to update the component's state based on changes in props before the initial render.

4-The componentDidMount() lifecycle method
The componentDidMount() method is called once the component has been mounted into the DOM. It is typically used to set up any necessary event listeners or timers, perform any necessary API calls or data fetching, and perform other initialization tasks that require access to the browser's DOM API.



#The Updating Phase:
2- the Updating Phase, (Making changes in component like changes in props or state)

1-The shouldComponentUpdate() lifecycle method
The shouldComponentUpdate()  method is called before a component is updated. It takes two arguments: nextProps and nextState. This method returns a boolean value that determines whether the component should update or not. If this method returns true, the component will update, and if it returns false, the component will not update.

2-The componentWillUpdate() lifecycle method
componentWillUpdate() is a lifecycle method in React that gets called just before a component's update cycle starts. It receives the next prop and state as arguments and allows you to perform any necessary actions before the component updates.

But this method is not recommended for updating the state, as it can cause an infinite loop of rendering. It is primarily used for tasks such as making API calls, updating the DOM, or preparing the component to receive new data. componentWillUpdate() is often used in conjunction with componentDidUpdate() to handle component updates.


3-The componentDidUpdate lifecycle method
The componentDidUpdate() method is a lifecycle method in React that is called after a component has been updated and re-rendered. It is useful for performing side effects or additional operations when the component's props or state have changed.

4-The getSnapshotBeforeUpdate lifecycle method
The getSnapshotBeforeUpdate() method is called just before the component's UI is updated. It allows the component to capture some information about the current state of the UI, such as the scroll position before it changes. This method returns a value that is passed as the third parameter to the componentDidUpdate() method.


#The Unmounting phase:
3-The Unmounting Phase. (delete | removing the component from the Dom)

1-componentWillUnmount(): This method is called just before the component is removed from the DOM. It allows you to perform any necessary cleanup, such as canceling timers, removing event listeners, or clearing any data structures that were set up during the mounting phase.
After componentWillUnmount() is called, the component is removed from the DOM and all of its state and props are destroyed.

Noted: "It's important to note that once a component is unmounted, it cannot be mounted again. If you need to render the component again, you will need to create a new instance of it."


#UseRef Hook:
useRef is a hook in React that returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.
When to use it?: 

It's commonly used when you need to keep track of a value across renders without causing a re-render when the value changes.




#UseContext Hook:

useContext is a hook that allows you to access the value of a context within a function component.
When to use it?:
 It's used when you need to access global data (state, functions, etc.) across multiple components without having to pass props manually at each level



#useMemo Hook:
useMemo is a hook that memoizes the result of a function so that the function is only re-executed when one of its dependencies changes.
When to use it?: It's useful for optimizing performance by avoiding unnecessary re-computation of values in components.



#UseReducer Hook:
useReducer is a hook that is an alternative to useState. It accepts a reducer function along with an initial state and returns the current state paired with a dispatch method.
When to use it?: It's used when the state logic is complex and involves multiple sub-values or when the next state depends on the previous one.

