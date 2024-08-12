# React Router DOM

React router is a react framework for enabling client side routing.

## BrowserRouter Component

The React Router provides us the BrowserRouter component to set up the stage for
client side routing.

Inside the BrowserRouter component stores the current browser address bar using
clean URLs and navigates using the browser's built-in history stack.

```jsx
// App.jsx

// importing from react-router-dom package
import { BrowserRouter } from "react-router-dom";

//Usage

<BrowserRouter> ... </BrowserRouter>;
```

## Routes Component

The Routes component is a React Router component which match a set of child
routes from the current location.

```jsx
// App.jsx

// importing from react-router-dom package
import { BrowserRouter, Routes } from "react-router-dom";

//Usage

<BrowserRouter>
  <Routes>...</Routes>
</BrowserRouter>;
```

## Route Component

Route component provided by the React Router is the important part of React
Router app. They couple URl segments to components or elements using **_path_**
and **_element_** attributes.

The element attribute accepts both HTML elements and React component Elements.

```jsx
// App.jsx

// importing from react-router-dom package
import { BrowserRouter, Routes } from "react-router-dom";

//Usage

<BrowserRouter>
  <Routes>
    <Route path="{endpoint}" element="{element to be shown in the endpoint}" />
  </Routes>
</BrowserRouter>;
```
