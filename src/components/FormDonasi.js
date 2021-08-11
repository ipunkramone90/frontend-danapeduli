import {React, useState} from 'react'
import BgHeader from '../images/bg-donasi.svg';
import '../css/FormDonasi.css'
import * as RiIcons from "react-icons/ri";
import Share from '../components/Share'

function FormDonasi() {
    const [buttonPopup, setButtonPopup] = useState(false);

    const [result, setResult] = useState("");

    const handleClick = (e) => {
    setResult(result.concat(e.target.name));
    }
    return (
        <div className="form-donasi">
        <img src={BgHeader} alt="bgimage"/>
        <div className="hd-text-donasi"> Total Donasi / Sedekah Terkumpul</div>
        <h1 className="hd-nom-donasi"> Rp.200.000.000,-</h1>

        <form>
        <h1 className="title">Mulai Berdonasi</h1>
        <input
            className="txtNominal"
            type="text"
            id="fname"
            name="firstname"
            placeholder="RP |"
            value={result}
        />

        <button className="nom1" onClick={handleClick} name="5000">
        5.000
        </button>

        <button className="nom2" onClick={handleClick} name="50000">
        50.000
        </button>

        <button className="nom3" onClick={handleClick} name="100000">
        100.000
        </button>

        <select id="mPayment" name="mPayment" className="metodP">
          <option value="Dana">DANA</option>
          <option value="GoPay">GO-PAY</option>
          <option value="LinkAja">LinkAja</option>
          <option value="Ovo">OVO</option>
          <option value="ShopeePay">ShopeePay</option>
          <option value="BCA">BCA</option>
          <option value="Mandiri">Mandiri</option>
        </select>

        <input
          className="txtName"
          type="text"
          id="fname"
          name="fullname"
          placeholder="Nama Lengkap"
        />
        <input
          className="txtEmail"
          type="text"
          id="femail"
          name="email"
          placeholder="Email"
        />
        <p className="identity">Sembunyikan identitas (Hamba Allah)</p>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
        <button className="btnDonate">Donasi</button>
        <button className='btnShare' onClick={() => setButtonPopup(true)}>
            <RiIcons.RiShareLine className="btnShare-icon"/>
        </button>
        
        <Share trigger={buttonPopup} setTrigger={setButtonPopup}/>
      </form>
    </div>
    )
}

export default FormDonasi
