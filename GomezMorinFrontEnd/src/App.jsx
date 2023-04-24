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
      <div className="grid grid-rows-3">
        {/*<GalleryCard icon1={icon} icon2={icon} icon3={icon}/>
        <TextButton text="Boton de Prueba" link="pornhub.com"/>*/}
        <div className="w-1/2 h-1/2">
          <IconTitle image={icon1} headerText="hola"/>
        </div>

        
        <DropdownText leftText="asdfasdfadsfadsfkasdnfjasdnfij asndfijasndo fjansdojfna osdjfnasjodnfoa o jsdnfoajsd nfajnsdifjansdiof jnasodojfasdfasdfadsfadsfk asdnfjasdnfijasndfijasndofj ansdojfnaosdjfnasjodnfoaojsdnf oajsdnfajnsdifjansdiofjnasodojf" rightText="asdfasdfadsfa dsfkasdnfjasdnfijasndfijas ndofjansdojfnaosd jfnasjodnfoaojsdnfo ajsdnfajnsdi fjansdiofjnas odojfasdfasdfa dsfadsfkasdnfjasdnfij asndfijasndofjansdojfnaosdjfna sjodnfoaojsdnfoajsdnfajnsdifjansdiofjnasodojf" headerIcon={icon1} headerText="Como Registrarse?"/>
      </div>

    </div>
    
  )
}

export default App
