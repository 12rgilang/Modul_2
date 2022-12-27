import 'tw-elements';
import image1 from './../supports/carousel/carousel1.jpeg'
import image2 from './../supports/carousel/carousel2.jpeg'
import image3 from './../supports/carousel/carousel3.jpeg'
import './../story/story.css'
import Quote from '../splashscreen/quote';


function Story() {

  return (
    <>
    <Quote />
    <div data-aos="zoom-in">
      <div
        id="carouselExampleCaptions"
        className="carousel slide relative pt-5"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            type="button"
            data-bs-target="#carouselCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouseleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner relative w-full overflow-hidden">
          <div className="carousel-item active relative float-left w-full">
            <img
              src={image1}
              className="block w-screen h-auto sm:w-fit sm:h-auto md:w-screen md:h-auto lg:w-screen lg:h-screen"
              alt="First Journey"
            />
            <div className="carousel-caption md:block absolute text-center">
              <h5 className="text-xl">Internship</h5>
              <p>
                Day 1 OJT being an Aircraft Mechanic
              </p>
            </div>
          </div>
          <div className="carousel-item relative float-left w-full">
            <img
              src={image2}
              className="block w-fit h-auto sm:w-fit sm:h-auto md:w-screen md:h-auto lg:w-screen lg:h-screen"
              alt="Living the Dream"
            />
            <div className="carousel-caption md:block absolute text-center">
              <h5 className="text-xl">Living the Dream</h5>
              <p>
                Working in the Field for 7 years
              </p>
            </div>
          </div>
          <div className="carousel-item relative float-left w-full">
            <img
              src={image3}
              className="block w-fit h-auto sm:w-fit sm:h-auto md:w-screen md:h-auto lg:w-screen lg:h-screen"
              alt="Career Changer"
            />
            <div className="carousel-caption md:block absolute text-center">
              <h5 className="text-xl">Next Journey</h5>
              <p>
                Decided to Stepping away from my Comfort zone, and learning to become a FullStack-Developer
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    </>
  );
}

export default Story;
