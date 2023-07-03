import TopContainer from "./layout/TopContainer/TopContainer";
import { TripTypeContextProvider } from "./context/TripTypeContext"
import SearchForm from "./layout/SearchForm/SearchForm";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen"; import myImage10 from "./images/testimonial-6.jpg";
import myImage1 from "./images/intro-office.jpg"; import myImage11 from "./images/project-1.jpg";
import myImage2 from "./images/services-1.jpg"; import myImage12 from "./images/project-2.jpg";
import myImage3 from "./images/services-2.jpg"; import myImage13 from "./images/project-3.jpg";
import myImage4 from "./images/services-3.jpg"; import myImage14 from "./images/project-4.jpg";
import myImage5 from "./images/testimonial-1.jpg"; import myImage15 from "./images/project-5.jpg";
import myImage6 from "./images/testimonial-2.jpg"; import myImage16 from "./images/project-6.jpg";
import myImage7 from "./images/testimonial-3.jpg"; import myImage17 from "./images/project-7.jpg";
import myImage8 from "./images/testimonial-4.jpg"; import myImage18 from "./images/project-8.jpg";
import myImage9 from "./images/testimonial-5.jpg"; import myImage19 from "./images/logo.svg";
import './swiper.css'
import './styles.css'
import './bootstrap.css'
import './magnific-popup.css'
import './style.css.map'
import './voyage.css'


