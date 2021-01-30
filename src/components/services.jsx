import React, { Component } from "react";

export class Services extends Component {
  render() {
    return (
      <div id="services" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Areas de Atuação</h2>
            
          </div>
          <div className="row">
            {this.props.data
              ? this.props.data.map((d, i) => (
                  <div  key={`${d.name}-${i}`} className="col-md-4">
                    {" "}
                    <i className={d.icon}></i>
                    <h3>{d.name}</h3>
                    <div className="service-desc">
                      
                      <p>{d.text}</p>
                      <p>{d.text1}</p>
                      <p>{d.text2}</p>
                      <p>{d.text3}</p>
                      <p>{d.text4}</p>
                      <p>{d.text5}</p>
                      <p>{d.text6}</p>
                      <p>{d.text7}</p>
                      <p>{d.text9}</p>
                      


                    </div>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
