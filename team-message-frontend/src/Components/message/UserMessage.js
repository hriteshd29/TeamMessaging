import React, { useEffect, useState } from "react";
import Styles from "./style.module.css";
import avtar from "./user.png";

function Message({ socket }) {
  const [messages, setMessages] = useState({});

  useEffect(() => {
    const messageListener = (message) => {
      setMessages((prevMessages) => {
        const newMessages = { ...prevMessages };
        newMessages[message.id] = message;
        return newMessages;
      });
    };

    const deleteMessageListener = (messageID) => {
      setMessages((prevMessages) => {
        const newMessages = { ...prevMessages };
        delete newMessages[messageID];
        return newMessages;
      });
    };

    socket.on("message", messageListener);
    socket.on("deleteMessage", deleteMessageListener);
    socket.emit("getMessages");

    return () => {
      socket.off("message", messageListener);
      socket.off("deleteMessage", deleteMessageListener);
    };
  }, [socket]);

  return (
    <div className="message-list">
      {[...Object.values(messages)]
        .sort((a, b) => a.time - b.time)
        .map((message) => (
          <div
            key={message.id}
            className="message-container"
            title={`Sent at ${new Date(message.time).toLocaleTimeString()}`}
          >
            <span className="user">{message.user.name}:</span>
            <span className="message">{message.value}</span>
            <span className="date">
              {new Date(message.time).toLocaleTimeString()}
            </span>
          </div>
        ))}
    </div>
  );
}

//     // <div class={`card mb-3 w-75  ${Styles.cardDesign}`}>
//     //   <div class="row g-0">
//     //     <div class="col-md-4 w-auto">
//     //       <img
//     //         src={img}
//     //         class="img-fluid mx-2 my-2 rounded-start"
//     //         alt="..."
//     //         style={{ height: "50px" }}
//     //       />
//     //     </div>
//     //     <div class="col-md-8">
//     //       <div class="card-body ps-0 ">
//     //         <p class="card-text">{message}</p>
//     //       </div>
//     //     </div>
//     //   </div>
//     // </div>}
//   );
// };
export default Message;
