import React from 'react'
import SimpleCard from '../Cards/SimpleCard'
import './Category.css'

const Category = () => {
  return (
    <div className='mt-2 p-3 category-container'>
      <SimpleCard head={'Pre / Play Schools'}/>
      <SimpleCard head={'Schools'}/>
      <SimpleCard head={'Colleges & Universities'}/>
      <SimpleCard head={'Coachings'}/>
      <SimpleCard head={'Technical Institutes'}/>
      <SimpleCard head={'Software / IT Certifications'}/>
    </div>
  )
}

export default Category
