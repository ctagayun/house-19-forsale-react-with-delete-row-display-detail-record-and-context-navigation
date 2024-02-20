/*

For this project checkout:
   House-10-forsale, House-12-forsale, House-17

   Link to Calback hook PS
   https://app.pluralsight.com/ilx/video-courses/9a3771fa-626e-4708-8634-c49cc8616922/2e8c1f61-a9fa-48be-9e6c-4636fc0e17e1/66ac2d4c-a9cf-45e6-a3d5-b918b662cf47

   Concepts to Remember:
     Visit this link for the detailed explanation when useEffect fires:

     https://app.pluralsight.com/ilx/video-courses/9a3771fa-626e-4708-8634-c49cc8616922/4b5d269c-f9d9-4c3e-9806-ce1374a69d83/e36f10bb-acb4-4470-ae9e-285eb9031758    
  
 useEffect hook - whenever we use something that's outside the realm of React
  such API interaction, timer interactions, etc gives unpredictable results because it is 
  not PURE FUNCTION. For example api might not be available or 
  encounter error, we need to handle side-effects by useEffect hook.
    To perform an effect in the function component, React automatically 
  runs useEffect hook after running the components pure function and 
  the browser has been updated. 

    useEffect takes functions as paameters. In the fucntion, the effect 
  is performed. For example we can fetch data from an API for example
===============================================
Current Task:
   - added housedetail component
   - display housedetail component when click from houselist
      https://app.pluralsight.com/ilx/video-courses/9a3771fa-626e-4708-8634-c49cc8616922/2e8c1f61-a9fa-48be-9e6c-4636fc0e17e1/95d8a52b-12fc-4acb-937b-e886c968d9b3
   - set another state to display HouseDetail:
       const [selectedHouse, setSelectedHouse] = useState(); 

===============================================
Previous Task: Using Reducer Hook
  
Interview Questions ReducerHook:
  Question: What is useReducer in React?
    Answer: useReducer is a React hook that manages complex 
    state logic in function components by dispatching actions 
    to update state.
      
  Question: How does useReducer differ from useState in React?
    Answer: While useState is simpler for managing individual 
    state variables, useReducer is more suitable for complex state 
    logic where multiple values depend on each other.

  Question: What is the basic structure of the useReducer hook?
    Answer: It returns the current state and a dispatch function 
    for triggering state updates, taking a reducer function and 
    an initial state as arguments.

  Question: What is a reducer function in useReducer?
    Answer: The reducer function is responsible for specifying how 
    the state should change in response to dispatched actions, 
    based on the current state and the action. Reducer function 
    is an argument to ReducerDispatch()

  Question: How is state updated using useReducer?
    Answer: State is updated by dispatching actions, and the reducer 
    function determines the new state based on the current state 
    and the action type.

  Question: Can useReducer replace all use cases of useState in React?
    Answer: While useReducer is powerful, it's not necessary for 
    all scenarios. useState is simpler and more suitable for managing 
    individual state variables. 

====================================================
Prev  Task: - show a loading indicator
     In order to show a loading indicator, one would need to introduce 
     a new stateful value. A boolean called isLoading may be the best solution.

     - When the side-effect which loads the data kicks in, set the stateful 
     boolean to true. Once the data loaded, set the stateful boolean to 
     false again.

     - In JSX, show a "Loading ..." text conditionally when the isLoading 
     boolean is set to true.

===================================================
Prev Task: Inline Handler in JSX:
  Task: The application renders a list of items and allows 
its users to filter the list via a search feature. Next the 
application should render a button next to each list item 
which allows its users to remove the item from the list.
  Optional Hints:

   -The list of items needs to become a stateful value 
   (here: stateful array) with useState in order to manipulate 
   it (e.g. removing an item) later.

   - Every list item renders a button with a click handler. 
   When clicking the button, the item gets removed from the 
   list by manipulating the state.

   - Since the stateful list resides in the App component, 
    one needs to use callback handlers to enable the Item 
    component to communicate up to the App component for 
    removing an item by its identifier.
===============================================================
 Previous Task: Side Effect    
    Note: Whenever we use something that's outside the realm of React
  such API interaction gives unpredictable results because it is 
  not PURE FUNCTION. For example api might not be available or 
  encounter error, we need to handle side-effects by useEffect hook.

    This exercise will implement a feature that will enable Search component
 to remember the most recent searched. 

    Let's implement this feature by using a side-effect to store the recent search 
 from the browser's local storage and retrieve it upon the initial component 
 initialization. First, use the local storage to store the searchTerm accompanied
  by an identifier whenever a user types into the HTML input field:

   What is useEffect?
      - Use useEffect Hook to trigger the desired side-effect each time 
     the searchTerm changes:

      - Use effect automatically runs after React completes running
      the component pure functions and the browser has been updated.
      In the function the "EFFECT" is performed. So we can fetch data
      from an API for example.
 ==============================================================
 Previous Task: React Controlled Components Task:
    - we modified the Search component. We added the value attribute
      
    <div className="float-start ">
            <label htmlFor="search">Search:</label>
            <input id="search" 
              value={props.search} <-- We added the value attribute
              type="text"
              onChange={props.onSearch}/> 
            <p> 
              Searching for <strong>{props.search}</strong>
            </p>
        </div>
    
    Here we added a "value" attribute instead of giving the 
    html element the freedom of keeping track of its internal state.
    Instead React uses state by leveraging the "value" attribute.
    Whenever the HTML search ox element emits change event the NEW VALUE 
    is WRITTEN to React states and RE-RENDERS the component. Then
    the HTML element uses the recent state as value again.
    
    - As a result because of the "value" attribute the input textbox 
      became EXPLICITLY controlled element and Search component became 
      IMPLICITLY a controlled component.

    Interview Questions:
      Question 1: What is a controlled component in React?
        Answer: A controlled component is a component whose 
               FORM elements are controlled by React state. 
                 
      Question 2: How do you create a controlled input in React?
       Answer: Set the input VALUE attribute to a state variable 
       and provide an onChange handler to update the state.

      Question 3: What is the role of the value prop in a controlled input element?
       Answer: The value prop sets the current value of the input, 
       making it a controlled component.

      Question 4: How do you handle a controlled checkbox in React?
         Answer: Use the checked attribute and provide an 
         onChange handler to update the corresponding state.

      Question 5: How do you clear the value of a controlled component?
        Answer: Set the state variable to an empty or null value to 
        clear the value of a controlled component.

      Question 6 : What are the potential downsides of using controlled 
      components?
        Answer: Controlled components can lead to verbose code, 
        especially in forms with many input elements. 
  ===============================================================     
  Previous Tasks:
    - create a search component
    - add code to display only the houses based on the search
      result.
    - add instantiation of Search component in App.jsx

  ===============================================================     
  Previous Task:
     - Create HouseList component
     - see discussion about React state in HouseList component.
     
  ===============================================================     

  Previous Task:
  Setup: 
    npm install bootstrap
    Once the installation is complete, we can include it in our app’s 
    entry file in main.jsx :
    --  Bootstrap CSS
    import "bootstrap/dist/css/bootstrap.min.css";
    -- Bootstrap Bundle JS
    import "bootstrap/dist/js/bootstrap.bundle.min";

    Now since we created the project with Vite, we can rely 
    on Vite's plugins to integrate ESLint properly. Run the 
    following command
       npm install vite-plugin-eslint --save-dev
    */
