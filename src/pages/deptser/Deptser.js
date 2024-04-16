import React from "react";
import  { useEffect } from 'react';

import { Link } from "react-router-dom";
import "./Deptser.scss"

function Deptser() {
     useEffect(() => {
          const imgElement = document.getElementById('myImage');
          if (imgElement) {
              imgElement.style.width = '300px' ; 
              imgElement.style.height = '350px' ; 

          }
      }, []);
  return (
    <div>
      {" "}
     
     
      <div className="Deptser">
      <div className="btndoc">
 <Link to="/find-a-doctor" className="view-doctor">
    View Doctor
 </Link>
 </div>
        <div className="docbox">
       
        <img id="myImage" src="./img/doctorwall.jpg" alt="Description of the image" />
            
              
        </div>
       
       
       
       
       
      </div>
     
    </div>
  );
}

export default Deptser;

