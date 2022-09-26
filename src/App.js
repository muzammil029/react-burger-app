import React, { Component } from "react";

import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";

class App extends Component {
  render (){
    return(
      <div>
        <layout>
          <BurgerBuilder />
        </layout>
      </div>
    );
  }
}
export default App;