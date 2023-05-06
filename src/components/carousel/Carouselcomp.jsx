import Carousel from 'react-bootstrap/Carousel';
import "./Carouselcomp.css"

function Carouselcomp() {
  return (
    <Carousel className='carousel' >
      <Carousel.Item style={{maxHeight:'30rem',height:'auto'}}>
        <img
          className="d-block w-100 carouselImg"
          src="assets/schoolimg/dps2.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="flex-column carouselText">
            <h3>Delhi Public School Chhatarpur</h3>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{maxHeight:'30rem',height:'auto'}}>
        <img
          className="d-block w-100 carouselImg"
          src="assets/schoolimg/mariamata.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <div className="flex-column carouselText">
            <h3>Maria Mata Convent School Chhatarpur</h3>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{maxHeight:'30rem',height:'auto'}}>
        <img
          className="d-block w-100 carouselImg"
          src="assets/schoolimg/sumati.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <div className="flex-column carouselText">
            <h3>Behs Sumati Academy Chhatarpur</h3>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carouselcomp;