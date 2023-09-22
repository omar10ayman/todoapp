import Button from "../../resusableCom/Button";
const Input =({type ,id ,value ,handleChange,handleClick})=>{
    return(
        <div className='container bg-secondary justify-content-center align-items-center  d-flex flex-column' style={{
            height:`350px`
        }} >
            <h1>ToDo App</h1>
            <label className="w-75" htmlFor={id}>Enter Your task</label>
            <input className="w-75" type={type} defaultValue={value} id={id} onChange={handleChange} />
            <br />
            <Button text="Add Task" handleClick={handleClick} color={"info"} />
        </div>
    )
}
export default Input;