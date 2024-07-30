import React from 'react'

export default function AgriKisanQueries(props) {
    let { sector, category, crop, queryType, queryText, kccAns, stateName, districtName, blockName, calldatedOn } = props;

    return (
        <div className="my-3">
            <div className="card">
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    right: '0'
                }
                }>
                    <span style={{marginTop:'-5px'}} className="badge rounded-pill bg-primary"> Sector: {sector}, Type: {queryType}, Crop: {crop} </span>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{category ? category : ''}:{queryText}  </h5>
                    <p className="card-text">{kccAns}</p>
                    <p className="card-text">
                        <small className="text-muted">Block:{blockName}, District:{districtName}, State: {stateName}, Date: {new Date(calldatedOn).toLocaleDateString()}</small>
                    </p>
                </div>
            </div>
        </div>
    )
}
