import style from './buttonStyle.module.css'

let chooser = {
  login: style.loginBtn,
  create: style.addBtn,
  cq: style.cqBtn
}
export default function Button(props){

  let className = props.type ? chooser[props.type]:chooser["cq"];
  return(
    <button onClick={props.onClick} className={className}>{props.text}</button>
  )
}