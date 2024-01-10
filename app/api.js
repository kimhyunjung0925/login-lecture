
/*
const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = 3000;

// JSON 데이터를 처리할 수 있도록 설정합니다.
app.use(express.json());

app.get('/api', async (req, res) => {
    try {
        // 외부 API로의 GET 요청을 설정합니다.
        // 예시 URL을 사용했으며, 실제 사용할 API 주소로 대체해야 합니다.
        const response = await fetch('http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=9fa444fb8d829f6d36d0d985d1dbf83d&targetDt=20120101');
        
        // API 응답을 JSON 형식으로 변환합니다.
        const data = await response.json();

        console.log("데이타", data)
        // 변환된 데이터를 클라이언트에게 보냅니다.
        res.json(data);
    } catch (error) {
        // 오류 처리
        res.status(500).send('API 요청 중 오류 발생');
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
*/

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function News(){
	const [data, setData] = useState([]);
  	
  	useEffect(() => {
		const fetchData = async() => {
          const res = await fetch('http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=9fa444fb8d829f6d36d0d985d1dbf83d&targetDt=20120101');
          const result = res.json();
          
          console.log("데이타", result)

          return result;
        }	
        
        fetchData().then(res => setData(res));
    }, []);
  
  return (
    <div>
     	{data.map(d => (
                <Link key={d.id} to={`${d.id}`}>{d.title}</Link>
            ))}
    </div>
    )
}