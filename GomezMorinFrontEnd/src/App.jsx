import { useDispatch, useSelector } from "react-redux"
import { setUsers } from "./states/generalSlice"
import Card from "./components/Card"
import { useForm } from "react-hook-form"
import { createUser, readUsers } from "./queries/query"
import { useEffect } from "react"
import CardImage from "./components/CardImage"
import GalleryCard from "./components/GalleryCard"
import TextButton from "./components/TextButton"
import TextContainer from "./components/TextContainer"
import IconTitle from "./components/IconTitle"
import DropdownText from "./components/DropdownText"


import icon from './assets/flor.jpg'
import icon1 from './assets/icon.png'

function App() {
  const users = useSelector((state) => state.general.users)
  const dispatch = useDispatch()

  const { register, handleSubmit } = useForm()

  const icons = [icon1, icon];

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
    
    <div>
      
        <GalleryCard icons={icons}/>
        
        

    </div>
    
  )
}

export default App