import * as React from 'react';
import './App.css'
import Header from "./header";
import HouseList from './house/houseList';
import Search from './house/search';
import HouseDetail from '../src/house/housedetail';

/*
      At the moment initialHouses is unstateful variable
      To gain control over the list, lets make it stateful.
      By using it as initial state in React's useState Hook. The 
      returned values from the array are the current state (stories) 
      and the state updater function (setStories):
    */
const welcome = {
    subject: 'List of ',
    title: 'Houses for Sale',
   };   

const initialStories = 
[
    {
      "objectID": 1,
      "address": "12 Valley of Kings, Geneva",
      "country": "Switzerland",
      "description": "A superb detached Victorian property on one of the town's finest roads, within easy reach of Barnes Village. The property has in excess of 6000 sq/ft of accommodation, a driveway and landscaped garden.",
      "price": 900000,
      "photo": "277667"
    },
    {
      "objectID": 2,
      "address": "89 Road of Forks, Bern",
      "country": "Switzerland",
      "description": "This impressive family home, which dates back to approximately 1840, offers original period features throughout and is set back from the road with off street parking for up to six cars and an original Coach House, which has been incorporated into the main house to provide further accommodation. ",
      "price": 500000,
      "photo": "462358"
    },
    {
      "objectID": 3,
      "address": "Grote Hof 12, Amsterdam",
      "country": "The Netherlands",
      "description": "This house has been designed and built to an impeccable standard offering luxurious and elegant living. The accommodation is arranged over four floors comprising a large entrance hall, living room with tall sash windows, dining room, study and WC on the ground floor.",
      "price": 200500,
      "photo": "259600"
    },
    {
      "objectID": 4,
      "address": "Meel Kade 321, The Hague",
      "country": "The Netherlands",
      "description": "Discreetly situated a unique two storey period home enviably located on the corner of Krom Road and Recht Road offering seclusion and privacy. The house features a magnificent double height reception room with doors leading directly out onto a charming courtyard garden.",
      "price": 259500,
      "photo": "534182"
    },
    {
      "objectID": 5,
      "address": "Oude Gracht 32, Utrecht",
      "country": "The Netherlands",
      "description": "This luxurious three bedroom flat is contemporary in style and benefits from the use of a gymnasium and a reserved underground parking space.",
      "price": 400500,
      "photo": "164558"
    }
  ];  


 //  We need for this because we will fetch data from an array
