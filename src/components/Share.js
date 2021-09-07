import React from 'react'
import '../css/Share.css'

function Share() {
      return (
        <div className="share">
          <div className="container-share">
            <h4>Bagikan</h4>
            <br/>
            <div className="form-share">
            <input
              className="txtLinkCampaign"
              type="text"
              id="lcampaign"
              name="linkcampaign"
              placeholder="danepeduli.com/bantufikrah"
            />
            <button className="share-btnCopy">Salin Tautan</button>
            <p>Atau</p>
            <button className="share-btnShare">Bagikan Sebagai Agenpeduli</button>
            </div>
          </div>
        </div>
    )
}

export default Share
