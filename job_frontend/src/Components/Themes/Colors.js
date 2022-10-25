import React from 'react'
import { Gear,CheckCircleFill } from 'react-bootstrap-icons'
import {colors} from "../../data";
import { useGlobalContext } from '../../context';

const Colors = () => {
  const [themeColor] = useGlobalContext();
  return (
    <div className='theme'>
        <div className="colors">
            {colors.map((color) => <div key={color} className={`round bg-${color} my-3`}>h</div>)}
        </div>
        <div className="setting">
            <Gear size='30'/>
        </div>
    </div>
  )
}

export default Colors