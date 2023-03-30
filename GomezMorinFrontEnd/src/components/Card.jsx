import React from 'react'
import { useForm } from 'react-hook-form'
import { updateUser } from '../queries/query'
import { setUsers } from '../states/generalSlice'
import { useDispatch } from 'react-redux'

const Card = ({ user }) => {
  const { register, handleSubmit } = useForm()
  const dispatch = useDispatch()
  const onSubmit = async (data) => {
    console.log(user._id + data)
    const response = await updateUser(user._id, data)
    
    dispatch(setUsers(response))
  }
  
  return (
    <li className='flex gap-3'>
      { user.username }
      <form  onSubmit={handleSubmit(onSubmit)}>
        <input className='border-2 border-gray-400' {...register("username")} type="text"  />
        <button type='submit' className="p-[2px] border-2 border-black bg-slate-300">Update</button>
      </form>
    </li>
  )
}

export default Card