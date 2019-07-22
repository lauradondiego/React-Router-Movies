import React, { useState } from "react";
import SavedList from "./Movies/SavedList";
import { MovieList, Movie } from "./Movies";
import { Route, Switch } from "react-router-dom";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Switch>
        <Route path="/" exact component={MovieList} />
        <Route path="/movies/:count" component={Movie} />
      </Switch>
    </div>
  );
};

export default App;
