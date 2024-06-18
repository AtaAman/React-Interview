import React, { useState, useEffect } from "react";

function Api() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return <div>{data ? <p>Title: {data.title}</p> : <p>loading...</p>}</div>;
}

export default Api;
