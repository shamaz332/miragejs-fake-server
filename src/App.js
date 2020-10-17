import React from 'react';
import {Todo} from "./components/todo"
import MirageServer from "./mirage"

MirageServer()
function App() {
  return (
    <div className="App">
<Todo/>
    </div>
  );
}

export default App;
