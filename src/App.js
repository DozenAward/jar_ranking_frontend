import React,{Component} from 'react';
import $ from "jquery";
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
import TableContent from './components/TableContent';
import Video from './components/Video';
import logo from './ngoctrinh.jpg'; 
import titanic from './videoplayback.mp4';



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
          link:titanic
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
          link:titanic
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

  // hide_item= ()=>{
  //   // alert("hide");
  //     document.getElementById("hide_1").style.display="none";
    
  // }
  

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

    // const script2=document.createElement("script");
    // script2.src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js";
    // script2.async = true;
    // <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

    document.body.appendChild(script);
    // document.body.appendChild(script2);
    var time= new Date();
    var year = time.getFullYear();
    console.log(year);
    document.getElementById("year").innerHTML="Copyright " +time.getFullYear()+" by HoangNP";
    document.getElementById("update_time").innerHTML= time;


    $('.item_content').each(function(){
      if (parseInt($(this).attr('value')) > parseInt($('#select_option').val())) {
        $(this).hide()
      }

    });

    $(document).ready(function(){
        




        $('#select_option').change(function(){
          // alert($('#select_option').val());
          // document.get
          var range_id= $('#select_option').val();
          // $('item_content').attr('value') >=range_id;
          // alert(range_id);
            // $('item_content').parent.hide();
          $('.item_content').each(function(){
            // alert($(this).attr('value'));
            if (parseInt($(this).attr('value')) > parseInt(range_id)) {
              $(this).hide()
            }
            else{
              $(this).show()
            }
          });
        });
      });
    


    
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
        {/* <Router>
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
        </Router> */}
       

        <div className="container">
          
          <div>
            <div className="content">
              <div className="head_content">
                <div className="title_name">Ranking Top Jav Actors</div>
                <hr/>
                <div>
                  <div className="option_content">
                    <div>
                      <select id="select_option">
                        <option value="10" defaultChecked="checked">Top 10 Movie</option>
                        <option value="20">Top 20 Movie</option>
                      </select>
                    </div>
                    <div>
                      <p className="aqua">Last update at:</p>
                      <p id="update_time"></p>
                    </div>
                  </div>
                </div>

              </div>
              <hr/>
              <TableContent tb_dataJav={this.state.dataJav}/>
            </div>
          </div>
          <Video/>
          <div className="footer" id="year">
            Copyright @{this.time} by HoangNP
            
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







// export default this.hide_item;
export default App;