import Styles from "./style.module.css";
const YourMessage = ({ message = "Hi" }) => {
  return (
    <div
      class={`card text-white mb-3  float-end ${Styles.cardDesign}`}
      style={{ maxWidth: "70%" }}
    >
      <div class="card-body bg-primary rounded-pill me-3">
        <p class="card-text ">{message}</p>
      </div>
    </div>
  );
};
export default YourMessage;
