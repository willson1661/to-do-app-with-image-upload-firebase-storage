import {  useState } from "react";
import React from "react";
import "./BodyContent.css";

import MyButton from "../MyButton";





const BodyContent = () => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState("Choose one");




  const [toggle, setToggle] = useState(0);
  function toggleState(index) {
    setToggle(index);
  }



  return (
    <section className="App">
      <div className="flex-container">
        <div className="row">
          <h3> TO-DO-APP</h3>
          <div>
            <div className="dropdown">
              <div
                onClick={(e) => {
                  setIsActive(!isActive);
                }}
                className="dropdown-btn"
              >
                {selected}
                {/* <span
              className={isActive ? "fas fa-caret-up" : "fas fa-caret-down"}
            /> */}
              </div>
              <div
                className="dropdown-content"
                style={{ display: isActive ? "block" : "none" }}
              >
                <div
                  onClick={(e) => {
                    setIsSelected(e.target.textContent);
                    setIsActive(!isActive);
                    toggleState(1);
                  }}
                  className={toggle === 1 ? "active-tab" : "item"}
                >
                <MyButton to="Text" />
                </div>
                <div
                  className={toggle === 2 ? "active-tab" : "item"}
                  onClick={(e) => {
                    setIsSelected(e.target.textContent);
                    setIsActive(!isActive);
                    toggleState(2);
                  }}
                >
                 <MyButton to="uploadimage" />
                </div>
              </div>
              <div className="contents">
                <div className={toggle === 1 ? "active-content" : "content"}>
              
                </div>
                <div className={toggle === 2 ? "active-content" : "content"}>
         
           
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default BodyContent;
