import {React, useState} from 'react'
import '../css/FormDetailDonasi.css'
import * as RiIcons from "react-icons/ri";
import {useHistory} from "react-router-dom"
import icDurpay from '../images/ic-durpay.svg';

function FormDetailDonasi() {
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
        <div className="card-detail">
        <form>
        <h1 className="title-dt">Total Donasi Terkumpul</h1>
        <h1 className="nominal-dt">Rp. 96.000.000,-</h1>
        <p className="txtRate-dt">Rp. |</p>
        <input
            className="txtNominal-dt"
            type="text"
            id="fname"
            name="firstname"
            placeholder="Masukkan Nominal"
            value={result}
            onChange={(result)=>this.inputChangedHandler(result)}
        />

        <button className="nom1-dt" onClick={handleClick} name="5000">
        5.000
        </button>

        <button className="nom2-dt" onClick={handleClick} name="50000">
        50.000
        </button>

        <button className="nom3-dt" onClick={handleClick} name="100000">
        100.000
        </button>

        <input
          className="txtName-dt"
          type="text"
          id="fname"
          name="fullname"
          placeholder="Nama Lengkap"
        />

        <input
          className="txtEmail-dt"
          type="text"
          id="femail"
          name="email"
          placeholder="Email"
        />

        <input
          className="txtRefCode-dt"
          type="text"
          id="frefcode"
          name="refcode"
          placeholder="Kode Referal"
        />

        <p className="identity-dt">Sembunyikan identitas (Hamba Allah)</p>
        <label className="switch-dt">
          <input type="checkbox" />
          <span className="slider-dt round"></span>
        </label>
        <div className="payment-dt">
        <p>Payment powered by</p>
        <img src={icDurpay} alt="ic-durpay"/>
        </div>
        <button onClick={handleClick1} className="btnDonate-dt">Donasi</button>
        <button onClick={handleClick2} className='btnShare-dt'>
            <RiIcons.RiShareLine className="btnShare-dt-icon"/>
        </button>
      </form>
        </div>
    )
}

export default FormDetailDonasi
