import React from 'react'
import '../css/Share.css'

function Share(props) {
     return (props.trigger) ? (
           <div className="popup-container">
           {props.children}
           <div className="popup-inner">
           <button className="popup-close" onClick={() =>props.setTrigger(false)}>close</button>
           <p className="share-title">Bagikan</p>
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
    ) : "";
}

export default Share
