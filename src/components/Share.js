import React from 'react'
import '../css/Share.css'

function Share() {
     return (
       <div className="popShare-bg">
           <div className="popShare-container">
           <button className="popShare-close">X</button>
           <div className="popShare-title">
           <h1>Bagikan</h1>
           <div className="popShare-body">
            <input
          className="txtLinkCampaign"
          type="text"
          id="lcampaign"
          name="linkcampaign"
          placeholder="danepeduli.com/bantufikrah"
        />
        <button className="share-btnCopy">Saling Tautan</button>
        <p className="share-atau">Atau</p>
        <button className="share-btnShare">Bagikan Sebagai Agenpeduli</button>
        </div>
        </div>
        </div>
        </div>
    )
}

export default Share
