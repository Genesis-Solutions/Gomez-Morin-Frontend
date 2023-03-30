import { useDispatch, useSelector } from "react-redux"
import { setDarkMode, setText, setUsers } from "./states/generalSlice"

function App() {
  const dark = useSelector((state) => state.general.dark)
  const text = useSelector((state) => state.general.text)
  const users = useSelector((state) => state.general.users)

  const dispatch = useDispatch()


  return (
    <div className="w-full h-full">
      <h1>DarkMode: { dark ? "dark" : "light" }</h1>
      <h1>Text: { text }</h1>
      <h1>
      { users.map((user) => (
        `${user}, `
      )) }
      </h1>
      <button
        className="p-2 border-2 border-black"
        onClick={() => {
          dispatch(setDarkMode())
        }}
      >
        DarkMode
      </button>

      <button
        className="p-2 border-2 border-black"
        onClick={() => {
          dispatch(setText("Hola Mundo"))
        }}
      >
        Text
      </button>

      <button
        className="p-2 border-2 border-black"
        onClick={() => {
          dispatch(setUsers(["Miguel", "Flavio"]))
        }}
      >
        Users
      </button>
    </div>
  )
}

export default App
