import React from 'react'
import DonaturList from '../components/DonaturList'
import FormDetailDonasi from '../components/FormDetailDonasi';
import '../css/DetailProgram.css'
import p1 from '../images/camp1.svg';
import icWA from '../images/ic-whatsapp.svg';

function DetailProgram() {
    return (
        <div className="detail-program">
        <div className="containerdetaildonasi">
            <div className="container-detail-program">
                <div className="container-detail">
                <img  src={p1} alt="p1" className="image-program-detail"/>
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
                <div className="style-dana">
                <p className="style-title">Penerima Dana</p>
                <p className="style-name">Rahmat Suryana</p>
                <div className="style-status">
                <p >Telah diverifikasi</p>
                <img src={icWA} alt="ic-whatsapp" />
                </div>
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