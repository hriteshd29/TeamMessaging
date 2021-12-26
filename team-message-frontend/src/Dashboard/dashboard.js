import React, { useEffect, useState } from "react";
import Styles from "./style.module.css";
import ChannelCard from "../Components/ChannelNameCard/ChannelNameCard";
import PeopleCard from "../Components/PeopleCard/PeopleCard";
import Search from "../Components/SearchBar/Search";
import Message from "../Components/message/UserMessage";
import SendMessage from "../Components/message/SendMessage";
import Images from "../Components/images";
import io from "socket.io-client";

const Dashboard = ({ channelName = "Coder" }) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(`http://localhost:8080`);
    newSocket.on("connection", () => {
      console.log(`I'm connected with the back-end`);
    });
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

  return (
    <div className={`container-fluid ${Styles.fullContainer}`}>
      <div className={Styles.channelList}>
        <ChannelCard name="Shubham" description="Hi Researching.." />
        <ChannelCard name="Jagat" description="Hi Exploring..." />
        <ChannelCard />
        <ChannelCard />
        <ChannelCard />
        <ChannelCard />
        <Search classes="w-75" />
      </div>
      {socket ? (
        <div className={Styles.messages}>
          <Message socket={socket} />
          <SendMessage socket={socket} />
        </div>
      ) : (
        <div>Not Connected</div>
      )}
      <div className={Styles.people}>
        <h4 className={`text-center fw-bold ${Styles.ChannelNameBox}`}>
          {channelName}
        </h4>
        <h5 className={` fw-bold ${Styles.PeopleNameHeading}`}>People</h5>
        <PeopleCard name="Shubham Sharma" />
        <PeopleCard name="Jagat" />
        <PeopleCard name="Prashant Mishra" />
        <PeopleCard name="Hritesh Dwivedi" />
        <h5 className={` fw-bold ${Styles.PeopleNameHeading}`}>Photos</h5>
        <Images />
        <Images />
        <Images />
        <Images />
      </div>
    </div>
  );
};
export default Dashboard;
