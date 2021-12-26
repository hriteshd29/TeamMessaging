import React, { useState } from "react";
import Styles from "./style.module.css";

const SendMessage = ({ socket }) => {
  const [value, setValue] = useState("");
  const submitForm = (e) => {
    e.preventDefault();
    socket.emit("message", value);
    setValue("");
  };
  return (
    <form onSubmit={submitForm} className={`${Styles.SendMessageForm}`}>
      <input
        autoFocus
        value={value}
        placeholder="Type your message"
        onChange={(e) => {
          setValue(e.currentTarget.value);
        }}
      />
    </form>
  );
};
export default SendMessage;
