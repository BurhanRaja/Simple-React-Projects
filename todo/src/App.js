import "bootstrap/dist/css/bootstrap.min.css";
import React, { useReducer, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

let initialState = [];

export function reducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return [
        {
          id: state.length + 1,
          ...action.payload,
        },
        ...state,
      ];

    case "DELETE_TASK":
      state = state.filter((el) => el.id !== action.id);
      return state;

    case "EDIT_TASK":
      state = state.filter((el) => el.id !== action.payload.id);

      let taskObj = {
        ...action.payload,
      };

      return [taskObj, ...state];

    default:
      break;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [task, setTask] = useState("");
  const [urgent, setUrgent] = useState(false);

  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(0);

  const handleEnter = (e) => {
    e.preventDefault();
    if (edit) {
      dispatch({
        type: "EDIT_TASK",
        payload: {
          id,
          task,
          urgent,
        },
      });
      setEdit(false);
    } else {
      dispatch({
        type: "ADD_TASK",
        payload: {
          task,
          urgent,
        },
      });
    }
    setTask("");
    setUrgent(false);
  };

  const deleteTask = (id) => {
    dispatch({
      type: "DELETE_TASK",
      id,
    });
  };

  const onEdit = (id, task, urgent) => {
    setEdit(true);
    setTask(task);
    setUrgent(urgent);
    setId(id);
  };

  return (
    <div className="container my-5">
      <h2 className="mb-2">TODO</h2>
      <form onSubmit={handleEnter} className="pb-3">
        <div className="mb-3">
          <FloatingLabel controlId="floatingInputGrid" label="ToDo Task">
            <Form.Control
              type="text"
              placeholder="Take a Walk"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
          </FloatingLabel>
        </div>
        <div className="mb-3">
          <Form.Check
            type="checkbox"
            id="default-checkbox"
            label="Urgent"
            onChange={() => setUrgent(!urgent)}
            checked={urgent}
          />
        </div>
        <Button type="submit" variant="dark">
          Submit
        </Button>
      </form>

      <div className="">
        {state.map((el) => {
          return (
            <Card className="mb-2" key={el.id}>
              <Card.Body className="d-flex justify-content-between align-items-center">
                <Card.Text className={`mb-0 ${el.urgent ? "text-danger" : ""}`}>
                  {el.task}
                </Card.Text>
                <div>
                  <Button
                    variant="light"
                    className="fs-5"
                    onClick={() => deleteTask(el.id)}
                  >
                    <MdDelete />
                  </Button>{" "}
                  <Button
                    variant="light"
                    className="fs-5"
                    onClick={() => onEdit(el.id, el.task, el.urgent)}
                  >
                    <AiFillEdit />
                  </Button>
                </div>
              </Card.Body>
            </Card>
          );
        })}{" "}
      </div>
    </div>
  );
}

export default App;
