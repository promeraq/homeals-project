import React from "react";

// We add to it default data, that WON'T be used but gives us better auto-completion.
const HomeContext = React.createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  /*   updateItem: (id) => {}, */
});

// App
export default HomeContext;
