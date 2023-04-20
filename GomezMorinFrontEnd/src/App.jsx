import { useDispatch, useSelector } from "react-redux"
import { setUsers } from "./states/generalSlice"
import Card from "./components/Card"
import { useForm } from "react-hook-form"
import { createUser, readUsers } from "./queries/query"
import { useEffect } from "react"
import MapContainer from "./components/MapContainer"
import CardImage from "./components/CardImage"
import GalleryCard from "./components/GalleryCard"
import TextButton from "./components/TextButton"
import icon from './assets/flor.jpg'

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
    
    <div >
        
    </div>
    
  )
}

export default App
