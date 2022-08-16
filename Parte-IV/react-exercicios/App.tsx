import * as React from 'react';
import './style.css';
function Video() {
  return (
        <div className="videos">
          <div className="card-video-um">
            <div className=" thumbnail-um">
              <img className="" src="https://i.imgur.com/gHM47r1.jpg" alt="" />
            </div>
            <div className="detalhes-um">
              <div className="autor-um">
                <img
                  className=""
                  src="https://i.imgur.com/hfh2PQg.jpg"
                  alt=""
                />
              </div>
              <div>
                <div className="titulo-um">
                  <h3>Título do Video</h3>
                  <a href="">Canal do Video</a>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
}
export default function App() {
  const videos = new Array(12).fill('');
  return (
    <div className = "root">
       {videos.map((videos) => <Video />)};
    </div>
  ) 
}
