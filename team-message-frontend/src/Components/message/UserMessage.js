import Styles from "./style.module.css";
import avtar from "./user.png";
const UserMessage = ({ message = "hi", name = "User", img = avtar }) => {
  return (
    <div class={`card mb-3 w-75  ${Styles.cardDesign}`}>
      <div class="row g-0">
        <div class="col-md-4 w-auto">
          <img
            src={img}
            class="img-fluid mx-2 my-2 rounded-start"
            alt="..."
            style={{ height: "50px" }}
          />
        </div>
        <div class="col-md-8">
          <div class="card-body ps-0 ">
            <p class="card-text">{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserMessage;
