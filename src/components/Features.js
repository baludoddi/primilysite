import React from 'react'
import PropTypes from 'prop-types'
import Slider from "react-slick";

import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export class FeatureGrid extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { features } = this.props;
    return (
  <div>
  <div className="row"><div className="col s12"><br></br></div></div>
  <div className="row"><div className="col s12"><br></br></div></div>
  <div className="row">
  <div className="col s1"></div>
    <div className="col s10">
    <div className="row">
      {/* {page.feature.featureBody.map((feature, index) => (
        <div className="col s3" key={index}>
          <div className="center-align feature-items">
            <div className="row">
              <div className="col s4"></div>
              <div className="col s3">
                <i className="Large material-iconss">{feature.icon}</i>
              </div>
            </div>
            <h5 className="">{feature.head}</h5>
            <p>{feature.description}</p>
          </div>
        </div>
      ))} */}
    </div>
    </div>
    <div className="col s1"></div>
  </div>
  <div className="row"><div className="col s12"><br></br></div></div>
  <div className="row"><div className="col s12"><br></br></div></div>
  <div className="row"><div className="col s12"><br></br></div></div>
</div>
)
    }

    }


export default FeatureGrid
