import React from 'react'
import DonaturList from '../components/DonaturList'
import FormDetailDonasi from '../components/FormDetailDonasi';
import '../css/DetailProgram.css'
import p1 from '../images/camp1.svg';
import icWA from '../images/ic-whatsapp.svg';
import icVer from '../images/ic-verified.svg';
import campaigns from '../data/CampaignsData'

const DetailProgram = ({ match }) => {
    const campaign = campaigns.find((c) => c._id === match.params.id)
    
    const modal = document.querySelector('.modal');
    const previews = document.querySelectorAll(".image-program-detail img");

    previews.forEach((preview) => {
        preview.addEventListener("click",() => {
            modal.classList.add("open")
        })

    });


    return (
        <div className="detail-program">
        <div>{campaign.penerima}</div>
        <div className="containerdetaildonasi">
            <div className="container-detail-program">
                <div className="container-detail">
                <img  src={campaign.image} alt={campaign.title} className="image-program-detail"/>
                <div className="modal">
                <img src={p1} alt="" className="full-image"/>
                </div>
                    <div className ="titlePdetail">
                    <p>Selamatkan Anak Terlantar di Desa Rawageni</p>
                        <div className="titleP-detail-detail">
                                <p className="txtValue-detail">Target Donasi Tersalurkan</p>
                                <p className="txtTot-detail">Rp 98.631.944</p>       
                        </div>
                    </div>
                </div>
            </div>
            <FormDetailDonasi/>
            <br/>
            <div className="detail">
            <h4>Detail</h4>
                <p className="txt">
                    Odio in iaculis mauris, mattis lobortis posuere turpis porttitor dui. Volutpat pulvinar sed in non pharetra at. Tincidunt magna vel tempus neque. Pretium pellentesque dis etiam nibh fringilla quisque lorem. Ornare mattis feugiat eu aliquam scelerisque donec.
                </p>
            </div>
            <br/>
            <div className="container-dana">
                <p className="style-title">Penerima Dana</p>
                <div className="style-wrapper">
                <div className="style-wrapper-dt">
                <p className="style-name">Rahmat Suryana
                <img src={icVer} alt="ic-verified" />
                </p>
               
                <p className="style-status">Telah diverifikasi</p>
                </div>
                <img src={icWA} alt="ic-whatsapp" />
                </div>
            </div>
            <br/>
            <DonaturList/>
            <br/>
            <div className="list-update">
            <h4>Update Terbaru</h4>
            <br/>
            <p className="list-title">Penarikan Pembelian Sembako</p>
            <p className="list-date">17 Januari 2021</p>
            <p className="list-title">Penarikan Biaya Operasional</p>
            <p className="list-date">10 Januari 2021</p>
            <p className="list-title">Kami membelanjakan beberapa dana</p>
            <p className="list-date">9 Januari 2021</p>
            </div>
            </div>
        </div>
    )
}

export default DetailProgram