import React from 'react'
import '../css/DaftarAgenpeduli.css'

function DaftarAgenpeduli() {
    return (
        <div className="daftar-agenpeduli">
        <div className="container-reg">
        <div className="about">
            <h4>Tentang Agenpeduli</h4>
            <p className="about-detail">
                Agenpeduli adalah program agen sosial yang diselenggarakan oleh Danapeduli dengan tujuan meningkatkan Sociopreneurship di Indonesia. Dengan menjadi Agenpeduli, kamu bisa turut berkontribusi sesama dan mendapatkan reward dari setiap donasi yang diberikan oleh orang lain dengan menyebarkan link refferal. Yuk daftar menjadi Agenpeduli!
            </p>
            </div>
            <div className="form-reg">
        <input
      className="txtRegName"
      type="text"
      id="fname"
      name="firstname"
      placeholder="Nama Lengkap"
    />

    <input
      className="txtRegEmail"
      type="text"
      id="fname"
      name="firstname"
      placeholder="Email"
    />

    <input
      className="txtRegNo"
      type="text"
      id="fname"
      name="firstname"
      placeholder="Nomor WhatsApp"
    />

    <input
      className="txtRegCity"
      type="text"
      id="fname"
      name="firstname"
      placeholder="Kota Tempat Tinggal"
    />

    <button class="btnReg">Daftar Menjadi AgenPeduli</button>
    <p className="atau">Atau</p>
    <a href="https://wa.wizard.id/7b0638">
    <button class="btnAsk">Tanya Cs Danapeduli</button>
    </a>
    </div>
    </div>
    </div>
    )
}

export default DaftarAgenpeduli
