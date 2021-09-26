import avtar from "./PeopleCard/hacker.png";
const Images = ({ src = avtar }) => {
  return (
    <img
      src={src}
      className="rounded"
      style={{ width: "5rem", margin: "5px" }}
    ></img>
  );
};
export default Images;
