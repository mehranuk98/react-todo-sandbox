import { useContext, useState } from "react"
import TodoContext from "../../context/TodoContext"
import Swal from 'sweetalert2'


const CreateTodo = () => {

    const [title , setTitle] = useState('')
    const [loading,setLoading] = useState(false)
    const {addTodo} = useContext(TodoContext)

    const handleSubmit = async(e) => {
        e.preventDefault()
        if(title){
           setLoading(true)
           await addTodo(title)
           Swal.fire({
            icon: 'success',
            title: 'title has been added',
            toast:true,
            position:'top',
            timer : 3000,
            timerProgressBar:true
          })
           setLoading(false)
        }
    }

    return(
        <>
            <h4>Create Todo:</h4>
            <div className="col-md-12 f-flex align-items-center">
            <form onSubmit={(e) => handleSubmit(e)} className="row align-items-center">
                <div className="col-md-6">
                    <input className="form-control" onChange={(e) => setTitle(e.target.value)} type='text' placeholder="Enter a Todo"/>
                    <div className="form-text text-danger">
                        {title ? '' : 'Title is required!'}
                    </div>
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-dark">
                        Create
                        {loading && <div className="spinner-border spinner-border-sm ms-2"></div>}
                    </button>
                    
                </div>
            </form>
            </div>
        </>
    )
}

export default CreateTodo;