const getAsyncStories = () =>
  new Promise((resolve) =>
    setTimeout(
      () => resolve({ data: { stories: initialStories } }),
      0
    )
  );  

//The first thing to do when using React.useReducer hook
//is to define a reducer function. 
//The function called "storiesReducer" receives an empty array
//returns an array with two items:
//          houses (current state) and
//          dispatchHouses (state updater function)

//The updater function updates the state "houses" IMPLICITLY (A)
//dispatching an "action" for the reducer, The "action" comes with:
//     1. Type
//     2. and optional Payload

const storiesReducer = (state, action) => {
    switch (action.type) {
      case 'STORIES_FETCH_INIT': //distinct type and payload 
                                 //received by dispatchStories 
                                 //dispatch function
                                 //so we need to add it here
        return {
          ...state,              //return new state object with KV pairs
                                 //via spread operator from current state object
          isLoading: true,
          isError: false,
        };
      case 'STORIES_FETCH_SUCCESS': //distinct type and payload 
                                    //received by dispatchStories 
                                    //dispatch function
                                    //so we need to add it here
        return {
          ...state,
          isLoading: false,
          isError: false,
          data: action.payload,
        };
      case 'STORIES_FETCH_FAILURE':   //another distinct type and payload 
                                      //received by dispatchStories 
                                      //dispatch function 
                                      //so we need to add it here
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      case 'REMOVE_STORY':              //another distinct type and payload 
                                        //received by dispatchStories 
                                        //dispatch function
                                        //so we need to add it here
                                    //Observe how the REMOVE_STORY action 
                                    //changed as well. It operates on the 
                                    //state.data, and no longer just on the
                                    // plain "state".
        return {
          ...state,
          data: state.data.filter(  //now operate on state.data not just "state"
            (story) => action.payload.objectID !== story.objectID
          ),
        };

      case 'ADD_HOUSE':
        return {
          ...state,
          isLoading: false,
          isError: false,
          data: action.payload,
       };

      default:
        throw new Error();
    }
  };
  
  //key and initialState are the parameters passed to this function call
  const useStorageState = (key, initialState) => {
    const [value, setValue] = React.useState(
        localStorage.getItem('key') || initialState //get item from localstorage 
                                        //if not there use initialState as value
    );
    
    React.useEffect(() => {
      console.log('useEffect fired. Displaying value of dependency array ' + [ value, key]  );
        localStorage.setItem(key, value); //store value in the local storage
        },
        [value, key]   //Dependency array. if this changes localStorage.setItem fires
        ); //EOF useEffect
    
    //the returned values are returned as an array.
    return [value, setValue]; 

} //EOF create custom hook
    
