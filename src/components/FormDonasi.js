import {React, useState} from 'react'
import BgHeader from '../images/bg-donasi.svg';
import icDurpay from '../images/ic-durpay.svg';
import '../css/FormDonasi.css'
import * as RiIcons from "react-icons/ri";
import {useHistory} from "react-router-dom"

function FormDonasi() {
    const [result, setResult] = useState("");

    const handleClick = (e) => {
    setResult(result.concat(e.target.name));
    }

    const history = useHistory();

    function handleClick1() {
      history.push("/confirmation");
    }

    function handleClick2() {
      history.push("/share");
    }

    return (
        <div className="form-donasi">
        <img src={BgHeader} alt="bgimage"/>
        <div className="hd-text-donasi"> Total Donasi / Sedekah Terkumpul</div>
        <div className="hd-nom-donasi"> Rp.200.000.000,-</div>

        <form>
        <h1 className="title">Mulai Berdonasi</h1>
        <p className="txtRate">Rp. |</p>
        <input
            className="txtNominal"
            type="text"
            id="fname"
            name="firstname"
            placeholder="Masukkan Nominal"
            value={result}
        ></input>

        <button className="nom1" onClick={handleClick} name="5000">
        5.000
        </button>

        <button className="nom2" onClick={handleClick} name="50000">
        50.000
        </button>

        <button className="nom3" onClick={handleClick} name="100000">
        100.000
        </button>

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

        <input
          className="txtRefCode"
          type="text"
          id="frefcode"
          name="refcode"
          placeholder="Kode Referal"
        />

        <p className="identity">Sembunyikan identitas (Hamba Allah)</p>    
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
        <div className="payment">
        <p>Payment powered by</p>
        <img src={icDurpay} alt="ic-durpay"/>
        </div>
        <button onClick={handleClick1} className="btnDonate">Donasi</button>
        <button onClick={handleClick2} className='btnShare'>
            <RiIcons.RiShareLine className="btnShare-icon"/>
        </button>
      </form>
    </div>
    )
}

export default FormDonasi
