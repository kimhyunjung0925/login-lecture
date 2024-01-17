// "use strict"

// const express = require('express');
// const fetch = require('node-fetch');

// const app = express();
// const port = 3000;

// app.use(express.json());

// app.get('/api', async (req, res) => {
//     try {
//         const response = await fetch('http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=9fa444fb8d829f6d36d0d985d1dbf83d&targetDt=20120101');
//         const data = await response.json();

//         console.log("데이타", data);
//         res.json(data);
//     } catch (error) {
//         res.status(500).send('API 요청 중 오류 발생');
//     }
// });

// app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });
