import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
// import  Greet  from './components/Greet';
// import Welcome from './components/Welcome'
// import Message from './components/Message'
// import Counter from './components/Counter';
import logo from './ngoctrinh.jpg'; 



class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      apiResponse:"",
      dataJav:[
        { stt: 1,
          title: "big tits bên hoa huệ",
          dvd_id: "Jav123",
          release_date : "20 Sep 2020",
          content_id: "onsg00027",
          image: "https://www.flickr.com/photos/tapchianhdep/15703192727/sizes/l/",
          duration: 120,
          studio : "JAV studio",
          catagories: ["big tit","big ass","big pennis"],
          link:"link_1"
        },
        { stt: 2,
          title: "big tits",
          dvd_id: "Jav123",
          release_date : "20 Sep 2020",
          content_id: "onsg00027",
          image: "image1.com",
          duration: 120,
          studio : "JAV studio",
          catagories: ["big tit","big ass","big pennis"],
          link:"link_2"
        },
        { stt: 3,
          title: "big tits",
          dvd_id: "Jav123",
          release_date : "20 Sep 2020",
          content_id: "onsg00027",
          image: "image1.com",
          duration: 120,
          studio : "JAV studio",
          catagories: ["big tit","big ass","big pennis"],
          link:"link_1"
        },
        { stt: 4,
          title: "big tits",
          dvd_id: "Jav123",
          release_date : "20 Sep 2020",
          content_id: "onsg00027",
          image: "image1.com",
          duration: 120,
          studio : "JAV studio",
          catagories: ["big tit","big ass","big pennis"],
          link:"link_1"
        },
        { stt: 5,
          title: "big tits",
          dvd_id: "Jav123",
          release_date : "20 Sep 2020",
          content_id: "onsg00027",
          image: "image1.com",
          duration: 120,
          studio : "JAV studio",
          catagories: ["big tit","big ass","big pennis"],
          link:"link_1"
        },
        { stt: 6,
          title: "big tits",
          dvd_id: "Jav123",
          release_date : "20 Sep 2020",
          content_id: "onsg00027",
          image: "image1.com",
          duration: 120,
          studio : "JAV studio",
          catagories: ["big tit","big ass","big pennis"],
          link:"link_1"
        }
      ],
      link:"http://www.xvideos3.com/video25209901/amateur_with_natural_huge_tits_outdoor_fucking"
  };
  // this.handleClick= this.hide_item();
  }

  hide_item= ()=>{
    // alert("hide");
      document.getElementById("hide_1").style.display="none";
    
  }
  unhide_item(link){
    alert(link);
    document.getElementById("hide_1").style.display="block";
    document.getElementById("video").src = link;
    
    // alert("unhide");
  }

  callAPI(){
    fetch("http://localhost:9000/testAPI")
      .then(res =>res.text())
      .then(res => this.setState({apiResponse: res}));
  }

  
  // hide_item = (id_item) => {
  //   alert(1);
  //   // document.getElementById(id_item).style.display= 'block';
  // }

  componenWillMount(){
    // this.callAPI();
    
  }

  componentDidMount () {
    const script = document.createElement("script");

    script.src = "https://kit.fontawesome.com/a076d05399.js";
    script.async = true;

    document.body.appendChild(script);
    var time= new Date();
    var year = time.getFullYear();
    console.log(year);
    document.getElementById("year").innerHTML="Copyright " +time.getFullYear()+" by HoangNP";
    document.getElementById("update_time").innerHTML= time;


    
}
  
  render(){
    function ActionLink(){
        function hide_item(e) {
          // e.preventDefault();
          alert("1");
      }
    }
    return (
      <div className="App">
        
        {/* <Greet name="Nguyen Ta Thuong">
          <button>Like</button>
        </Greet>
        <Greet name="Đinh Thi Ngoc Mai"/>
        <Welcome name="Ahihi"></Welcome> */}

        {/* <Router>
          <div><Link to={'/abc'} className="nav-link">About</Link></div>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/contact' component={Contact} />
              <Route path='/abc' component={Message} />
          </Switch>
        </Router> */}
        
        <input type="checkbox" id="check"></input>
        <label htmlFor="check">
          <i className="fas fa-bars" id="btn"></i>
          <i className="fa fa-times" id="cancel"></i>
        </label>
        <div className="sidebar">
          <header> My App</header>
          
          <ul>
            <li><a href="/"><i className="fas fa-qrcode"></i>Dashboard</a></li>
            <li><a href="/about"><i className="fas fa-link"></i>Shortcuts</a></li>
            <li><a href="/dashboard"><i className="fas fa-stream"></i>Overview</a></li>
            <li><a href="#"><i className="fas fa-calendar-week"></i>Events</a></li>
            <li><a href="#"><i className="fas fa-question-circle"></i>About</a></li>
            <li><a href="#"><i className="fas fa-sliders-h"></i>Services</a></li>
            <li><a href="#"><i className="far fa-envelope"></i>Contact</a></li>
          </ul>

            
        </div>
        
        
        <section>
        <Router>
        <Switch>
              <Route exact path="/">
                <Home name="thưởng"/>
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
            </Switch>
        </Router>
        {/* <Message />
        <Counter /> */}
        {/* <p>{this.state.apiResponse}</p> */}

        <div className="container">
          <div>
            <div></div>
            <div>
              {/* <input type="search"></input> */}
            </div>
          </div>
          <div>
            <div className="content">
              <div className="head_content">
                <div>Ranking Top Jav Actors</div>
                <hr/>
                <div>
                  <div className="option_content">
                    <div>
                      <select>
                        <option value="20">Top 20 actor</option>
                        <option value="10" defaultChecked="checked">Top 10</option>
                      </select>
                    </div>
                    <div>
                      <p>Last update at:</p>
                      <p id="update_time"></p>
                    </div>
                  </div>
                </div>

              </div>
              <hr/>
              <div className="table_content">
               
                {this.state.dataJav.map(item=>(
                  <div className="item_content">
                    <div className="item_title">#{item.stt}: {item.title.charAt(0).toUpperCase() + item.title.slice(1)}</div>
                    <div className="image_item flex">
                      <div className="image flex">
                        <div className="bd_imagae">
                        <img src={logo} alt="anh" width="148px" height="152px"/>
                        </div>
                        <div>
                          <button className="preview_bt" value={item.link} onClick={() =>this.unhide_item(item.link)}>Preview</button>
                        </div>
                        
                      </div>
                      <div className="content_jav">
                        <p className="jav_elements">
                          <label className="thead">DVD ID: </label>
                          <label className="text_data">{item.dvd_id}</label>
                        </p>
                        <p className="jav_elements">
                          <label className="thead">Content ID: </label>
                          <label className="text_data">{item.content_id}</label>
                        </p>
                        <p className="jav_elements">
                          <label className="thead">Release Date: </label>
                          <label className="text_data">{item.release_date}</label>
                        </p>
                        <p className="jav_elements">
                          <label className="thead">Duration: </label>
                          <label className="text_data">{item.duration}</label>
                        </p>
                        <p className="jav_elements">
                          <label className="thead">Studio: </label>
                          <label className="text_data">{item.studio}</label>
                        </p>
                        <p className="jav_elements">
                          <label className="thead">Categories: </label>
                          <label className="text_data catalog">{item.catagories.map(cata=>(cata ))}</label>
                        </p>
                        
                      </div>
                    </div>
                    <hr/>
                  </div>
                  
                ))}
                

              </div>
            </div>
          </div>
          <div className="hide_1" id="hide_1">
            
            <div className="hide_2">
            <div>
            <i className="fa fa-times" id="cancel_item" onClick={this.hide_item}></i>
            </div>
            <video controls autoPlay>
                <source id="video" src=""/>
            </video>
            </div>
          </div>
          <div className="footer" id="year">
            
            
          </div>

        </div>
        </section>
        
      </div>

    )
  }
}

const Home = (props)=>{

  return (
      <div>
          <h1>Hello {props.name}</h1>
          {props.children}
      </div>
  
  )
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}








export default App;