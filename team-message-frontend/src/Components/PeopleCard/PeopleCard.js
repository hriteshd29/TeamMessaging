import Styles from "./style.module.css";
import avtar from "./hacker.png";
const PeopleCard = ({ name = "User", img = avtar }) => {
  return (
    <div className={`card ${Styles.cardDimension}`}>
      <div className="row g-0">
        <div className={`col-md-4 ${Styles.imageBody}`}>
          <img src={img} className="img-fluid rounded-circle" alt="avtar" />
        </div>
        <div className="col-md-8">
          <div className={`card-body ${Styles.cardBody}`}>
            <span className="card-title fs-5">{name}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PeopleCard;
