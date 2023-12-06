import React from "react";

const Main = () => {
    return (
        <>
            <div class="jumbotron jumbotron-fluid text-center mt-3">
                <div class="container">
                    <h1 class="display-4">Welcome Everyone</h1>
                    <p class="lead">This is a React project regarding on Animals living in world.</p>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 my-4">
                        <div className="card">
                            <img src="https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636_1280.jpg" className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Elephent</h5>
                                <p className="card-text">Elephants are the largest living land animals. Three living species are currently recognised: the African bush elephant, the African forest elephant, and the Asian elephant. They are the only surviving members of the family Elephantidae.</p>
                                <a href="#" className="btn btn-dark">Explore more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 my-4">
                        <div className="card">
                            <img src="https://cdn.pixabay.com/photo/2016/12/05/11/39/fox-1883658_640.jpg" className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Fox</h5>
                                <p className="card-text">Foxes are small to medium-sized, omnivorous mammals belonging to several genera of the family Canidae. They have a flattened skull, upright, triangular ears, a pointed, slightly upturned snout, and a long bushy tail.Fox is an most runner.</p>
                                <a href="#" className="btn btn-dark">Explore more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 my-4">
                        <div className="card">
                            <img src="https://cdn.pixabay.com/photo/2017/07/24/19/57/tiger-2535888_640.jpg" className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Tiger</h5>
                                <p className="card-text">The tiger (Panthera tigris) is the largest living cat species and a member of the genus Panthera. It is most recognisable for its dark vertical stripes on orange fur with a white underside.An apex predator, it primarily preys on ungulates.</p>
                                <a href="#" className="btn btn-dark">Explore more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 my-4">
                        <div className="card">
                            <img src="https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416_640.jpg" className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Dog</h5>
                                <p className="card-text">The dog (Canis familiaris[4][5] or Canis lupus familiaris[5]) is a domesticated descendant of the wolf. Also called the domestic dog, it is derived from extinct Pleistocene wolves,[6][7] and the modern wolf is the dog's nearest living relative.</p>
                                <a href="#" className="btn btn-dark">Explore more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Main;