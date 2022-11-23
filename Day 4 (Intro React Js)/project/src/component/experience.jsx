import work from "../assets/work.jpg";

let Experience = () => {
  return (
    <>
      <div className="porto" id="exp">
        <div className="title">
          <h1>Experience</h1>
          <div className="line"></div>
        </div>
        <div className="porto-inline">
          <div className="description">
            <div>
              <p>Aircraft Technician</p>
            </div>
            <div>2015 - 2022</div>
            <div className="text">
              Aircraft mechanics inspect mechanical, hydraulic and structural
              systems and diagnose malfunctions. They use power and hand tools
              (e.g. saws, grinders) to repair aircraft parts. For example, they
              fix broken wings and leaks. Aircraft mechanics also ensure
              compliance with aviation safety rules and regulations. UNDER
              SUPERVISED OF ENGINEER.
            </div>
          </div>

          <div className="image">
            <img
              src={work}
              alt="Technician"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
