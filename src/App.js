import React from "react";
import "./style/master.scss"; // applies global scss styles
import { uiData } from "./data/ui";
import FunctionUI from "./components/FunctionUI";
import _ from "lodash";

export default class App extends React.Component {
   // https://reactjs.org/docs/components-and-props.html - link to understand components
   constructor() {
      super();
      console.log(uiData);
   }
   render() {
      const sortedData = uiData.sort((a, b) => {
         return a.order - b.order;
      });

      const orderedData = _.orderBy(
         uiData,
         ["inputs", "name"],
         ["desc", "asc"]
      );

      return (
         <div className="container">
            <div className="row ">
               {orderedData.map((functionUI) => {
                  console.log(functionUI);
                  return (
                     <FunctionUI
                        name={functionUI.name}
                        desc={functionUI.desc}
                        inputs={functionUI.inputs}
                     />
                  );
               })}
            </div>
         </div>
      );
   }
}
