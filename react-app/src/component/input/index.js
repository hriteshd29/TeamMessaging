import style from './inputStyle.module.css';

let chooser = {
    email: style.email,
    pass: style.pass,
    none: style.normal
}
export default function Input(props){

  let className = props.type ? chooser[props.type]: chooser["none"];
  return(
    <input onChange={props.onChange} className={className} name={props.text} placeholder={props.text}/>
  )
}