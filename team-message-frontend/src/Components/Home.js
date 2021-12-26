import { Link } from "react-router-dom";
import Modal from "./Modal/modal";
const Home = () => {
  return (
    <div className="card">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Create Channel
        </button>
        <Modal id="exampleModal" />
      </div>
    </div>
  );
};
export default Home;
