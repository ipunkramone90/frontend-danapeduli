import React from 'react'
import header from '../images/bg-confirm.svg'
import {useHistory} from "react-router-dom"

function Confirmation() {
    const history = useHistory();

    function handleClick() {
      history.push("/kumpulanprogram");
    }

    return (
        <div className="container-confirm">
            <img src={header} alt="bg-confirm" className="confirm-image"/> 
                <p className="confirm-title">Terimakasih SobatPeduli!</p>
                <p className="confirm-txt1">Silahkan cek email anda untuk melihat bukti donasi</p>
                <p className="confirm-txt2">Masih banyak orang yang butuh kepedulian kamu loh!</p>
                <p className="confirm-txt2">Yuk, temukan lebih banyak di Danapeduli.</p>
                <button onClick={handleClick} className="btnAllCampaign">Lihat Program Lainnya</button>
        </div>
    )
}

export default Confirmation
