import { useDispatch, useSelector } from "react-redux"
import { setUsers } from "./states/generalSlice"
import Card from "./components/Card"
import { useForm } from "react-hook-form"


function App() {
  const users = useSelector((state) => state.general.users)
  const dispatch = useDispatch()

  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className="w-full h-full ">
      <form className="flex flex-col w-1/6" onSubmit={ handleSubmit(onSubmit) }>
        <label htmlFor="username">Username: </label>
        <input className="border-2 border-gray-400" type="text" id="username" placeholder="Username" {...register("username")} />
        <label htmlFor="image">Image: </label>
        <input type="file" id="image" {...register("image")}/>
        <button
          className="p-1 border-2 border-black bg-slate-300 "
        >
          Enviar Usuario
        </button>
      </form>

      <div>|
      <ul>
        { users.map((user, id) => (
          <Card key={id} user={ user }/>
        )) }
      </ul>
      </div>
    </div>
  )
}

export default App
