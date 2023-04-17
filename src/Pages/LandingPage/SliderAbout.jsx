

import fondo from "../../assets/ilustraciones/fondo.jpg";
function SliderAbout() {
    return (
      <>
        <div className=" w-100  my-5 font">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner  ">
    <div class="carousel-item active">
      <img src={fondo} class="d-block w-100 espacios " style={{maxHeight:"94vh"}} alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={fondo} class="d-block w-100" style={{maxHeight:"94vh"}} alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={fondo} class="d-block w-100"  style={{maxHeight:"94vh"}} alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
      </>
    );
  }
  
  export default SliderAbout;