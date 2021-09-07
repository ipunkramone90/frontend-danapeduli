import React from 'react'
import d1 from '../images/img-donatur1.svg';
import '../css/DonaturList.css';
import { donatur } from "../data/Donatur"

function DonaturList() {
    return (
      <div className="listDonatur">
        <h4>Donatur Terbaru</h4>
        {donatur.map((item,index) => index < 4 && (
        <div className="listDonatur1" key={item._id}>
        <div className="spaceDonatur">
          <img src={d1} alt="Avatar1"/>
      </div>  
      <div className="Donatur1">
        <p className="nDonatur1">{item.nama}</p>
        <p className="pDonatur1">{item.nominal}</p>
      </div>
      <p className="tDonatur1">{item.lastonline}</p>
    </div>
    ))}
    </div>  
    )
}

export default DonaturList
