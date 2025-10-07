import {render, screen, fireEvent} from "@testing-library/react";
import App from "./App";

test("renders task input", () =>{
  render(<App/>);
  const input = screen.getByPlaceholderText(/add a new task/i);
  expect(input).toBeInTheDocument();
});

test("adds a new task", ()=>{
  render(<App/>);
  const input = screen.getByPlaceholderText(/add a new task/i);
  const button = screen.getByText(/add/i);

  fireEvent.change(input, {target: {value:"Learn Git"}});
  fireEvent.click(button);

  expect(screen.getByText("Learn Git")).toBeInTheDocument();
});