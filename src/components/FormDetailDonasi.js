import {React, useState} from 'react'
import * as RiIcons from "react-icons/ri";
import ModalShare from './ModalShare';

function FormDetailDonasi() {
    const [result, setResult] = useState("");

    const handleClick = (e) => {
    setResult(result.concat(e.target.name));
    }

    const [openShare,setOpenShare] = useState(false)
    
    return (
        <div className="card-detail">
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
            onChange={(result)=>this.inputChangedHandler(result)}
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
        <button className='btnShare' onClick={() => {setOpenShare(true)}}>
            <RiIcons.RiShareLine className="btnShare-icon"/>
        </button>
        {openShare && <ModalShare/>}
      </form>
        </div>
    )
}

export default FormDetailDonasi
