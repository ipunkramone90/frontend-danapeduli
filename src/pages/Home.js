import React from 'react'
import DonaturList from '../components/DonaturList'
import FormDonasi from '../components/FormDonasi'
import bgDaftar from '../images/bg-daftar.svg';
import m1 from '../images/img-mitra1.svg';
import m2 from '../images/img-mitra2.svg';
import m3 from '../images/img-mitra3.svg';
import m4 from '../images/img-mitra4.svg';
import m5 from '../images/img-mitra5.svg';
import m6 from '../images/img-mitra6.svg';
import m7 from '../images/img-mitra7.svg';
import m8 from '../images/img-mitra8.svg';
import Campaign from "../data/CampaignsData";

const Home = ({}) => {
    
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
                {Campaign.map((Campaign, index) => index < 3 &&  (
                    <div className="container-program" key={Campaign._id}>
                    <img src={Campaign.image} alt={Campaign.title} className="image-program"/>
                        <div className ="titleP">
                        <a href="/kumpulanprogram">{Campaign.title}</a>
                        <p className="txtValue">Target Donasi Tersalurkan</p>
                        <p className="txtTot">{Campaign.target}</p>
                        </div>
                    </div>
                  ))}
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
