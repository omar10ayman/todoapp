import Button from "../../resusableCom/Button"
const List=({taskArr,handleDelete,handleUpdate})=>{
    return(
        <div>
            {taskArr.map((e)=>{
                return(
                    <div className="container my-3 d-flex justify-content-between" key={e.id}>
                        {e.isDone===false ? <Button color={"success"} text={"Complete"} handleClick={()=>handleUpdate(e.id)} /> :<Button color={"success"} text={"Uncomplete"} handleClick={()=>handleUpdate(e.id)} />}
                        {e.isDone===false ? <h4 >{e.task}</h4> :<h4 ><del>{e.task}</del></h4>}
                        <Button color={"danger"} text={"Delete"} handleClick={()=>handleDelete(e.id)} />
                    </div>
                )
            })}
        </div>
    )
}
export default List