import Styles from "./style.module.css";
import ChannelCard from "../Components/ChannelNameCard/ChannelNameCard";
import PeopleCard from "../Components/PeopleCard/PeopleCard";
import Search from "../Components/SearchBar/Search";
import UserMessage from "../Components/message/UserMessage";
import YourMessage from "../Components/message/YourMessage";
import Images from "../Components/images";
const Dashboard = ({ channelName = "Coder" }) => {
  return (
    <div className={`container-fluid ${Styles.fullContainer}`}>
      <div className={Styles.channelList}>
        <ChannelCard name="Shubham" description="Hi i am very good boy and" />
        <ChannelCard name="Shubham" description="Hi i am very good boy and" />
        <ChannelCard />
        <ChannelCard />
        <ChannelCard />
        <ChannelCard />
        <Search classes="w-75" />
      </div>
      <div className={Styles.messages}>
        <UserMessage message="hi " />
        <UserMessage />
        <YourMessage />
        <UserMessage />
        <YourMessage />
        <UserMessage />
        <YourMessage />
        <UserMessage />
        <YourMessage />
        <Search classes="position-absolute bottom-0 start-50 translate-middle-x w-75" />
      </div>
      <div className={Styles.people}>
        <h4 className={`text-center fw-bold ${Styles.ChannelNameBox}`}>
          {channelName}
        </h4>
        <h5 className={` fw-bold ${Styles.PeopleNameHeading}`}>People</h5>
        <PeopleCard name="Shubham Sharma" />
        <PeopleCard name="Shubham Sharma" />
        <PeopleCard name="Shubham Sharma" />
        <PeopleCard name="Shubham Sharma" />
        <PeopleCard name="Shubham Sharma" />
        <PeopleCard name="Shubham Sharma" />
        <h5 className={` fw-bold ${Styles.PeopleNameHeading}`}>Photos</h5>
        <Images />
        <Images />
        <Images />
        <Images />
        <Images />
        <Images />
        <Images />
      </div>
    </div>
  );
};
export default Dashboard;
