import React, { Component} from 'react'
// import hide_item from  '../App';
// import titanic from '../videoplayback.mp4'

class Video extends Component {
    hide_item= ()=>{
        // alert("hide");
          document.getElementById("hide_1").style.display="none";
          var video = document.getElementById('cvideo');
          video.pause();
        
      }
    render(){
        return(
        <div className="hide_1" id="hide_1">
            
            <div className="hide_2">
            <div>
            <i className="fa fa-times" id="cancel_item" onClick={()=>this.hide_item()}></i>
            </div>
            <video id="cvideo" controls autoPlay>
                <source id="video" src="" controls/>
            </video>
            </div>
          </div>)
    }
}
export default Video