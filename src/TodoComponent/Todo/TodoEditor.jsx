import { Component, useState } from "react";

export const TodoEditor = ({onSubmit}) => {
  // state = {
  //   textValue: "",
  // };

  const [textValue, setTextValue] = useState("")

  const handleInputChange = (e) => {
    setTextValue(e.target.value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault();

    textValue.trim() && onSubmit(textValue);
    setTextValue("")

  }

  // handleInputChange = (e) => {
  //   this.setState({ textValue: e.target.value });
  // };
  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   this.props.onSubmit(this.state.textValue);
  //   this.setState({ textValue: "" });
  // };
    return (
      <form onSubmit={handleSubmit}>
        <input
          value={textValue}
          onChange={handleInputChange}
          placeholder="Нове завдання"
        />
        <button type="submit">Create</button>
      </form>
    );
}
