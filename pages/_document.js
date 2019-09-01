import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';

//서버사이드에서 단 1회만 로드한다.
//SPA에서 변경 할 수 없는 부분
//클라이언트단의 첫 진입점을 다루는 것은 _app.js


export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />    
           <link rel="stylesheet" 
                href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" 
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" 
                crossorigin="anonymous"/>
        </Head>
        <body>
          <div id="root">
            <Main />            
            <NextScript />
          </div>
        </body>
      </html>
    );
  }
}