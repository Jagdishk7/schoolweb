import React from 'react'
import SimpleCard from '../Cards/SimpleCard'
import './Category.css'
import { Link } from 'react-router-dom'

const Category = () => {
  return (
    <div className='mt-2 p-3 category-container'>
      <Link to={'/allschools'}><SimpleCard head={'Pre / Play Schools'}/></Link>
      <Link to={'/allschools'}><SimpleCard head={'Schools'}/></Link>
      <Link to={'/allschools'}><SimpleCard head={'Colleges & Universities'}/></Link>
      <Link to={'/allschools'}><SimpleCard head={'Coachings'}/></Link>
      <Link to={'/allschools'}><SimpleCard head={'Technical Institutes'}/></Link>
      <Link to={'/allschools'}><SimpleCard head={'Software / IT Certifications'}/></Link>
    </div>
  )
}

export default Category
