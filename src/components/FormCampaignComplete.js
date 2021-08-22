import React from 'react'

function FormCampaignComplete() {
    return (
        <div className="form-complete">
        <h1 className="complete-title">Proyek ini telah selesai!</h1>
        <h1 className="complete-titleNom">Total Donasi Terkumpul</h1>
        <h1 className="complete-nominal">Rp. 96.000.000,-</h1>
        <a href="/kumpulanprogram">
        <button class="btnTelusuri">Telusuri program lainnya</button>
        </a>
        </div>
    )
}

export default FormCampaignComplete
