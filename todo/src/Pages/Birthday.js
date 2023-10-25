import React from 'react'
import Form from '../components/Form/Form'
import Todos from '../components/Todos/Todos'

export default function Birthday({selectedCategory}) {
  return (
    <>
    <Todos selectedCategory={selectedCategory} />
    </>
  )
}
