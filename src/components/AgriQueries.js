import React, { Component } from 'react'


export default class AgriQueries extends Component {

    render() {

       let {title,farmerQuery,kccAns}=this.props;

        return (
            <div>
                <div className="my-3">
                    <div className="card">
                        <div style={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            position: 'absolute',
                            right: '0'
                        }
                        }>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{title}-{farmerQuery}</h5>
                            <p className="card-text">{kccAns}</p>
                            {/* <p className="card-text">
                                <small className="text-muted">For {stateName}, {districtName},{blockName}  on  {new Date(date).toGMTString()}</small>
                            </p> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

