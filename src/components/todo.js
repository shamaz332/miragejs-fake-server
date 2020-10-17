import React, { useEffect, useState } from "react";

let baseUrl = "fakeapi";

export const Todo = () => {
  const [data, setData] = useState();

  const addHandler = () => {
    fetch(`/${baseUrl}/addTodo`, {
      method: "POST",
      body: { id: "1212", text: "adding data" },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const showHandler = () => {
    fetch(`/${baseUrl}/getTodo`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.todos);
      });
  };
  return (
    <div>
      Helo
      <button onClick={addHandler}>Add Todo</button>
      <button onClick={showHandler}>Show data</button>
      {JSON.stringify(data)}
    </div>
  );
};
