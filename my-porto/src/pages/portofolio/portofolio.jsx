import { useState } from "react";
import html from "./../supports/porto/html-css.png";
import commerce from "./../supports/porto/e-commerce.png";


let Portofolio = () => {
  const [data, setData] = useState([
    {
      framework: "HTML-CSS",
      site: "Simple CV",
      url: "https://gilangramadhan.netlify.app/",
      image: html,
    },
    {
      framework: "React-Js",
      site: "e-commerce",
      url: "https://gilang-e-commerce.netlify.app",
      image: commerce,
    },
  ]);

  const [idxSelected, setIdxSelected] = useState(0);

  let onChange = (idx) => {
    setIdxSelected(idx);
  };

  let onMapping = () => {
    return data.map((value, index) => {
      return <div onClick={() => onChange(index)}>{value.framework}</div>;
    });
  };

  return (
    <>
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <div className="worked pt-[200px] flex-col sm:flex sm:justify-center">
          <div className="title pt-5 mx-[70px] items-center sm:flex sm:justify-center sm:items-center md:flex md:justify-center md:items-center lg:flex lg:justify-center lg:items-center my-secondary ">
            <h1 className="z-0">Websites i've been working on</h1>
          </div>
          <div className="parent flex items-center my-secondary justify-center text-xl ">
            <div className="sidebar basis-1/2 sm:basis-1/4">
              {
                // onMapping().
                data.map((value, index) => {
                  return (
                    <button
                      key={index}
                      onClick={() => onChange(index)}
                      className="my-secondary py-3"
                    >
                      {value.framework}
                    </button>
                  );
                })
              }
            </div>
            <div className=" basis-1/2 sm:basis-3/4">
              <div className="description flex justify-between items-center px-5 ">
                <p className="title">Title: {data[idxSelected].site}</p>
                <p className="desc">Using: {data[idxSelected].framework}</p>
              </div>
              <div className="images pr-2 ">
                <img
                  src={data[idxSelected].image}
                  className="w-[400px] h-auto sm:w-screen sm:h-auto md:w-screen md:h-auto lg:w-screen lg:h-[500px]"
                />
              </div>
              <div className="link flex flex-col justify-center items-center pt-4">
                <p>Visit the web in here</p>
                <a href={data[idxSelected].url}> {data[idxSelected].url} </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portofolio;
