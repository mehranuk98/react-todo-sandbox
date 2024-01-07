import { useContext, useState } from "react"
import TodoContext from "../../context/TodoContext"


const DeleteTodo = ({todoId}) => {


    const {removeTodo} = useContext(TodoContext)
    const [loading,setLoading] = useState(false)


    const handleDelete = async() =>{
        setLoading(true)
        await removeTodo(todoId)
        setLoading(false)
    }

    return(
        <>
           <i onClick={() => handleDelete()} className="bi bi-trash3-fill fs-6"></i>
           {loading && <div className="spinner-border spinner-border-sm ms-2"></div>}

        </>
    )
}

export default DeleteTodo;