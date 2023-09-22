const Button =({color,text,handleClick})=>{
    return(
        <button className={`btn btn-${color}`} onClick={handleClick}>{text}
        </button>
    )
}
export default Button