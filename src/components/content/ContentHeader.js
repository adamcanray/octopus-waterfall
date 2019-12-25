import React from 'react'

const ContentHeader = () => {
  return (
    <div>
      <div id="carouselExampleCaptions" className="carousel slide d-none d-md-block" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active" data-interval="2000">
            <img src="/img/people-working-1.jpg" className="d-block w-100" alt="people-working" />
            <div className="carousel-caption d-none d-md-block">
              <h3>Octopus Waterfall</h3>
              <p>Adalah situs dimana kita bisa menemukan Quote keren dari orang-orang keren.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/img/people-working-2.jpg" className="d-block w-100" alt="people-working" />
            <div className="carousel-caption d-none d-md-block">
              <h3>Ayo Daftar!</h3>
              <p>Kamu bisa jadi salah satu dari orang-orang keren tersebut.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/img/people-working-3.jpg" className="d-block w-100" alt="people-working" />
            <div className="carousel-caption d-none d-md-block">
              <h3>Whooa!</h3>
              <p>Karena disini kamu bisa menulis Quote-mu sendiri.</p>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  )
}

export default ContentHeader
