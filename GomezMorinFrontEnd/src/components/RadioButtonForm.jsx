import React from 'react'
import RadioButton from './RadioButton'

const RadioButtonForm = ({ question, options }) => {
  return (
    <div className='w-full h-full flex flex-col'>
      <p className='font-semibold text-md py-1'>{ question }</p>
      { options.map((option, key) => (
        <RadioButton key={key} label={option.label} name={option.name} value={option.value} id={option.label}/>
      )) }
    </div>
  )
}

export default RadioButtonForm