import React, { Component} from 'react';
import logo from '../ngoctrinh.jpg'; 
class TableContent extends Component {
  unhide_item(link){
    // alert(link);
    document.getElementById("hide_1").style.display="block";
    document.getElementById("video").src = link;
    // document.getElementsById('video').load();
    var video = document.getElementById('cvideo');
    video.load();
    video.play();
    
    // alert("unhide");
  }
    render(){
        return (
            <div className="table_content">
               
                {this.props.tb_dataJav.map(item=>(
                  <div className="item_content" value={item.stt}>
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
        )
    }
}
export default TableContent