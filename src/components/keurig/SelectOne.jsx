import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import styles from './selectOne.module.scss'
import {useFormik} from 'formik'

// image imports
import peetsImg from './images/peets.jpg'
import originalBlend from './images/original-blend.jpg'

const SelectOne = () => {
  const [keurigType, setKeurigType] = useState('Peets')


  return (
    <>
    <div className="back-link-wrapper">
        <Link to="/">
          <div className="back-link">Go back</div>
        </Link>
      </div>
      <Link to="/" ></Link>

<div className={styles.selectOneWrapper}>

      <p>From a group of icons, the user can only pick one icon.</p>
      <p>Will be implemented with HTML radio group?</p>
      <p>The current value is: {keurigType}</p>

      <fieldset>
        <legend>Select a cup:</legend>


<div className={styles.kcupWrapper}>

<div>
    <input type="radio" id="peets" name="keurigType" value="peets" onChange={(e) => setKeurigType("Peets")} checked={keurigType === 'Peets'}/>
    <label htmlFor="peets">
      <img src={peetsImg} className={styles.icon}/>
    </label>
  </div>

  <div>
    <input type="radio" id="originalBlend" name="keurigType" value="originalBlend" onChange={(e) => setKeurigType("Original Blend")} checked={keurigType === 'Original Blend'}/>

    <label htmlFor="originalBlend">
      <img src={originalBlend} className={styles.icon}/>

    </label>
  </div>
</div>

      </fieldset>
</div>

    
    
    </>
  )
}

export default SelectOne