import React from 'react'
import FSD from '../FSD/FSD'
import Cyber from '../Cyber/Cyber'
import DataScience from '../Datasciece/DataScience'

export const All = () => {
  return (
    <div className='d-flex flex-wrap justify-content-center my-3' style={{backgroundColor:"#fff7d5"}}>
          <FSD/>
          <Cyber/>
          <DataScience/>  
    </div>
  )
}
