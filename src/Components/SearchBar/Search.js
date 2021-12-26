import style from "./style.module.css";
const Search = ({
  type = "text",
  name = "search",
  placeholder = "Enter Text",
  value = "",
  classes = "",
  onchange = () => {},
}) => {
  return (
    <input
      className={`${classes} ${style.search}`}
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onchange}
      value={value}
    />
  );
};
export default Search;
