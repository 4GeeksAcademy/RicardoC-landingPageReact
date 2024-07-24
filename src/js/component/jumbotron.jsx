import React from "react";

const Jumbotron = () => {

    return (
        <div className="card col-lg-11 mt-3 border-0 bg-light" style={{height:"15rem", width:"-30px", marginLeft:"auto",marginRight:"auto"}}>
            <div className="card-body">
                <h1 className="card-title d-flex justify-content-start mt-2">A Warm Welcome!</h1>
                <p className="card-text d-flex justify-content-start mt-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum adipisci quo, ullam et accusantium nam cumque, laudantium, ab deleniti consequatur totam eaque minima. Consequuntur, fugit? </p>
                <a href="#" class="btn btn-primary mt-3">Call to action</a>
            </div>
        </div>
    );

}

export default Jumbotron;