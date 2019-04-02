import React, { Component } from 'react';
import './App.css';
import Header from './copmonents/Header/index';
import Footer from './copmonents/Footer/index';

class App extends Component {
  render() {
    const x={
      xOne:444,
      xTwo:950,
      xThree:866,
    };
    return (
      <div className="App">
        <Header/>
        <div id='main'>
          <span id='bread'>Logistic</span>
          <div id='three_blocks'>
            <div id='content_block' className="text_part">
              <h2>DELIVERY&LOGISTIC</h2>
              <hr className='line'/>
              <div className="text_place">
                <p>Packaging industry is a sector with complex logistic involving numerous participants and steps. Thus, for the buyer to be sure that his order is fulfilled in compliance with the time, geographical, and budgetary estimates, the OPN tracks all orders’ logistics and provides timely updates to all stakeholders about the order’s progress. Here you can track your order’s status by its ID, see what steps it went through and which steps are the next, and check whether the order’s logistics is in line with your contractual agreements.</p>
              </div>
            </div>

            <div id='content_block' className="partners_part">
              <h2>LOGISTIC PARTNERS</h2>
              <hr className='line'/>
              <div className="partners_part_images">
                <img src={require("./img/company.png")} alt="photo"/>
                <img src={require("./img/company.png")} alt="photo"/>
                <img src={require("./img/company.png")} alt="photo"/>
                <img src={require("./img/company.png")} alt="photo"/>
                <img src={require("./img/company.png")} alt="photo"/>
                <img src={require("./img/company.png")} alt="photo"/>
              </div>
            </div>

            <div id='content_block' className="pre-reg_part">
              <h2>PRE-REGISTRATION GEO OPTIONS</h2>
              <hr className='line'/>
              <div className="reg_part">
                <form>
                  <input placeholder='full name of organization' type="text"/>
                  <select >
                    <option>full name of organization</option>
                    <option>Пункт 2</option>
                  </select>
                  <select>
                    <option>full name of organization</option>
                    <option>Пункт 2</option>
                  </select>
                  <select>
                    <option>full name of organization</option>
                    <option>Пункт 2</option>
                  </select>
                  <select>
                    <option>full name of organization</option>
                    <option>Пункт 2</option>
                  </select>
                  <select>
                    <option>full name of organization</option>
                    <option>Пункт 2</option>
                  </select>
                  <button>SAVE FOR PROFILE</button>
                </form>
              </div>
            </div>

          </div>
          <div className="map_block">
            <p>DELIVERY&LOGISTIC GEOGRAPHIC</p>
            <div className="map_and_stuff">
              <div className="dropdown">
                <img style={{marginLeft:`${x.xOne}px`, marginTop:'304px'}} id='1' className='checker' src={require("./img/map_checker.png")} alt="photo"/>
                <div className='dropdown-content'>
                <div className="info">
                    <h2>sdfs sadfas</h2>
                    <p>sdafsad fsdafsda fj;lsdafa</p>
                    <img src={require('./img/company.png')} alt="company"/>
                  </div>
                </div>
              </div>
              <div className="dropdown">
                <img style={{marginLeft:`${x.xTwo}px`, marginTop:'304px'}} id='1' className='checker' src={require("./img/map_checker.png")} alt="photo"/>
                <div style={{marginLeft:`${x.xTwo+20}px`, marginTop:'304px'}} className='dropdown-content'>
                  <div className="info">
                    <h2>sdfs sadfas</h2>
                    <p>sdafsad fsdafsda fj;lsdafa</p>
                    <img src={require('./img/company.png')} alt="company"/>
                  </div>
                </div>
              </div>
              <div className="dropdown">
                <img style={{marginLeft:`${x.xThree}px`, marginTop:'104px'}} id='1' className='checker' src={require("./img/map_checker.png")} alt="photo"/>
                <div style={{marginLeft:`${x.xThree+20}px`, marginTop:'104px'}} className='dropdown-content'>
                <div className="info">
                    <h2>sdfs sadfas</h2>
                    <p>sdafsad fsdafsda fj;lsdafa</p>
                    <img src={require('./img/company.png')} alt="company"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Footer/> */}
      </div>
    );
  }
}

export default App;
