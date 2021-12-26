import Styles from "./style.module.css";
const ChannelCard = ({ name = "User", description = "Lets do it guys" }) => {
  return (
    <button
      className={`card text-dark text-start bg-light ${Styles.cardWidth}`}
    >
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description.substring(0, 25) + "..."}</p>
      </div>
    </button>
  );
};
export default ChannelCard;
