import { useDispatch, useSelector } from "react-redux"
import { setUsers } from "./states/generalSlice"
import Card from "./components/Card"
import { useForm } from "react-hook-form"
import { createUser, readUsers } from "./queries/query"
import { useEffect } from "react"
import MapContainer from "./components/MapContainer"

function App() {
  const users = useSelector((state) => state.general.users)
  const dispatch = useDispatch()

  const { register, handleSubmit } = useForm()

  const onSubmit = async (data) => {
    const response = await createUser(data)

    dispatch(setUsers(response))
  }

  useEffect(() => {
    readUsers()
    .then((response) => {
      
      if (response) {
        dispatch(setUsers(response))
      }
    })
  }, [])

  return (
    <div className="w-full h-full ">
      <form className="flex flex-col w-1/6" onSubmit={ handleSubmit(onSubmit) }>
        <label htmlFor="username">Username: </label>
        <input className="border-2 border-gray-400" type="text" id="username" placeholder="Username" {...register("username")} />
        <label htmlFor="image">Image: </label>
        <input type="file" id="image" {...register("urlImg")}/>
        <button
          className="p-1 border-2 border-black bg-slate-300 "
        >
          Enviar Usuario
        </button>
      </form>

      <div>
        <ul>
          { users.map((user, id) => (
            <Card key={id} user={ user }/>
          )) }
        </ul>
      </div>
      <div>
        <MapContainer />
      </div>
    </div>
  )
}

export default App
