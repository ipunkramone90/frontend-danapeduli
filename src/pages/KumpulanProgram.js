import React from 'react'
import p1 from '../images/camp1.svg';
import Campaign from "../data/CampaignsData";

function KumpulanProgram() {
    return (
        <div className="kumpulan-program">
        {Campaign.map((Campaign, index) => (
            <div className="container-listprogram" key={Campaign._id}>
                <img  src={Campaign.image} alt={Campaign.title} className="image-listprogram"/>
                <div className ="titleP-format">
                <a href="/detailprogram">{Campaign.title}</a>
                <div className="titleP-list">
                <p className="txtValue-list">Target Donasi Tersalurkan</p>
                <p className="txtTot-list">{Campaign.target}</p>       
                </div>
                </div>      
                </div>
                ))}
        </div>
    )
}

export default KumpulanProgram
