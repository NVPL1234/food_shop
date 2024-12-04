import "./Slide.css"

export default function Slide() {
    return (
        <div id="demo" className="carousel slide mt-3" data-bs-ride="carousel">

            <div className="carousel-indicators">
                <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
            </div>

            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={require('../img/baongu.PNG')} alt="Los Angeles" className="d-block" />
                </div>
                <div className="carousel-item">
                    <img src={require('../img/baongu.PNG')} alt="Los Angeles" className="d-block" />        
                </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
            </button>
        </div>
    )
}