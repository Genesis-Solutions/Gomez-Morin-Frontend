import React from 'react'
import { useForm } from 'react-hook-form'
import { updateUser, deleteUser } from '../queries/query'
import { setUsers } from '../states/generalSlice'
import { useDispatch } from 'react-redux'

const Card = ({ user }) => {
  const { register, handleSubmit } = useForm()
  const dispatch = useDispatch()
  const onSubmit = async (data) => {
    const response = await updateUser(user._id, data)
    
    dispatch(setUsers(response))
  }

  const deleteQuery = async (id) => {
    const response = await deleteUser(id)
    console.log(id)

    dispatch(setUsers(response))
  }
  
  return (
    <li className='flex gap-3'>
      <h2>{ user.username }</h2>
      <form  onSubmit={handleSubmit(onSubmit)}>
        <input className='border-2 border-gray-400' {...register("username")} type="text"  />
        <button type='submit' className="p-[2px] border-2 border-black bg-slate-300">Update</button>
      </form>
      <button  className="p-[2px] border-2 border-black bg-slate-300" onClick={ () => {deleteQuery(user._id)} }>Delete</button>
    </li>
  )
}

export default Card