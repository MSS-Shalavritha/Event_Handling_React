import React, { useState } from "react";

function App() {
  const [click, setclick] = useState("");
  const [MClick, setm] = useState(false);
  const [handle, setHandle] = useState("");

  function handleClick(event) {
    setclick(event.target.value);
  }
  function sub(event) {
    setHandle(click);
    event.preventDefault();
  }
  function setMO() {
    setm(true);
  }
  function setOM() {
    setm(false);
  }
  return (
    <div className="container">
      <h1>Hello {handle}</h1>
      <form onSubmit={sub}>
        <input
          onChange={handleClick}
          type="text"
          placeholder="What's your name?"
          value={click}
        />
        <button
          style={{ backgroundColor: MClick ? "black" : "white" }}
          onMouseOver={setMO}
          onMouseOut={setOM}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
