import React from 'react'
import DoctorCard from '../components/DoctorCard'

const DoctorList = (props) => {

  console.log(props)

  return(
    <div className="row">
      {props.docData.map((doctorInfo) => <DoctorCard key={doctorInfo.uid} doctorInfo={doctorInfo}/>)}
    </div>
  )
}

export default DoctorList;
