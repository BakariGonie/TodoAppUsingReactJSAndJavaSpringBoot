import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  deleteTodoApi,
  retrieveAllTodosForUsernameApi,
} from "../api/TodoApiService";
import { useAuth } from "../security/AuthContext";

export default function ListTodoComponent() {
  const [todos, setTodos] = useState([]);
  const [message, setMessage] = useState(null);
  const navigate=useNavigate()

  //use effect - tell react that your components need to do something after render
  useEffect(() => refreshTodos(), []);
  const authContext = useAuth();
  const username = authContext.username;

  function refreshTodos() {
    retrieveAllTodosForUsernameApi(username)
      .then((response) => {
        console.log(response.data);
        setTodos(response.data);
      })
      .catch((error) => console.log(error));
  }

  function deleteTodo(id) {
    deleteTodoApi(username, id)
      .then(() => {
        setMessage(`delete of todo with id of ${id} is successful`);
        refreshTodos();
      })
      .catch((error) => console.log(error));
  }
  
  function updateTodo(id){
    navigate(`/todo/${id}`)

  }  
  function addNewTodo(){
    navigate(`/todo/-1`)

  }

  return (
    <div className="Container">
      <h1>Thing you want to todo</h1>
      {message && <div className="alert alert-warning">{message}</div>}

      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Description</th>
            <th>Target Date</th>
            <th>Is Done?</th>
            <th>Delete</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.description}</td>
              <td>{todo.targetDate.toString()}</td>
              <td>{todo.done.toString()}</td>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() => deleteTodo(todo.id)}
                >
                  Delete
                </button>
              </td>
              <td>
                <button
                  className="btn btn-success"
                  onClick={() => updateTodo(todo.id)}
                >
                  Update
                </button>
              </td>
              {/*<td>{todo.targetDate.toDateString()}</td>*/}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="btn btn-success m-5" onClick={addNewTodo}>Add New Todo</div>
    </div>
    
  );
}
