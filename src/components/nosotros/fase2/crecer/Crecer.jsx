import React from "react";

import "./Crecer.css"

import crecer from "../../../../images/nosotros-img/crecer.svg"
import foto from "../../../../images/crecer-img/foto-talleres-presenciales.png"
import coheteTalleres from "../../../../images/crecer-img/cohete-talleres.svg"
import videoTablets from "../../../../images/crecer-img/video-tablet.svg"
import juego from "../../../../images/crecer-img/juego.svg"
import higiene from "../../../../images/crecer-img/higiene.svg"
import rutinas from "../../../../images/crecer-img/rutinas.svg"
import salud from "../../../../images/crecer-img/salud-nutricion.svg"
import desarrollo from "../../../../images/crecer-img/desarrollo-socioemocional.svg"
import cel from "../../../../images/crecer-img/cel-mensajeria.svg"
import spots from "../../../../images/crecer-img/spots.svg"
import star1 from "../../../../images/crecer-img/star-talleres.svg"
import playArriba from "../../../../images/crecer-img/play-icon.svg"
import starVideo from "../../../../images/crecer-img/start-video.svg"
import avioncito from "../../../../images/crecer-img/avioncito.svg"
import starRadio from "../../../../images/crecer-img/star-radio.svg"
import antena from "../../../../images/crecer-img/antena.svg"
import CarouselCrecerMobile from "./CarouselCrecerMobile";
import CarouselCrecerDesktop from "./CarouselCrecerDesktop";


const Crecer = () => {

    const width = window.innerWidth;
    const breakpoint = 769;


    return(
        <div className="fondo-azul animated fadeIn">
            <div className="fase2-crecer border-bottom-radius">
                <div className="fase2-crecer-title">
                    <div className="logo-crecer-img">
                        <img src={crecer} className="w-100 slide-in-left"></img>
                    </div>
                    <div>
                        <div className="fase2-probar">Fase 2 - Probar</div>
                        <div className="fase2-title  tracking-in-expand-fwd-top">Crecer mejor</div>
                    </div>
                </div>
                <div className="box-fase2-crecer">
                    <p className="p-mobile-blue mt-2">En el componente Crecer Mejor se diseñaron cuatro tipos de intervenciones basadas en evidencia y con el apoyo de experiencias nacionales e internacionales en el rubro: </p>
                </div>
                <div className="container carousel-crecer">
                    <div id="multi-item-example" className="carousel slide carousel-multi-item carousel-crecer" data-ride="carousel">
                <div className="controls-top controls-crecer">
                    <a className="btn-floating" href="#multi-item-example" data-slide="prev"><i className="fa fa-chevron-left"></i></a>
                    <a className="btn-floating" href="#multi-item-example" data-slide="next"><i className="fa fa-chevron-right"></i></a>
                </div>

                <ol className="carousel-indicators point-crecer">
                    <li data-target="#multi-item-example" data-slide-to="0" className="active"></li>
                    <li data-target="#multi-item-example" data-slide-to="1"></li>
                    <li data-target="#multi-item-example" data-slide-to="2"></li>
                    <li data-target="#multi-item-example" data-slide-to="3"></li>
                </ol>

                {width < breakpoint  ? <CarouselCrecerMobile /> : <CarouselCrecerDesktop />}

            </div>
        </div>

            </div>

            <div className="text-white box-azul-crecer">
                <div className="titulo-taller">
                <img src={coheteTalleres} className="cohete-taller-arriba"></img>
                    <img src={star1} alt="" className="star-talleres heartbeat"/>
                    <h5 >Talleres presenciales en DIT</h5>
                    <h6>(Desarrollo Infantil Temprano)</h6>
                </div>
                <div className="box-foto">
                    <img src={foto} className=""></img>
                    <p className="text-aguamarina">Integrar conceptos a través de una metodología práctica que invita a la reflexión y diálogo.</p>
                </div>
                <img src={coheteTalleres} className="cohete-taller"></img>
            </div>

            <div className="fondo-blanco box-blanco-crecer">
                <div className="titulo-taller">
                 <img src={playArriba} alt="" className="play-arriba"/>
                 <img src={starVideo} alt="" className="star-video heartbeat"/>
                    <h5>
                        Videos cortos sobre crianza a través de tablets
                    </h5>
                    <img src={playArriba} alt="" className="play-abajo"/>
                </div>
                <div className="box-videos">
                    <div>
                        <img src={videoTablets}className="tablet-imagen" ></img>
                    </div>
                    <div className="">
                        <p className="p-mobile-blue pt-4">Modelado de actividades para la mayor calidad y cantidad de interacciones de padres y cuidadores principales.</p>
                    </div>
                </div>
                <div className="box-circulos-videos">
                    <div className="circulos">
                        <img src={juego}></img>
                        Juego
                    </div>
                    <div className="circulos">
                        <img src={higiene}></img>
                        Higiene
                    </div>
                    <div className="circulos">
                        <img src={rutinas}></img>
                        Rutinas
                    </div>
                    <div className="circulos manzana-circulo">
                        <img src={salud}></img>
                        Salud y <br></br>Nutrición 
                    </div>
                    <div className="circulos nina-circulo">
                        <img src={desarrollo}></img>
                        Desarrollo<br></br> Socioemocional 
                    </div>
                </div>
                </div>

                <div className="fondo-celeste fondo-celeste-crecer">
                    <div className="titulo-taller">
                        <h5>Programa de mensajería de texto sobre crianza</h5>
                        <img src={avioncito} alt="" className="avioncito-girado "/>
                    </div>
                    <figure>
                        <img src={cel} className="celular-imagen"></img>
                    </figure>
                    <p>Contactar a los participantes y brindarles consejos de forma costo - eficiente</p>
                    <img src={avioncito} alt="" className="avioncito "/>
                </div>

                <div className="fondo-blanco box-spots">
                    <div className="titulo-taller">
                        <h5>Spots de radio</h5>
                        <img src={starRadio} alt="" className="starRadio"/>
                    </div>
                    <div className="box-spots-radio">
                        <figure>
                            <img src={spots}className="spots-img"></img>
                        </figure>
                        <div className="texto-radio">
                            <p className="p-mobile-blue">Anunciar actividades de la misma población, además de información y consejos de crianza.</p>
                        </div>
                    </div>
                    <img src={antena} alt="" className="antena wobble-ver-right"/>
                </div>
            

        </div>
    )
}

export default Crecer;