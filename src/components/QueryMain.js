import React, { Component } from 'react'
import AgriQueries from './AgriQueries'
// import axios from "axios";

export default class QueryMain extends Component {
    articles = [
        {
            "Season": "NA",
            "Sector": "AGRICULTURE",
            "Category": "Others",
            "Crop": "Others",
            "QueryType": "Weather",
            "QueryText": "Farmer asked query on Weather",
            "KccAns": "TEST CALL",
            "StateName": "JAMMU AND KASHMIR",
            "DistrictName": "JAMMU",
            "BlockName": "SATWARI",
            "CreatedOn": "2024-07-18T06:01:48.403",
            "CallType": "SUCCESSFUL CALL",
            "Call_ID": "IN071820240600502769",
            "AgentLoginID": "Nikhet24998"
        },
        {
            "Season": "NA",
            "Sector": "NA",
            "Category": "NA",
            "Crop": "NA",
            "QueryType": "NA",
            "QueryText": "TEST CALL",
            "KccAns": "TEST CALL",
            "StateName": "MANIPUR",
            "DistrictName": "BISHNUPUR",
            "BlockName": "BISHNUPUR",
            "CreatedOn": "2024-07-18T06:02:18.803",
            "CallType": "SUCCESSFUL CALL",
            "Call_ID": "IN07182024060027546",
            "AgentLoginID": "Mainuddin25010"
        },
        {
            "Season": "NA",
            "Sector": "AGRICULTURE",
            "Category": "Others",
            "Crop": "Others",
            "QueryType": "Weather",
            "QueryText": "Farmer asked query on Weather",
            "KccAns": "मौसम का पूर्वानुमान आपके क्षेत्र में अगले चार-पांच दिनों में मौसम परिवर्तनशील रहेगा और बारिश होने की भी संभावना है और आंशिक रूप से बादल छाए रहेंगे। आज का अपेक्षित अधिकतम तापमान (36 डिग्री सेल्सियस और न्यूनतम तापमान 27 डिग्री सेल्सियस और हवा की गति 15-20 किलोमीटर प्रति घंटा) चलने की संभावना है। \n",
            "StateName": "HARYANA",
            "DistrictName": "JIND",
            "BlockName": "UCHANA",
            "CreatedOn": "2024-07-18T06:02:39.707",
            "CallType": "SUCCESSFUL CALL",
            "Call_ID": "IN071820240601214719",
            "AgentLoginID": "Nihal24948"
        },
        {
            "Season": "NA",
            "Sector": "AGRICULTURE",
            "Category": "Others",
            "Crop": "Others",
            "QueryType": "Government Schemes",
            "QueryText": "GOVERMENT SCHEME RELATED QUERY ",
            "KccAns": "डी. बी. टी. सेल मुख्यालय स्तर संपर्क सूत्र - 0612-2233555 संपर्क करने का समय सुबह 10:30 बजे से शाम 5 बजे तक (शनिवार, रविवार एवं अवकाश के दिन को छोड़ कर) ",
            "StateName": "BIHAR",
            "DistrictName": "PATNA",
            "BlockName": "PATNA SADAR",
            "CreatedOn": "2024-07-18T06:02:54.427",
            "CallType": "SUCCESSFUL CALL",
            "Call_ID": "IN071820240601012512",
            "AgentLoginID": "Kalpana25345"
        },
        {
            "Season": "NA",
            "Sector": "AGRICULTURE",
            "Category": "Pulses",
            "Crop": "Green Gram (Moong Bean/ Moong)",
            "QueryType": "Weather",
            "QueryText": "Farmer asked query on Weather",
            "KccAns": "आपके ब्लॉक में आगामी 5 दिनों में बारिश की विशेष संभावना नहीं है बूंदाबांदी हो सकती है  हवा की गति 13 किलोमीटर प्रति घंटे की रफ्तार से रहेगी\n",
            "StateName": "RAJASTHAN",
            "DistrictName": "NAGAUR",
            "BlockName": "NAGAUR",
            "CreatedOn": "2024-07-18T06:04:04.707",
            "CallType": "SUCCESSFUL CALL",
            "Call_ID": "IN071820240601334587",
            "AgentLoginID": "Bhartendu25124"
        }];
    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false
        }
    }

    async componentDidMount() {
        let url = 'https://dackkms.gov.in/Account/API/kkms_querydata_kcc.aspx?Date=07-18-2024';
        //let data = await fetch(url);

        // let data = await fetch(url, {
        //     method: 'GET',
        //     mode: 'cors',
        //     headers: {
        //         "Cache-Control": "no-cache",
        //         "Content-Type": "application/x-www-form-urlencoded",
        //         "Access-Control-Allow-Origin": "*",
        //     }
        // });



        let data = await fetch(url, {
            method: 'GET',
            mode: 'no-cors',
            headers: {
                "Cache-Control": "no-cache",
                "Content-Type": "application/x-www-form-urlencoded",
                "Access-Control-Allow-Origin": "*",
            }
        });

        console.log(data.json());
        // let parsedData = data.json();
        // console.log(parsedData);
    }

    render() {
        return (
            <div className="container my-3">
                {this.state.articles.map((element) => {
                    return <div className="rows" key={element.Call_ID}>
                        <AgriQueries title={element.QueryType} farmerQuery={element.QueryText}
                            kccAns={element.KccAns} />
                    </div>
                })}
            </div>
        )
    }
}
