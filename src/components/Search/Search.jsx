import { useEffect } from 'react'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { RiAccountPinCircleLine } from 'react-icons/ri'
import { RxCalendar } from 'react-icons/rx'

import Aos from 'aos'
import 'aos/dist/aos.css'

function Search() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div className="search section container">
      <div data-aos='fade-up' data-aos-duration='2500' className="sectionContainer">

        <div className="btns flex">
          <div className="singleBtn">
            <span>Econômica</span>
          </div>
          <div className="singleBtn">
            <span>Classe executiva</span>
          </div>
          <div className="singleBtn">
            <span>Primeira Classe </span>
          </div>
        </div>

        <div data-aos='fade-up' data-aos-duration='2000' className="searchInputs flex">
          <div className="singleInput flex">
            <div className="iconDiv">
              <HiOutlineLocationMarker className="icon" />
            </div>
            <div className="texts">
              <h4>Locação</h4>
              <input type="text" placeholder='Onde você gostaria de ir?' />
            </div>
          </div>
          <div className="singleInput flex">
            <div className="iconDiv">
              <RiAccountPinCircleLine className='icon' />
            </div>
            <div className="texts">
              <h4>Viajantes</h4>
              <input type="text" placeholder='Adicionar' />
            </div>
          </div>

          <div className="singleInput flex">
            <div className="iconDiv">
              <RxCalendar className='icon' />
            </div>
            <div className="texts">
              <h4>Check In</h4>
              <input type="text" placeholder='Data' />
            </div>
          </div>
          <div className="singleInput flex">
            <div className="iconDiv">
              <RxCalendar className='icon' />
            </div>
            <div className="texts">
              <h4>Check Out</h4>
              <input type="text" placeholder='Data' />
            </div>
          </div>
          <button className='btn btnBlock flex'>Pesquisar vôos</button>
        </div>
      </div>
    </div>
  )
}

export default Search
