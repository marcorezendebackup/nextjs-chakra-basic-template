import Document, { DocumentProps, Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document<DocumentProps> {
  render (): JSX.Element {
    return (
      <Html>
        <Head>

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;