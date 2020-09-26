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



class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      apiResponse:"",
      dataJav:[
        { stt: 1,
          name: "Maria Ozawa",
          // name: "Bùi Văn Tèo",
          image: "image1.com",
          comment: "xyz giỏi vl",
          link:["link1","link2","link3"]
        },
        { stt: 2,
          name: "Maria Ozawa",
          // name: "Bùi Văn Tèo",
          image: "image1.com",
          comment: "xyz giỏi vl",
          link:["link1","link2","link3"]
        },
        {
          stt: 3,
          name: "Maria Ozawa",
          // name: "Bùi Văn Tèo",
          image: "image1.com",
          comment: "xyz giỏi vl",
          link:["link1","link2","link3"]
        }
        ,
        { stt: 1,
          name: "Maria Ozawa",
          // name: "Bùi Văn Tèo",
          image: "image1.com",
          comment: "xyz giỏi vl",
          link:["link1","link2","link3"]
        },
        { stt: 2,
          name: "Maria Ozawa",
          // name: "Bùi Văn Tèo",
          image: "image1.com",
          comment: "xyz giỏi vl",
          link:["link1","link2","link3"]
        },
        {
          stt: 3,
          name: "Maria Ozawa",
          // name: "Bùi Văn Tèo",
          image: "image1.com",
          comment: "xyz giỏi vl",
          link:["link1","link2","link3"]
        },
        { stt: 1,
          name: "Maria Ozawa",
          // name: "Bùi Văn Tèo",
          image: "image1.com",
          comment: "xyz giỏi vl",
          link:["link1","link2","link3"]
        },
        { stt: 2,
          name: "Maria Ozawa",
          // name: "Bùi Văn Tèo",
          image: "image1.com",
          comment: "xyz giỏi vl",
          link:["link1","link2","link3"]
        },
        {
          stt: 3,
          name: "Maria Ozawa",
          // name: "Bùi Văn Tèo",
          image: "image1.com",
          comment: "xyz giỏi vl",
          link:["link1","link2","link3"]
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
  unhide_item= ()=>{
    document.getElementById("hide_1").style.display="block";
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
                <table>
                  <tr>
                    <th>Hạng</th>
                    <th>Diễn viên</th>
                    <th>Đánh giá chung</th>
                    <th>Top phim nổi bật</th>
                  </tr>
                  <tr>
                    <td>0</td>
                    <td>
                      <p>Mazia Ozawa <img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600"/></p>
                      
                    </td>
                    <td>Phim cũng bình thường thôi</td>
                    <td class="abc">
                      <p onClick={this.unhide_item} value="link">link 1</p>
                      <p>link 2</p>
                      <p>link 3</p>


                    </td>
                  </tr>
                  {this.state.dataJav.map(item =>(
                    <tr>
                      <td>{item.stt}</td>
                      <td>
                        <p className="image_idol">{item.name} <img src="https://img.onl/B9QLA7"  alt="Girl in a jacket" width="50px" height="50px"/></p>
                        
                      </td>
                      <td>{item.comment}</td>
                      <td class="abc">
                        
                        {item.link.map(item2=>(
                          <p onClick={this.unhide_item} value={item2}>{item2}</p>
                        ))}


                      </td>
                    </tr>
                  ))}
                </table>

              </div>
            </div>
          </div>
          <div className="hide_1" id="hide_1">
            
            <div className="hide_2">
            <div>
            <i className="fa fa-times" id="cancel_item" onClick={this.hide_item}></i>
            </div>
            <video controls autoPlay>
                <source src=""/>
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