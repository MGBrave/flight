import { useState } from 'react'
import { SiConsul } from 'react-icons/si'
import { AiOutlineGlobal } from 'react-icons/ai'
import { BsPhoneVibrateFill } from 'react-icons/bs'
import { CgMenuGridO } from 'react-icons/cg'
import logo from '../../assets/logo.png'

const Navbar = () => {

  // remove navBar on small screens
  const [active, setActive] = useState('navBarMenu');
  const showNavBar = () => {
    setActive('navBarMenu showNavBar');
  }
  const removeNavBar = () => {
    setActive('navBarMenu');
  }

  // add bgcolor on second nabVar
  const [noBg, addBg] = useState('navBarTwo');
  const addBgColor = () => {
    if (window.scrollY >= 10) {
      addBg('navBarTwo navbar_With_Bg');
    } else {
      addBg('navBarTwo')
    }
  }
  window.addEventListener('scroll', addBgColor)

  return (
    <div className='navBar flex'>
      <div className="navBarOne flex">
        <div>
          <SiConsul className='icon' />
        </div>

        <div className="flex">
          <li className='flex'><BsPhoneVibrateFill className='icon' />Suporte</li>
          <li className='flex'><AiOutlineGlobal className='icon' />Línguas</li>
        </div>

        <div className="atb flex">
          <span>Entrar</span>
          <span>Sair</span>
        </div>

      </div>

      <div className={noBg}>
        <div className="logoDiv">
          <img src={logo} className='logo' alt="logo" />
        </div>
        <div className={active}>
          <ul className="menu flex">
            <li onClick={removeNavBar} className="listItem">Início</li>
            <li onClick={removeNavBar} className="listItem">Sobre nós</li>
            <li onClick={removeNavBar} className="listItem">Ofertas</li>
            <li onClick={removeNavBar} className="listItem">Assentos</li>
            <li onClick={removeNavBar} className="listItem">Destinos</li>
          </ul>
          <button className='btn flex btnOne'>Contato</button>
        </div>

        <button className='btn flex btnTwo'>Contato</button>

        <div onClick={showNavBar} className="toggleIcon">
  <CgMenuGridO className='icon' />
        </div>
      </div>
    </div>
  )
}

export default Navbar
