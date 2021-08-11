import React from 'react'
import DonaturList from '../components/DonaturList'
import FormDonasi from '../components/FormDonasi'
import c1 from '../images/camp1.svg';
import c2 from '../images/camp2.svg';
import c3 from '../images/camp3.svg';
import bgDaftar from '../images/bg-daftar.svg';
import m1 from '../images/img-mitra1.svg';
import m2 from '../images/img-mitra2.svg';
import m3 from '../images/img-mitra3.svg';
import m4 from '../images/img-mitra4.svg';
import m5 from '../images/img-mitra5.svg';
import m6 from '../images/img-mitra6.svg';
import m7 from '../images/img-mitra7.svg';
import m8 from '../images/img-mitra8.svg';

function Home() {
    return (
        <div className="home">
            <FormDonasi/>
            <br/>
            <div className="about">
            <h4>Tentang Danapeduli</h4>
            <p className="about-detail">
                Danapeduli adalah platform mobile untuk donasi online paling mudah, aman dan terpercaya di Indonesia. Titipkan donasi atau langsung donasi ke program-progam yang kamu inginkan. Terafiliasi dengan Relawan Siaga yang didirikan oleh Sandiaga Uno, Letjen (Purn) Agus Sutomo dan HMBC Rikrik Rizkiyana
            </p>
            </div>
            <br/>
            <DonaturList/>
            <br/>
            <div className="containerProgram">
            <h4>Program Danapeduli</h4>
                <div className="container-program">
                <img  src={c1} alt="c1" className="image-program"/>
                    <div className ="titleP">
                    <a href="/detailprogram">Selamatkan Anak Terlantar di Desa Rawageni</a>
                        <div className="titleP-detail">
                        <p className="txtValue">Target Donasi Tersalurkan</p>
                        <p className="txtTot">Rp 98.631.944</p>       
                        </div>
                    </div>
                </div>
                <div className="container-program">
                <img  src={c2} alt="c2" className="image-program"/>
                    <div className ="titleP">
                    <a href="/detailprogram">Selamatkan Anak Terlantar di Desa Rawageni</a>
                        <div className="titleP-detail">
                        <p className="txtValue">Target Donasi Tersalurkan</p>
                        <p className="txtTot">Rp 98.631.944</p>       
                        </div>
                    </div>
                </div>
                <div className="container-program">
                <img  src={c3} alt="c3" className="image-program"/>
                    <div className ="titleP">
                    <a href="/detailprogram">Selamatkan Anak Terlantar di Desa Rawageni</a>
                        <div className="titleP-detail">
                        <p className="txtValue">Target Donasi Tersalurkan</p>
                        <p className="txtTot">Rp 98.631.944</p>       
                        </div>
                    </div>
                </div>
            <div className="more-campaign">
            <a href="/kumpulanprogram">Lihat Semua Kampanye ➜</a>
            </div>
            </div>
            <br/>
             <div className="imagereg-container">
                <img src={bgDaftar} alt="bgDaftar"></img>
                <p className="imagereg-title">Yuk Jadi AgenPeduli</p>
                <p className="imagereg-text">Salurkan kepedulian orang-orang lewat uluran tangan kamu!</p>
                <a href="/daftaragenpeduli">Daftar Disini ➜</a>
            </div>
            <br/>
            <div className="listmitra">
            <h4>Mitra Kami</h4>
            <div className="row1">
            <div className="spaceLogo">
            <img src={m1} alt="Mitra1"/>
            </div>
            <div className="spaceLogo">
            <img src={m2} alt="Mitra2"/>
            </div>
            <div className="spaceLogo">
            <img src={m3} alt="Mitra3"/>
            </div>
            <div className="spaceLogo">
            <img src={m4} alt="Mitra4"/>
            </div>
            </div>
            <div className="row2">
            <div className="spaceLogo">
            <img src={m5} alt="Mitra5"/>
            </div>
            <div className="spaceLogo">
            <img src={m6} alt="Mitra6"/>
            </div>
            <div className="spaceLogo">
            <img src={m7} alt="Mitra7"/>
            </div>
            <div className="spaceLogo">
            <img src={m8} alt="Mitra8"/>
            </div>
            </div>
            </div>
            </div>
    )
}

export default Home
