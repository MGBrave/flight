import logo from '../../assets/logo.png'
import { BiLogoFacebook } from 'react-icons/bi'
import { FaTwitter } from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa'
import { AiFillYoutube } from 'react-icons/ai'
import { FaPinterestP } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="footer">
      <div className="sectionContainer container grid">
        <div className="gridOne">
          <div className="logoDiv">
            <img src={logo} className="Logo" />
          </div>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <div className="socialIcon flex">
            <BiLogoFacebook className='icon' />
            <FaTwitter className='icon' />
            <FaTiktok className='icon' />
            <AiFillYoutube className='icon' />
            <FaPinterestP className='icon' />
          </div>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Informações</span>
          <li>
            <a href="">Reservar</a>
          </li>
          <li>
            <a href="">Status do vôo</a>
          </li>
          <li>
            <a href="">Check-In</a>
          </li>
          <li>
            <a href="">Explorar</a>
          </li>
          <li>
            <a href="">Contato</a>
          </li>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Informações</span>
          <li>
            <a href="">Motoristas</a>
          </li>
          <li>
            <a href="">Nossos Parceiros</a>
          </li>
          <li>
            <a href="">Destinos</a>
          </li>
          <li>
            <a href="">Carreiras</a>
          </li>
          <li>
            <a href="">Regras</a>
          </li>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Guia Rápido</span>
          <li>
            <a href="">SAC</a>
          </li>
          <li>
            <a href="">Início</a>
          </li>
          <li>
            <a href="">Bagagem</a>
          </li>
          <li>
            <a href="">Mapa do vôo</a>
          </li>
          <li>
            <a href="">Nossas Comunidades</a>
          </li>
        </div>
      </div>
    </div>
  )
}

export default Footer