function App() {

  //prevent refresh & set searched pokemon name to lower case
  function handleSubmit(event: any) {
    event.preventDefault();
  }

  return (
    <><div className="spinner-wrapper">
      <div className="spinner">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
      </div>
    </div><nav className="navbar navbar-expand-md navbar-dark navbar-custom fixed-top">



        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-awesome fas fa-bars"></span>
          <span className="navbar-toggler-awesome fas fa-times"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#header">HOME <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#intro">INTRO</a>
            </li>
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#services">SERVICES</a>
            </li>
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#callMe">CALL ME</a>
            </li>
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#projects">PROJECTS</a>
            </li>


            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle page-scroll" href="#about" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">ABOUT</a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="terms-conditions.html"><span className="item-text">TERMS CONDITIONS</span></a>
                <div className="dropdown-items-divide-div"></div>
                <a className="dropdown-item" href="privacy-policy.html"><span className="item-text">PRIVACY POLICY</span></a>
              </div>
            </li>


            <li className="nav-item">
              <a className="nav-link page-scroll" href="#contact">CONTACT</a>
            </li>
          </ul>

        </div>
      </nav><header id="header" className="header">
        <div className="header-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="text-container">
                  <h1>Laissez-vous transporter par Omio
                  </h1>
                  <p className="p-heading p-large">TIC TAC TIC TAC TIC TAC TRIP</p>
                  <a className="btn-solid-lg page-scroll" href="#intro">DECOUVREZ</a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </header>

      <TripTypeContextProvider>

        <LoadingScreen />
        <form onSubmit={handleSubmit} className="Navbar-Container">
          <TopContainer />
          <SearchForm />
          <div className="AccomodationContainer">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            <span className="accomodationLabel">
              Find my accomodation
            </span>
          </div>
        </form>
      </TripTypeContextProvider><div id="intro" className="basic-1">

        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="text-container">
                <div className="section-title">INTRO</div>
                <h2>Nous offrons certains des meilleurs services de croissance d'entreprise en ville</h2>
                <p>Le lancement d'une nouvelle entreprise ou le développement de la position sur le marché d'une entreprise existante peut parfois être un processus assez écrasant.</p>
                <p className="testimonial-text">"Notre mission ici chez Omio est de vous aider à traverser ces moments difficiles en nous appuyant sur l'expertise de notre équipe dans le démarrage et la croissance d'entreprises."</p>
                <div className="testimonial-author">Abbad Mohamed - CEO</div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="image-container">
                <img className="img-fluid" src={myImage1} alt="alternative">
                </img></div>
            </div>
          </div>
        </div>

      </div><div id="services" className="cards-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">SERVICES</div>
              <h2>Choisissez le forfait de services qui répond à vos besoins</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">


              <div className="card">
                <div className="card-image">
                  <img className="img-fluid" src={myImage2} alt="alternative" />
                  <>  </></div>
                <div className="card-body">
                  <h3 className="card-title">Hors du sol Hors du sol</h3>
                  <p>Parfait pour les nouvelles idées ou les jeunes startups, ce package aidera à faire décoller l'entreprise</p>
                  <ul className="list-unstyled li-space-lg">
                    <li className="media">
                      <i className="fas fa-square"></i>
                      <div className="media-body">Environment et compétition</div>
                    </li>
                    <li className="media">
                      <i className="fas fa-square"></i>
                      <div className="media-body">Marketing plan</div>
                    </li>
                  </ul>
                  <p className="price">À partir de <span>$199</span></p>
                </div>
                <div className="button-container">
                  <a className="btn-solid-reg page-scroll" href="#callMe">DETAILS</a>
                </div>
              </div>

              <div className="card">
                <div className="card-image">
                  <img className="img-fluid" src={myImage3} alt="alternative" />
                </div>
                <div className="card-body">
                  <h3 className="card-title">Hors du sol Hors du sol</h3>
                  <p>Parfait pour les nouvelles idées ou les jeunes startups, ce package aidera à faire décoller l'entreprise</p>
                  <ul className="list-unstyled li-space-lg">
                    <li className="media">
                      <i className="fas fa-square"></i>
                      <div className="media-body">Environment et compétition</div>
                    </li>
                    <li className="media">
                      <i className="fas fa-square"></i>
                      <div className="media-body">Marketing plan</div>
                    </li>
                  </ul>
                  <p className="price">À partir de <span>$199</span></p>
                </div>
                <div className="button-container">
                  <a className="btn-solid-reg page-scroll" href="#callMe">DETAILS</a>
                </div>
              </div>

              <div className="card">
                <div className="card-image">
                  <img className="img-fluid" src={myImage4} alt="alternative">
                  </img></div>
                <div className="card-body">
                  <h3 className="card-title">Hors du sol Hors du sol</h3>
                  <p>Parfait pour les nouvelles idées ou les jeunes startups, ce package aidera à faire décoller l'entreprise</p>
                  <ul className="list-unstyled li-space-lg">
                    <li className="media">
                      <i className="fas fa-square"></i>
                      <div className="media-body">Environment et compétition</div>
                    </li>
                    <li className="media">
                      <i className="fas fa-square"></i>
                      <div className="media-body">Marketing plan</div>
                    </li>
                  </ul>
                  <p className="price">À partir de <span>$199</span></p>
                </div>
                <div className="button-container">
                  <a className="btn-solid-reg page-scroll" href="#callMe">DETAILS</a>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>

      <div >
        <div >
        </div>
        <div ></div>
      </div><div className="slider">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Lisez nos témoignages de clients</h2>
              <p className="p-heading">Nos clients sont nos partenaires et nous ne pouvons imaginer un avenir meilleur pour notre entreprise sans les aider à atteindre leurs objectifs</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">


              <div className="slider-container">
                <div className="swiper-container card-slider">
                  <div className="swiper-wrapper">


                    <div className="swiper-slide">
                      <div className="card">
                        <img className="card-image" src={myImage5} alt="alternative" />
                        <div className="card-body">
                          <div className="testimonial-text">WOOOOOOOOOOOOOW :OOO</div>
                          <div className="testimonial-author">Messi le meilleur - Fondatrice</div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="card">
                        <img className="card-image" src={myImage6} alt="alternative" />
                        <div className="card-body">
                          <div className="testimonial-text">I purchased the Growth Accelerator service pack a few years ago and I renewed the contract each year. </div>
                          <div className="testimonial-author">Marsha Singer - Marketer</div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="card">
                        <img className="card-image" src={myImage7} alt="alternative" />
                        <div className="card-body">
                          <div className="testimonial-text">Aria's CEO personally attends client meetings and gives his feedback on business growth strategies.</div>
                          <div className="testimonial-author">Roy Smith - Developer</div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="card">
                        <img className="card-image" src={myImage8} alt="alternative" />
                        <div className="card-body">
                          <div className="testimonial-text">At the beginning I thought the prices are a little high for what they offer but they over deliver each and every time.</div>
                          <div className="testimonial-author">Ronald Spice - Owner</div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="card">
                        <img className="card-image" src={myImage9} alt="alternative" />
                        <div className="card-body">
                          <div className="testimonial-text">I recommend Aria to every business owner or growth leader that wants to take his company to the next level.</div>
                          <div className="testimonial-author">Lindsay Rune - Manager</div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="card">
                        <img className="card-image" src={myImage10} alt="alternative" />
                        <div className="card-body">
                          <div className="testimonial-text">My goals for using Aria's services seemed high when I first set them but they've met them with no problems.</div>
                          <div className="testimonial-author">Ann Black - Consultant</div>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="swiper-button-next"></div>
                  <div className="swiper-button-prev"></div>


                </div>
              </div>

            </div>
          </div>
        </div>
      </div><div id="callMe" className="form-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="text-container">
                <div className="section-title">CONTACTEZ-NOUS</div>
                <h2 className="white">Demandez-nous de vous contacter en remplissant et en soumettant le formulaire</h2>
                <p className="white">Vous n'êtes qu'à quelques pas d'une offre personnalisée. Remplissez simplement le formulaire et envoyez-le nous et nous vous rappellerons immédiatement pour vous aider à décider quel forfait de services fonctionne.</p>

              </div>
            </div>
            <div className="col-lg-6">


              <form id="callMeForm" data-toggle="validator" data-focus="false">
                <div className="form-group">
                  <input type="text" className="form-control-input" id="lname" name="lname" required />
                  <label className="label-control" htmlFor="lname">Nom</label>
                  <div className="help-block with-errors"></div>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control-input" id="lphone" name="lphone" required />
                  <label className="label-control" htmlFor="lphone">Téléphone</label>
                  <div className="help-block with-errors"></div>
                </div>
                <div className="form-group">
                  <input type="email" className="form-control-input" id="lemail" name="lemail" required />
                  <label className="label-control" htmlFor="lemail">Email</label>
                  <div className="help-block with-errors"></div>
                </div>
                <div className="form-group">
                  <select className="form-control-select" id="lselect" required>
                    <option className="select-option" value="" disabled selected>IIntéressez par...</option>
                    <option className="select-option" value="Off The Ground">Du sol</option>
                    <option className="select-option" value="Accelerated Growth">Croissance accélérée</option>
                    <option className="select-option" value="Market Domination">La domination du marché</option>
                  </select>
                  <div className="help-block with-errors"></div>
                </div>
                <div className="form-group checkbox white">
                  <input type="checkbox" id="lterms" value="Agreed-to-Terms" name="lterms" required />J'accepte la <a className="white" href="privacy-policy.html">politique de confidentialité</a> et les <a className="white" href="terms-conditions.html">conditions générales</a>
                  <div className="help-block with-errors"></div>
                </div>
                <div className="form-group">
                  <button type="submit" className="form-control-submit-button">CONTACTEZ-NOUS</button>
                </div>
                <div className="form-message">
                  <div id="lmsgSubmit" className="h3 text-center hidden"></div>
                </div>
              </form>


            </div>
          </div>
        </div>
      </div><div id="projects" className="filter">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">PROJECTS</div>
              <h2>Nos meilleurs projects</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">

              <div className="button-group filters-button-group">
                <a className="button is-checked" data-filter="*"><span>MONTREZ TOUS</span></a>
                <a className="button" data-filter=".design"><span>DESIGNE</span></a>
                <a className="button" data-filter=".development"><span>DEVELOPMENT</span></a>
                <a className="button" data-filter=".marketing"><span>MARKETING</span></a>
                <a className="button" data-filter=".seo"><span>SEO</span></a>
              </div>
              <div className="grid">
                <div className="element-item development">
                  <a className="popup-with-move-anim" href="#project-1"><div className="element-item-overlay"><span>(㇏(•̀ᵥᵥ•́)ノ)</span></div><img src={myImage11} alt="alternative"></img></a>
                </div>
                <div className="element-item development">
                  <a className="popup-with-move-anim" href="#project-2"><div className="element-item-overlay"><span>B</span></div><img src={myImage12} alt="alternative"></img></a>
                </div>
                <div className="element-item design development marketing">
                  <a className="popup-with-move-anim" href="#project-3"><div className="element-item-overlay"><span>A </span></div><img src={myImage13} alt="alternative"></img></a>
                </div>
                <div className="element-item design development marketing">
                  <a className="popup-with-move-anim" href="#project-4"><div className="element-item-overlay"><span>T</span></div><img src={myImage14} alt="alternative"></img></a>
                </div>
                <div className="element-item design development marketing seo">
                  <a className="popup-with-move-anim" href="#project-5"><div className="element-item-overlay"><span>(㇏(•̀ᵥᵥ•́)ノ)</span></div><img src={myImage15} alt="alternative"></img></a>
                </div>
                <div className="element-item design marketing seo">
                  <a className="popup-with-move-anim" href="#project-6"><div className="element-item-overlay"><span>B</span></div><img src={myImage16} alt="alternative"></img></a>
                </div>
                <div className="element-item design marketing">
                  <a className="popup-with-move-anim" href="#project-7"><div className="element-item-overlay"><span>A</span></div><img src={myImage17} alt="alternative"></img></a>
                </div>
                <div className="element-item design marketing">
                  <a className="popup-with-move-anim" href="#project-8"><div className="element-item-overlay"><span> T</span></div><img src={myImage18} alt="alternative"></img></a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div><div id="project-1" className="lightbox-basic zoom-anim-dialog mfp-hide">
        <div className="row">
          <button title="Close (Esc)" type="button" className="mfp-close x-button">×</button>
          <div className="col-lg-8">
            <img className="img-fluid" src="./images/project-1.jpg" alt="alternative"></img>
          </div>
          <div className="col-lg-4">
            <h3>Online Banking</h3>
            <div className="line-heading">
              <h6>Strategy Development</h6>
              <p>Need a solid foundation for your business growth plans? Aria will help you manage sales and meet your current needs</p>
              <p>By offering the best professional services and quality products in the market. Don't hesitate and get in touch with us.</p>
              <div className="testimonial-container">
                <p className="testimonial-text">Need a solid foundation for your business growth plans? Aria will help you manage sales and meet your current requirements.</p>
                <p className="testimonial-author">General Manager</p>
              </div>
              <a className="btn-solid-reg" href="#your-link">DETAILS</a> <a className="btn-outline-reg mfp-close as-button" href="#projects">BACK</a>
            </div></div>
        </div>
      </div><div id="project-2" className="lightbox-basic zoom-anim-dialog mfp-hide">
        <div className="row">
          <button title="Close (Esc)" type="button" className="mfp-close x-button">×</button>
          <div className="col-lg-8">
            <img className="img-fluid" src="./images/project-2.jpg" alt="alternative">
            </img></div>
          <div className="col-lg-4">
            <h3>Classic Industry</h3>
            <div className="line-heading">
              <h6>Strategy Development</h6>
              <p>Need a solid foundation for your business growth plans? Aria will help you manage sales and meet your current needs</p>
              <p>By offering the best professional services and quality products in the market. Don't hesitate and get in touch with us.</p>
              <div className="testimonial-container">
                <p className="testimonial-text">Need a solid foundation for your business growth plans? Aria will help you manage sales and meet your current requirements.</p>
                <p className="testimonial-author">General Manager</p>
              </div>
              <a className="btn-solid-reg" href="#your-link">DETAILS</a> <a className="btn-outline-reg mfp-close as-button" href="#projects">BACK</a>
            </div>
          </div>
        </div>
      </div><div id="project-3" className="lightbox-basic zoom-anim-dialog mfp-hide">
        <div className="row">
          <button title="Close (Esc)" type="button" className="mfp-close x-button">×</button>
          <div className="col-lg-8">
            <img className="img-fluid" src="./images/project-3.jpg" alt="alternative">
            </img></div>
          <div className="col-lg-4">
            <h3>BoomBap Audio</h3>
            <div className="line-heading">
              <h6>Strategy Development</h6>
              <p>Need a solid foundation for your business growth plans? Aria will help you manage sales and meet your current needs</p>
              <p>By offering the best professional services and quality products in the market. Don't hesitate and get in touch with us.</p>
              <div className="testimonial-container">
                <p className="testimonial-text">Need a solid foundation for your business growth plans? Aria will help you manage sales and meet your current requirements.</p>
                <p className="testimonial-author">General Manager</p>
              </div>
              <a className="btn-solid-reg" href="#your-link">DETAILS</a> <a className="btn-outline-reg mfp-close as-button" href="#projects">BACK</a>
            </div></div>
        </div>
      </div><div id="project-4" className="lightbox-basic zoom-anim-dialog mfp-hide">
        <div className="row">
          <button title="Close (Esc)" type="button" className="mfp-close x-button">×</button>
          <div className="col-lg-8">
            <img className="img-fluid" src="./images/project-4.jpg" alt="alternative">
            </img></div>
          <div className="col-lg-4">
            <h3>Van Moose</h3>
            <div className="line-heading">
              <h6>Strategy Development</h6>
              <p>Need a solid foundation for your business growth plans? Aria will help you manage sales and meet your current needs</p>
              <p>By offering the best professional services and quality products in the market. Don't hesitate and get in touch with us.</p>
              <div className="testimonial-container">
                <p className="testimonial-text">Need a solid foundation for your business growth plans? Aria will help you manage sales and meet your current requirements.</p>
                <p className="testimonial-author">General Manager</p>
              </div>
              <a className="btn-solid-reg" href="#your-link">DETAILS</a> <a className="btn-outline-reg mfp-close as-button" href="#projects">BACK</a>
            </div></div>
        </div>
      </div></>
  );
}

export default App;
