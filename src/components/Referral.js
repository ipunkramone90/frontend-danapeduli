import React from 'react'

function Referral() {
    return (
        <div className="ref-container">
            <div className="ref-wrap">
            <h4>Masukan Kode Agenpeduli anda</h4>
            <br/>
           
                <input
                className="txtRefNumber"
                type="text"
                id="lref"
                name="referalnumber"
                placeholder="contoh: 00071"
                />
                <button className="ref-btnLink">Buat Link Referral Code</button>
                <br/>
                <h4>Tautan Anda</h4>
                <br/>
                <p>danapeduli.com/bantufikrah/s=00071</p>
                <br/>
                <button className="ref-btnCopy">Salin Tautan</button>
            
            </div>
        </div>
    )
}

export default Referral
