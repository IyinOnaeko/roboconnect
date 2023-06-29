import React, {Component} from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox.js";



class App extends Component {
    constructor(){
        super()
        this.state =  {
            robots : robots,
            searchField: ""
        }
    }
    render() {
        return (
            <div className="tc">
              <h1>RoboConnect</h1>
              <SearchBox />
              <CardList robots={this.state.robots} />
            </div>
          );
    }
 
}

export default App;
