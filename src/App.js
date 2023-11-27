

import './App.css';
import BodyContent from './body/BodyContent';
import ScrollButton from './ScrollButton';
import React from 'react';
import MyButton from './MyButton';
import Text from './body/Text';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Firebasemain from './body/firebasemain';

const App =()=> {

 


  return (
    <div className='App'>



<ScrollButton/>



<Router>
        <MyButton to=" " />
          <Routes>
          <Route
            path="/"
            element={
              <React.Suspense fallback="Loading...">
   <BodyContent/>
              </React.Suspense>
            }
          />
          <Route
              path="/Text"
              element={
                <React.Suspense fallback="Loading...">
                   
                  <Text/>
             
                </React.Suspense>
              }
            />
               <Route
              path="/uploadimage"
              element={
                <React.Suspense fallback="Loading...">
                  <Firebasemain/>
                </React.Suspense>
              }
            />
              </Routes>
              </Router>

    </div>
  );
}

export default App;
