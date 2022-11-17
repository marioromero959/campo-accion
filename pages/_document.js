import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang='es'>
          <Head>
              <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" />
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link rel="preconnect" href="https://fonts.gstatic.com"/>
              <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@200&display=swap" rel="stylesheet" />
              <link href="https://fonts.googleapis.com/css2?family=Cinzel&family=Raleway:wght@200&display=swap" rel="stylesheet"></link>
          </Head>
          <body>
            <Main />
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossOrigin="anonymous"></script>
            <NextScript />
          </body>
        </Html>
      )
}