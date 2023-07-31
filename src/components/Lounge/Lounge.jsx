import imageGrid from '../../assets/imageGrid.png'

const Lounge = () => {
  return (
    <div className="lounge container flex">
      <div className="sectionContainer grid">
        <div className="imgDiv">
          <img src={imageGrid} alt="" />
        </div>

        <div className="textDiv">
          <h2>Lounge para menores desacompanhados</h2>
          <div className="grids grid">

            <div className="singleGrid">
              <span className="gridTitle">
              Ajuda através do aeroporto
              </span>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum consectetur, nesciunt ipsam aliquam eius sint aperiam.</p>
            </div>

            <div className="singleGrid">
              <span className="gridTitle">
              Embarque prioritário
              </span>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum consectetur, nesciunt ipsam aliquam eius sint aperiam.</p>
            </div>

            <div className="singleGrid">
              <span className="gridTitle">
              Serviços de motorista
              </span>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum consectetur, nesciunt ipsam aliquam eius sint aperiam.</p>
            </div>

            <div className="singleGrid">
              <span className="gridTitle">
              Cuidados no Vôo
              </span>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum consectetur, nesciunt ipsam aliquam eius sint aperiam.</p>
            </div>

          </div>
        </div>



      </div>
    </div>
  )
}

export default Lounge
