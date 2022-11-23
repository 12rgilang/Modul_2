import react from "react";

class Card extends react.Component {
  render() {
    return (
      <>
        <div className="card" id="hobby">
          <div className="title">
            <h1>My Hobby</h1>
            <div className="line"></div>
          </div>
          <div className="card-1 hvr-bob">
            <div className="inside-card-1">
              <div className="icon-1">
                <p className="txt">Football</p>
                <i className="fas fa-futbol fa-3x">
                  <p>
                    One of the biggest sports in the world, football. Has long
                    piqued my curiosity.
                  </p>
                </i>
              </div>
            </div>
          </div>
          <div className="card-2 hvr-bob">
            <div className="inside-card-2">
              <div className="icon-2">
                <p className="txt">Gaming</p>
                <i className="fas fa-gamepad fa-3x">
                  <p>Wanna Play?</p>
                </i>
              </div>
            </div>
          </div>
          <div className="card-3 hvr-bob">
            <div className="inside-card-3">
              <div className="icon-3">
                <p className="txt">Reading</p>
                <i className="fas fa-book fa-3x">
                  <p>Scifi is the best thing you'll ever read.</p>
                </i>
              </div>
            </div>
          </div>
          <div className="card-4 hvr-bob">
            <div className="inside-card-4">
              <div className="icon-4">
                <p className="txt">Food</p>
                <i className="fas fa-utensils fa-3x">
                  <p>We need some nutritions arent we ?</p>
                </i>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Card;