/*===============================================
// App section
/===============================================*/
const App = () => {
  console.log("App component fires");
  const [searchTerm, setSearchTerm] =  useStorageState ( //<-- custom hook
    'search', //key
    '',  //Initial state
    );

   //data: [], isLoading, isError flags hooks merged into one 
   //useReducer hook for a unified state.
   const [stories, dispatchStories] = React.useReducer( //A
   storiesReducer,
   { data: [], isLoading: false, isError: false } //We want an empty list data [] 
                                                  //for the initial state, set isloading=false
                                                  //is error=false
 ); //EOF React.useReducer

//This side effect fires because we made a call to
React.useEffect(() => {
  //dispatchStories receiving different payload
  dispatchStories({ type: 'STORIES_FETCH_INIT' }); //for init
                  //dispatchStories receives STORIES_FETCH_INIT as type

  getAsyncStories() //this function reads an inline array called "initialStories"
    .then((result) => {
      dispatchStories({
        type: 'STORIES_FETCH_SUCCESS',
        payload: result.data.stories,
      });
    })
    .catch(() =>
      dispatchStories({ type: 'STORIES_FETCH_FAILURE' })
    );
}, []); //EOF React.useEffect(


const handleRemoveStory = (item) => {
  dispatchStories({
    type: 'REMOVE_STORY',
    payload: item,
  });
};


  //"houses" is the array of houses newly created by the 
  //filter() method.
 // const searchedHouses = houses.filter((house) =>

 // house.country.toLowerCase().includes(stateOfSearchComponent.toLowerCase())
//);
  
const handleSearch = (event) => {
  setSearchTerm(event.target.value);
};

const handleSearchSubmit = () => {  //CC
  setUrl(`${API_ENDPOINT}${searchTerm}`);
};

  //by addressing the state as object and not as array anymore,
  //note that it operates on the state.data no longer on the plain state.
  //"stories" here is the state updated by the reducer function (see line 362)
  const searchedStories = stories.data.filter((story) =>
    story.country.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
 

  const handleAddHouse = (item) => { 
    dispatchStories({
      type: 'ADD_HOUSE',  //TYPE
      payload: [...searchedStories, //contains the searchedHouses stories
      {                             //the below records will be appended to the end of ...houses
        objectID: 9,
        address: "1456 Riverside Road",
        country: "USA",
        price: 25000000
      },
      {      //the below record will be appended to the end of ...list
        objectID: 10,
        address: "1196 Justus Road2",
        country: "USA",
        price: 0
      }, 
       ] }  
           
    );

  }
   
  const onSelectHouse = (event) => {
    //var myVal = e.target || window.event.target;
    alert('td clicked');
    event.stopPropagation();
  };

  /*========================================================
  // Implementation of use case: user clicks on 
  // HouseList row and displays HouseDetail component
  // and then want to be able to go back to the HouseList
  // displayed earlier
  ==========================================================*/
  //Introduce another state for displaying HouseDetail.
  //I am not passing initial value that means selectedHouse 
  //will be initiall undefined.
  const [selectedHouse, setSelectedHouse] = React.useState(); 

   //https://app.pluralsight.com/ilx/video-courses/9a3771fa-626e-4708-8634-c49cc8616922/2e8c1f61-a9fa-48be-9e6c-4636fc0e17e1/66ac2d4c-a9cf-45e6-a3d5-b918b662cf47
  
   
   //This is a callback function that needs to be passed
   //to HouseList. This callback function is called when a HouseRow
   //is selected thereby updating the selectedHouse state in line 473

   //Things to watch:
   //  1.Function is re-created oneach re-render ceating a new
   //reference.
   //  2. Watch out with memoized components
   //  3. Watch out if the function is in a dependency array
   //of a useEffect for example. The effect's function will 
   //execute.
   //  To prevent the above wrap the function in a useCallback
   //hook if needed. or Memoized the the contained function.
   //
   //  The useCallback hook is a built-in hook in React that 
   //lets you memoize a callback function by preventing it 
   //from being recreated on every render. In simple terms, 
   //it means that the callback function is cached and does 
   //not get redefined on every render.

   // Example setSelectedHouseWrapper with CallBack Hook.
   //Works the same as useMemo
   //const setSelectedHouseWrapper = useCallback((house) => {
   //    setSelectedHouse(house); //In thiscase the containing function 
                                //will only be created when the
                                //component is mounted. See line 502
                                //For every re-render, the reference remains
                                //the same.
                                //
    //   console.log("App component setSelectedHouseWrapper fires");
    //   const myHouse = JSON.stringify(house);
     //  console.log("MyHouse = " + myHouse);
   
   //  },[]); //when component is mounted  

 // Example setSelectedHouseWrapper with no useCallback hook
  const setSelectedHouseWrapper = (house) => {
    console.log("App component setSelectedHouseWrapper fires");
    const myHouse = JSON.stringify(house);
    console.log("MyHouse = " + myHouse);
    setSelectedHouse(house);
  } 

  return (
    

    <div>
      <Header  headerText={welcome} /> 
      <hr />

      {stories.isError && <p>Something went wrong ...</p>}
      {stories.isLoading && <p>Loading ...</p> }

      {selectedHouse ? (
          <HouseDetail house={selectedHouse} />  //if truthy display detail
        ) : ( 
           <>  
           <Search 
              id="search"
              value={searchTerm}
              isFocused //pass imperatively a dedicated  prop. isFocused as an attribute is equivalent to isFocused={true}
              onInputChange={handleSearch}  
              onClick={handleSearchSubmit} 
              >
          <strong>Search:</strong>
          </Search>
          <HouseList list={searchedStories} //HouseList and its rows (HouseRow) get
                                     //searchedStories via prop. By doing this we are
                                     //giving full control to this HouseList and
                                     //HouseRow child components
                      onRemoveHouse={handleRemoveStory} 
                      onAddHouse={handleAddHouse} 
                      onSelectHouse={onSelectHouse}
                      selectedHouseSetter= {setSelectedHouseWrapper}// replace SetSelectedHouse 
                                                                    //with the wrapper function 
            /> 
                                           
          </>
                      
        )}

    </div>
  );
};

 /*const InputWithLabel = ({
  id,
  value,
  type = 'text',
  onInputChange,
  isFocused,
  children,
}) => {
  const inputRef = React.useRef();

  React.useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  return (
    <>
      <label htmlFor={id}>{children}</label>
      &nbsp;
      <input
        ref={inputRef}
        id={id}
        type={type}
        value={value}
        onChange={onInputChange}
      />
    </>
  );
};

const List = ({ list, onRemoveItem }) => (
  <ul>
    {list.map((item) => (
      <Item
        key={item.objectID}
        item={item}
        onRemoveItem={onRemoveItem}
      />
    ))}
  </ul>
);

 "objectID": 1,
      "address": "12 Valley of Kings, Geneva",
      "country": "Switzerland",
      "description": "A superb detached 
      "price": 900000,
      "photo": "277667"  
const Item = ({ item, onRemoveItem }) => (
  <li>
    <span>{item.address}</span>
    <span>{item.country}</span>
    <span>{item.price}</span>
    <span>
      <button type="button" onClick={() => onRemoveItem(item)}>
        Dismiss
      </button>
    </span>
  </li>
);
*/

export default App

//========================================================== 
 //Note on Map:
 //Within the map() method, we have access to each object and its properties.
 
 //useState
 //By using useState, we are telling React that we want to have a 
 //stateful value which changes over time. And whenever this stateful value 
 //changes, the affected components (here: Search component) 
 //will re-render to use it (here: to display the recent value).

 /* 
     The filter() method takes a function 
        as an argument, which accesses each item in the array and returns /
        true or false. If the function returns true, meaning the condition is 
        met, the item stays in the newly created array; if the function 
        returns false, it's removed from the filtered array.

  
 */
 
 /*Note on Map:
   Within the map() method, we have access to each object and its properties.

 // concatenating variables into a string
    var fullName = `${firstName} ${lastName}`
    console.log(fullName);


 //useState
    By using useState, we are telling React that we want to have a 
 stateful value which changes over time. And whenever this stateful value 
 changes, the affected components (here: Search component) 
 will re-render to use it (here: to display the recent value).

  //Work flow of a useState:
       When the user types into the input field, the input field's change event 
      runs into the event handler. The handler's logic uses the event's value 
      of the target and the state updater function to set the updated state. 
      Afterward, the component re-renders (read: the component function runs). 
      The updated state becomes the current state (here: searchTerm) and is 
      displayed in the component's JSX.

  //Arrow Function
    function getTitle(title) { - convert to arrow function see below
    
    const getTitle =(title) => 
       (
        title
       );

    Eliminate bracket and "return" statement if no business logic before 
    the function - concise
   

  //Arrow function - 
   If there is a business business logic. Otherwise retain the {} and
   put a "return" statement 
     const App = () => {
       ...
       return xyz;
     } 
 
  //How to use a React.Reducer hook 
  To use Reducer (1) first define a reducer function.
     1. A reducer action is always associated with a type. As best 
        practice with a payload.
        Example:
          const storiesReducer = (state, action) =>{
          if (action.type === 'SET_STORIES'){
            //If the type matches a condition in the reducer. Return a new
            //state based on the incoming state and action
            return action.payload;
          }
          else{
          //throw an error if isn't covered by the reducer to remind yourself
          //that the implementation is not covered
            throw new Error();
          }
        }
      2. The second thing to do is to replaceReact.useState to use a reducer hook
         like this: 

          const [stories, dispatchStories] = React.useReducer(storiesReducer,[]);

          1. receives a reducer function called "storiesReducer"
          2. receives an initial state of empty array []
          3. returns an array with 2 item: 
            - The first item is "stories" which is the current state
            - The second item is the updater function named "dispatchStories"
            Unlike useState, the updater function of Reducer sets the state
            "implicitly" by dispatching an "action". Example:
               dispatchStories({
                 type: 'SET_STORIES',   <== this is the action
               payload: result.data.stories,
             });
       
 */