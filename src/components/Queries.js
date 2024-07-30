
import React, { useEffect, useState } from 'react'
import AgriKisanQueries from './AgriKisanQueries'
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from './Spinner';

export default function Queries(props) {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [totalResults, setTotalResults] = useState(0)
  
    const url = `https://www.sdlifemarketing.in/api/KrishiSheel/getKCCData`; 

    const fetchData = async () => {
        try {
            props.setProgress(10);
            setLoading(true);
            const response = await fetch(url);
            props.setProgress(30);
            const json = await response.json();
            //console.log(json);
            setArticles(json);
            setTotalResults(json.totalResults);
            setLoading(false);
            props.setProgress(100);
        } catch (error) {
            console.log("error", error);
        }
    };

    useEffect(() => { 
        fetchData();
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <h1 className="text-center" style={{ margin: '3px 0px', marginTop: '5px' }}>Krishi - Kisan Call Center Queries</h1>
            <div className="container">
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    // next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner />}
                >
                    <div className="rows">
                        {articles?.map((element) => {
                            return <div className="rows" key={element.Call_ID}>
                                {<AgriKisanQueries
                                    sector={element.Sector ? element.Sector : ""}
                                    category={element.Category ? element.Category : ""}
                                    crop={element.Crop}
                                    queryType={element.QueryType}
                                    queryText={element.QueryText}
                                    kccAns={element.KccAns}
                                    stateName={element.StateName}
                                    districtName={element.DistrictName}
                                    blockName={element.BlockName}
                                    calldatedOn={element.CreatedOn}
                                />}
                            </div>
                        })}
                    </div>
                </InfiniteScroll>
            </div>
        </>
    )
}

// Queries.defaultProps = {
//     sector:'Agriculture',
//     category:'general',
//     crop:'Wheat',
//     queryType:'Weather',
//     queryText:'Weather in delhi',
//     kccAns:'Sunny weather in delhi',
//     stateName:'UP',
//     districtName:'Bulandshahr',
//     blockName:'Khurja',
// }


