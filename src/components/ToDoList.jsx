import React, { useState } from "react";

function ToDoList() {
  const [ToDos, setToDos] = useState([]);
  const [ToDoText, setToDoText] = useState("");

  const handleAddToDo = () => {
    if (ToDoText.trim() === "") {
      alert("Item cannot be blank");
      return;
    }
    if (ToDoText.length > 255) {
      alert("Item should be no more than 255 characters");
      return;
    }
    if (ToDos.some(ToDo => ToDo.text === ToDoText)) {
      alert('"' +ToDoText+ '"' + " is already on the list.");
      return;
    }
    setToDos([...ToDos, { id: Date.now(), text: ToDoText }]);
    setToDoText("");
  };

  const handleDeleteToDo = (id) => {
    setToDos(ToDos.filter(ToDo => ToDo.id !== id));
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddToDo();
    }
  };
  

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">To Do List</h1>
      <div className="flex">
        <input
          type="text"
          className="border border-gray-300 px-4 py-2 mr-2 flex-1"
          placeholder="Enter item to be done"
          value={ToDoText}
          onChange={(e) => setToDoText(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleAddToDo}
        >
          Add ToDo
        </button>
      </div>
      <ul className="mt-4">
        {ToDos.map(ToDo => (
          <li key={ToDo.id} className="flex items-center justify-between border-b py-2">
            <span>{ToDo.text}</span>
            <button
              className="text-red-500"
              onClick={() => handleDeleteToDo(ToDo.id)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;