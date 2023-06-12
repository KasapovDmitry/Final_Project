import React, {useState} from 'react'

export default function Burger({change}) {
    const [openBtn, setOpenBtn] = useState(false);

    const changeClass = () => {
      setOpenBtn((openBtn) => !openBtn)
      change(openBtn)
    }

  return (
    <div className="burger__wrapper">
        <div
        onClick={changeClass}
        className={`burger-icon ${openBtn ? 'open' : ''}`}
        >
            <span></span>
        </div>
    </div>

    
  )
}
