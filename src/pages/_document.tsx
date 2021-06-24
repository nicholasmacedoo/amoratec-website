import Document, { Html, Head, Main, NextScript } from 'next/document';
import { PixelFacebook } from '../components/utils/FacebookPixel';

export default class MyDocument extends Document {
    
    render() {
        return (
            <Html lang="pt-BR">
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700;900&display=swap" rel="stylesheet" />
                    <PixelFacebook />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}