import React from 'react'
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader'
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader'
import HomeFooter from '../Home/Home/HomeFooter/HomeFooter'

const PaediatricsNeonaology = () => {
  return (
    <div>
        <HomeHeader />
      <CommonPageHeader title={"Paediatrics & Neonaology"} subtitle={"Paediatrics & Neonaology"} />
      <div className="trauma-care-content">
        <p style={{fontSize:"17px"}}>Care of sick children has been one of the cornerstones in our planning and the centre delivers complete services for robust child health. We provide specialised support for children with development problems, infectious diseases, cancer, orthopaedics and genetic disorders.</p>

        <h3 style={{color:'skyblue'}}>Technology</h3>

        <ul>
            <li>The centre has dedicated Paediatric ICUs (PICU) and Neonatal ICUS (NICU) to provide special care to entically ill children and newborns. The centre is equipped with High Frequency Jet Ventilation (HFJV) for children with complex lung problems and Neonatal Transport Incubator to transfer critically ill babies to the hospital</li>
        </ul>

        <h3 style={{color:"skyblue"}}>Talent</h3>

        <h6>The centre has specialists in</h6>

        <ul>
            <li>Paediatric Infectious Diseases</li>
            <li>Paediatric Oncology</li>
            <li>Neonatal & Paediatric Critical Care</li>
            <li>Paediatric Surgery</li>
            <li>Paediatric Orthopaedics</li>
            <li>Paediatric Neurology</li>
        </ul>

      </div>
      <HomeFooter/>
    </div>
  )
}

export default PaediatricsNeonaology