import React, { useState } from "react";

export default function HookCounterThree() {
  const [name, setName] = useState({ fname: "", lname: "" });

  return (
    <div>
      <input
        type="text"
        value={name.fi}
        onChange={(e) => setName({ ...name, fname: e.target.value})}
      />
      <input
        type="text"
        value={name.fi}
        onChange={(e) => setName({...name, lname: e.target.value })}
      />
      <div>First name: {name.fname}</div>
      <div>Last name: {name.lname}</div>
    </div>
  );
}
