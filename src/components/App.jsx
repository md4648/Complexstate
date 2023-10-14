import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function handleChange(event) {
    const { name, value } = event.target; // or we can use like below

    // const newValue = event.target.value;
    // const inputValue = event.target.name;

    setFullName((prevName) => {
      console.log(prevName);
      if (name === "fName") {
        return {
          fName: value,
          lName: prevName.lName //If we don't specify it overide and remove lName
        };
      } else if (name === "lName") {
        return {
          fName: prevName.fName, //If we don't specify it overide and remove fName
          lName: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          onChange={handleChange}
          // value={fullName.fName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={handleChange}
          // value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
