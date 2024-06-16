import { useState } from 'react'

function hex2rgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
     ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})`     
     : null;
}

function Converter() {
    const [rgb, setRgb] = useState('');
    const errorColor = 'rgb(201, 082, 064)';
    
    const changeColor = (e) => {
        const {value} = e.target;
  
        if (value.length === 7 && value[0] === '#' && hex2rgb(value)) {
            setRgb(hex2rgb(value));
            document.body.style.backgroundColor = value;
        } else {
            setRgb('Ошибка');
            document.body.style.backgroundColor = errorColor;
        }
    }
    return (
        <form className='converter'>
            <input 
                className='input' 
                type='text'
                onChange={changeColor} 
                maxLength={7} 
                placeholder='цвет в формате HEX'
            ></input>
            <div className='output'>
                {rgb}
            </div>
        </form>
    )
}

export default Converter