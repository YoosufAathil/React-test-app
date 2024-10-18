import React from 'react'

const CardSection = () => {
  return (
    <section class="contact bg-success ">
      <div class="container ">
        <h2 class="text-white">
          We love new friends!
        </h2>
        <div class="row">
          <div class="col-4">
            <div class="card" style={{width: "18rem"}}>
              <img
                src="https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-success">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="card" style={{width: "18rem"}}>
              <img
                src="https://images.pexels.com/photos/3532544/pexels-photo-3532544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-success">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="card" style={{width: "18rem"}}>
              <img
                src="https://images.pexels.com/photos/2522663/pexels-photo-2522663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-success">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CardSection