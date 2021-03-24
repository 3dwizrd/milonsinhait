import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import data from '../data';
// import User from './User';

class Home extends Component {
 

  state = {
    redirect: false
}
redirectHandler = () => {
    this.setState({ redirect: true })
    this.renderRedirect();
}
renderRedirect = () => {
    if (this.state.redirect) {
        return <Redirect to='/view-profile'/>
    }
}

    render() {
      
        return (
            <div>
              <div className="Toastify"></div>
                <div className="Toast1">
                <div className="Toast2" ></div>
                </div><div>
                <div className="page1">
                    <header>
                    <nav className="navbar  navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" 
                            data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="fa fa-align-justify"></span>
                        </button>
                        <a className="navbar-brand" href="#">
                            <img src="./assets/logo.dd7ce13b.png" 
                            alt="iProfile.io"/> <span>| Connecting Professionals&nbsp;</span>
                        </a>
                        </div>
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                  <div className="modalnav search_modal">
                    <div><a href="#" className="btn btn-outline">
                      <i className="fa fa-home"></i></a>
                      <a href="https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin" 
                      title="Join / Login to iprofile.io page" className="btn btn-outline linkedin"><i className="fa fa-linkedin">

                      </i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   Create your iProfile instantly with Linkedin</a>
                    </div>
                    <div id="hyper-modal-wrapper_component_id" className="hyperModalWrapper___2sZCR hyperr">
                      <div className="hyperDimmerWrapper___3pEXB "></div>
                      <div className="hyperModalContentWrapper___1o7Ug fullscreen"><div>
                        <div id="myOverlay" className="overlay">
                          <div className="overlay-content"><span>
                            <input type="text" placeholder="Search.." name="search" value=""/>
                            <button type="submit"><i className="fa fa-search"></i></button>
                          </span></div><div className="overlay-content userblock">
                            <div className="banner-section animated fadeInDown">
                              <div className="banner-box box-1"><div className="prof-pic">
                                <img src="./assets/6XqUe8sgcT.jpeg" alt=""/>
                              </div><div className="box-content">
                                <h3>Alex Ngari<span>Professional</span>
                                </h3>
                                <ul className="list-inline">
                                  <li title="Ask questions on this areas">General Topic</li>
                                </ul></div><div className="box-btn animated fadeIn">
                                  <a href="#" className="btn btn-success">Ask Question</a>
                                </div></div>
                                <div className="banner-box box-1">
                                  <div className="prof-pic">
                                    <img src="./assets/ILSYZCXZaz.jpeg" alt=""/>
                                  </div><div className="box-content">
                                    <h3>Rakesh PD<span>founder</span></h3>
                                    <ul className="list-inline"><li title="Ask questions on this areas">go</li>
                                      <li title="Ask questions on this areas">react</li>
                                      <li title="Ask questions on this areas">microservice</li>
                                    </ul></div>
                                    <div className="box-btn animated fadeIn">
                                      <a href="#" className="btn btn-success">Ask Question</a>
                                    </div></div>
                                    <div className="banner-box box-1">
                                      <div className="prof-pic">
                                        <img src="./assets/dP-Que0MHY.jpeg" alt=""/>
                                      </div>
                                      <div className="box-content">
                                        <h3>Sreedevi TK<span>Professional</span>
                                        </h3><ul className="list-inline"><li title="Ask questions on this areas">General Topic</li>
                                        </ul></div>
                                        <div className="box-btn animated fadeIn">
                                          <a href="#" className="btn btn-success">Ask Question</a>
                                        </div></div><div className="banner-box box-1">
                                          <div className="prof-pic">
                                            <img src="./assets/img1.jpg" alt=""/>
                                          </div>
                                            <div className="box-content"><h3>iProfile.io<span>iProfile content manager</span>
                                            </h3><ul className="list-inline">
                                              <li title="Ask questions on this areas">content management</li>
                                              <li title="Ask questions on this areas">SEO</li><li title="Ask questions on this areas">Data Analyst</li>
                                              <li title="Ask questions on this areas">CSS</li>
                                              <li title="Ask questions on this areas">Jquery</li>
                                              <li title="Ask questions on this areas">express</li>
                                            </ul></div>
                                            <div className="box-btn animated fadeIn">
                                              <a href="#" className="btn btn-success">Ask Question</a></div></div></div></div></div></div>
                                              <div data-name="close-icon" className="hyperCloseIconWrapper___ujoQX right top ">
                                                <i className="hyperCloseIcon___14vht"></i></div></div></div></div></ul></div></div></nav>
                                                <div className="container">
                        
                        
      <section>
        <div className="row">
          <div className="col-md-9">
            <h2 className="cyclicText">Are you a &nbsp;<span className="change_content"></span>
              {/* <div className="x0 x1 x2 ">
                <div className="textChng">
                  <div className="x0 x3 x4 x5 prof"><span>Professional ?
                  </span></div>
                </div>
             </div>  */}
            </h2>
        </div>
        <div className="col-md-3">
          <div className="banner-section animated fadeInDown">
            <div className="banner-box box-1">
              <span className="recent-account" title="Professional Badge">iProfile</span>
              <div className="prof-pic"><img src="./assets/img1.jpg" alt=""/>
              </div>
              <div className="box-content"><h3>iProfile.io<span>iProfile content manager</span></h3>
              </div>
              <div className="box-btn animated fadeIn"><button onClick={this.redirectHandler} href="#" className="btn btn-success">View Profile {this.renderRedirect()}</button>
              </div>
          </div>
        </div>
      </div>
      </div>
      
      </section>
                        


    <div className="row">
      
      <section className="banner-caption font-1 col-md-12">
        <h2>iProfile.io<strong>Innovative Solutions by Top-ranking professionals helping build a better world!</strong>
        </h2><hr/>
        <div className="clearfix">
          
        </div>
        <p>Peak into the minds of industry leaders, entrepreneurs and ranking
           specialists; connect with professionals, share knowledge 
           and create an online identity that will help you grow.
        </p>
      </section>
    
    </div></div></header><div className="clearfix"></div><main className="hidden1">
                          
                          
      <section className="tab-1">
        <div className="panel-tab-danger">
          <div className="container">
            <div className="row">
              <div className="panel-heading">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="active"><a href="#popular"
                   data-toggle="tab">Benefits</a>
                  </li>
                  <li><a href="#question" data-toggle="tab">New Question</a></li>
                  <li><a href="#trending" data-toggle="tab">Trending</a></li>
                </ul>
              </div>
          </div>
        </div>
      </div>
      <div className="panel-content panel-default">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="panel-body">
                <div className="tab-content">
                  <div className="tab-pane  active" id="popular">
                    <h3>Pellentesque vitae</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                     Sed corrupti esse incidunt blanditiis? Corporis iure, illo,
                     delectus nostrum iste ab deserunt error voluptas magni, 
                     quam sint dolorem recusandae ipsum pariatur!
                   </p>
                  </div>
                  <div className="tab-pane " id="question"><h3>Pellentesque vitaeaaa2</h3><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed corrupti esse incidunt blanditiis? Corporis iure, illo, delectus nostrum ecusandae ipsum pariatur!</p>
                  </div>
                  <div className="tab-pane " id="trending">
                    <h3>Pellentesque vitasse3</h3>
                    <p>Lorem ipsum, dolor sit amet te ab deserunt error voluptas magni, quam sint dolorem recusandae ipsum pariatur!
                    </p>
                  </div>
              </div>
            </div>
          </div></div>
      </div>
      </div>
      
      </section>
                          
                          
      <section className="banner-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-9"><h3>Recent Activity.</h3>
              <div className="row">
                <div className="col-md-6">
                  <div className="box-person">
                    <div className="box-person-content" style={{background: "url('./assets/img1.jpg')", backgroundSize: 'cover'}}>
                      <h3>Rosie George<span>Photographer</span></h3>
                    </div>
                  </div>
              </div>
             {data.activities.map((activity)=>(
              <div key={activity._id} className="col-md-6">
                <div className="row">
                  <div className="col-md-6 col-sm-6 col-xs-6">
                    <div className="box-person2 questionImg">
                      <div className="box-person-content">   <h3>{activity.name}<span>{activity.profession}</span></h3>
                      </div>
                   </div>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-6">
                  <div className="box-person2 questionImg">
                    <div className="box-person-content">
                    <h3>{activity.name}<span>{activity.profession}</span></h3>
                    </div>
                 </div>
               </div>
          
              </div></div>

           ))}
              
            </div>
          </div>
          <aside className="col-md-3">
            <h3><i className="fa fa-bell"></i>Recent Questions</h3>
            <ul className="list-unstyled">
              <li>
                <span className="questionImg"></span>
                <strong><h4>Mathew George<small>Co Founder</small></h4><p>Lorem ipsum dolor sit..</p></strong>
                <div className="date">27 May 2017</div>
              </li>

              <li><span className="questionImg"></span>
                <strong><h4>Mathew George<small>Co Founder</small></h4>
                  <p>Lorem ipsum dolor sit..</p>
                </strong>
                  <div className="date">27 May 2017</div></li>
                  <li><span className="questionImg"></span>
                    <strong><h4>Mathew George<small>Co Founder</small></h4><p>Lorem ipsum dolor sit..</p></strong>
                    <div className="date">27 May 2017</div>
                  </li>
            </ul>
          </aside>
        </div>
      </div>
      
      </section>


      
                          
                          
      <section className="featured">
        <div className="container">
          <div className="row">
            <div className="featured-box">
              <div className="col-md-3"><h4>Featured</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, perspiciatis.</p>
              </div>
              <div className="col-md-9">
                <div className="row">
                  <div className="col-md-4 col-sm-4 col-xs-4">
                    <div className="f-profile">
                      <img src="./assets/img1.jpg" alt=""/>
                    </div>
                    <div className="f-team"><h4>John Doe<span>Designer</span></h4>
                    </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-4">
                  <div className="f-profile">
                    <img src="./assets/img1.jpg" alt=""/>
                  </div>
                  <div className="f-team"><h4>John Doe<span>Designer</span></h4>
                  </div>
               </div>
               <div className="col-md-4 col-sm-4 col-xs-4">
                <div className="f-profile"><img src="./assets/img1.jpg" alt=""/>
                </div>
                <div className="f-team"><h4>John Doe<span>Designer</span></h4>
                </div>
               </div>
               <div className="col-md-4 col-sm-4 col-xs-4">
                <div className="f-profile">
                  <img src="./assets/img1.jpg" alt=""/>
                </div>
                <div className="f-team"><h4>John Doe<span>Designer</span></h4>
                </div>
               </div>
               <div className="col-md-4 col-sm-4 col-xs-4">
                <div className="f-profile">
                  <img src="./assets/img1.jpg" alt=""/></div>
                  <div className="f-team"><h4>John Doe<span>Designer</span></h4>
                  </div>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-4">
                <div className="f-profile">
                  <img src="./assets/img1.jpg" alt=""/></div>
                  <div className="f-team"><h4>John Doe<span>Designer</span></h4></div>
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
                          
                          
    <section className="bottom-slider">

      <div className="container">
        <div className="row"><div>
          <div className="col-md-12">
          <div class="carousel slide media-carousel" id="media">
              <div className="carousel-inner">
                
                <div className="item  active">
                  <div className="row">
                    <div className="col-md-2 col-sm-2 col-xs-6">
                      <img src="./assets/img1.jpg" alt="first slide"/><span>
                        <img src="./assets/grove.png" alt=""/></span>
                    </div>
                    <div className="col-md-2 col-sm-2 col-xs-6">
                      <img src="./assets/img2.jpg" alt=""/><span>
                        <img src="./assets/grove.png" alt=""/></span>
                    </div>
                    <div className="col-md-2 col-sm-2 col-xs-6">
                      <img src="./assets/img1.jpg" alt=""/><span>
                        <img src="./assets/grove.png" alt=""/></span>
                    </div>
                    <div className="col-md-2 col-sm-2 col-xs-6">
                      <img src="./assets/img1.jpg" alt=""/><span>
                        <img src="./assets/grove.png" alt=""/></span>
                    </div>
                    <div className="col-md-2 col-sm-2 col-xs-6">
                      <img src="./assets/img1.jpg" alt=""/><span>
                        <img src="./assets/grove.png" alt=""/></span>
                    </div>
                    
                </div>
              </div>
              <div className="item">
                <div className="row">
                  <div className="col-md-2 col-sm-2 col-xs-6">
                    <img src="./assets/img2.jpg" alt=""/><span>
                      <img src="./assets/grove.png" alt=""/></span>
                  </div>
                  <div className="col-md-2 col-sm-2 col-xs-6">
                    <img src="./assets/img2.jpg" alt=""/><span>
                      <img src="./assets/grove.png" alt=""/></span>
                  </div>
                  <div className="col-md-2 col-sm-2 col-xs-6">
                    <img src="./assets/img1.jpg" alt=""/><span>
                      <img src="./assets/grove.png" alt=""/></span>
                  </div>
                      <div className="col-md-2 col-sm-2 col-xs-6">
                        <img src="./assets/img1.jpg" alt=""/><span>
                          <img src="./assets/grove.png" alt=""/></span>
                      </div>
                          <div className="col-md-2 col-sm-2 col-xs-6">
                            <img src="./assets/img1.jpg" alt=""/><span>
                              <img src="./assets/grove.png" alt=""/></span>
                          </div>
                          <div className="col-md-2 col-sm-2 col-xs-6">
                            <img src="./assets/img1.jpg" alt=""/><span>
                              <img src="./assets/grove.png" alt=""/></span>
                          </div>
              </div>
            </div>
            </div><a data-slide="prev" href="#" className="left carousel-control" role="button" data-slide="prev">‹</a><a data-slide="next" href="#carouselExampleControls" className="right carousel-control" role="button" data-slide="next">›</a>
          </div>
        </div></div>
      </div>
    </div>
    </section>
                        
</main></div></div>
            </div>
        );
    }
}

export default Home;