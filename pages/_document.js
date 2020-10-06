import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    {/* etc */}
                    <link rel="icon" type="image/png" href="/assets/icon/favicon-32x32.png" sizes="32x32" />
                    <link rel="apple-touch-icon" href="/assets/icon/favicon-32x32.png" />

                    {/* CSS */}
                    <link rel="stylesheet" href="/assets/css/bootstrap-reboot.min.css" />
                    <link rel="stylesheet" href="/assets/css/bootstrap-grid.min.css" />
                    <link rel="stylesheet" href="/assets/css/owl.carousel.min.css" />
                    <link rel="stylesheet" href="/assets/css/jquery.mCustomScrollbar.min.css" />
                    <link rel="stylesheet" href="/assets/css/nouislider.min.css" />
                    <link rel="stylesheet" href="/assets/css/ionicons.min.css" />
                    <link rel="stylesheet" href="/assets/css/plyr.css" />
                    <link rel="stylesheet" href="/assets/css/photoswipe.css" />
                    <link rel="stylesheet" href="/assets/css/default-skin.css" />
                    <link rel="stylesheet" href="/assets/css/main.css" />

                    {/* JS */}
                    <script defer src="/assets/js/jquery.min.js"></script>
                    <script defer src="/assets/js/bootstrap.bundle.min.js"></script>
                    <script defer src="/assets/js/owl.carousel.min.js"></script>
                    <script defer src="/assets/js/jquery.mousewheel.min.js"></script>
                    <script defer src="/assets/js/jquery.mCustomScrollbar.min.js"></script>
                    <script defer src="/assets/js/wNumb.js"></script>
                    <script defer src="/assets/js/nouislider.min.js"></script>
                    <script defer src="/assets/js/jquery.morelines.min.js"></script>
                    <script defer src="/assets/js/plyr.min.js"></script>
                    <script defer src="/assets/js/photoswipe.min.js"></script>
                    <script defer src="/assets/js/photoswipe-ui-default.min.js"></script>
                    <script defer src="/assets/js/main.js"></script>

                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
