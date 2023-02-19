import "bootstrap/dist/css/bootstrap.min.css";
import React, { useReducer } from "react";
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
          task: action.task,
          urgent: action.urgent,
        },
        ...state,
      ];

    case "DELETE_TASK":
      let finalState = state.filter((el) => el.id !== action.id);
      return finalState;

    case "EDIT_TASK":
      let task = state.filter((el) => el.id !== action.id);
      let taskObj = {
        id: action.id,
        task: action.task,
        urgent: action.task,
      };
      return [...task, taskObj];

    default:
      break;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="container my-5">
      <h2 className="mb-2">TODO</h2>
      <form>
        <div className="mb-3">
          <FloatingLabel controlId="floatingInputGrid" label="ToDo Task">
            <Form.Control type="text" placeholder="Take a Walk" />
          </FloatingLabel>
        </div>
        <div className="mb-3">
          <Form.Check
            type="checkbox"
            id="default-checkbox"
            label="default checkbox"
            name="urgent"
          />
        </div>
      </form>

      <div className="">
        <Card className="mb-2">
          <Card.Body className="d-flex justify-content-between align-items-center">
            <Card.Text className="mb-0 text-danger">
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <div>
              <Button variant="light" className="fs-5">
                <MdDelete />
              </Button>{" "}
              <Button variant="light" className="fs-5">
                <AiFillEdit />
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default App;
