import React, { createContext } from 'react';
import FirstCom from "./FirstCom";



const App = () => {
  const FirstName = createContext();
  const LastName = createContext();

  return (
    <>
      <FirstName.Provider value={"Neha"}>
        <LastName.Provider value={"Thakur"}>
          <FirstCom />
        </LastName.Provider>
      </FirstName.Provider>
    </>
  )
}

export default App;
export { FirstName, LastName };




