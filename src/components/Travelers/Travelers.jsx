import greece from '../../assets/greece.jpg'
import italia from '../../assets/italia.jpg'
import canada from '../../assets/canada.jpg'
import coreia from '../../assets/coreia.jpg'
import traveler1 from '../../assets/traveler1.jpg'
import traveler2 from '../../assets/traveler2.jpg'
import traveler3 from '../../assets/traveler3.jpg'
import traveler4 from '../../assets/traveler4.jpg'


const travelers = [
  {
    id: 1,
    destinationImage: greece,
    travelerImage: traveler1,
    travelerName: 'Paulo Heinn Junior',
    socialLink: '@junior45'
  },
  {
    id: 2,
    destinationImage: italia,
    travelerImage: traveler2,
    travelerName: 'Pietra Prado',
    socialLink: '@pietrap62'
  },
  {
    id: 3,
    destinationImage: canada,
    travelerImage: traveler3,
    travelerName: 'Henrique Plus',
    socialLink: '@henripl'
  },
  {
    id: 4,
    destinationImage: coreia,
    travelerImage: traveler4,
    travelerName: 'Paola Kim',
    socialLink: '@paola63'
  }
]

const Travelers = () => {
  return (
    <div className="travelers container section">
      <div className="sectionContainer">
        <h2>Top viajantes deste mês!</h2>

        <div className="travelersContainer grid">

          {
            travelers.map(({ id, destinationImage, travelerImage, travelerName, socialLink }) => {
              return (
                <div key={id} className="singleTraveler">
                  <img src={destinationImage} className="destinationImage" />
                  <div className="travelersDetails">
                    <div className="travelerPicture">
                      <img src={travelerImage} className='travelerImage' />
                    </div>
                    <div className="travelerName">
                      <span>{travelerName}</span>
                      <p>{socialLink}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }

        </div>
      </div>

    </div>
  )
}

export default Travelers
