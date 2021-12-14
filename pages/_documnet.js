import Documnet,{ Html, Head, Main , NextScript} from 'next/document'
class MyDocument extends Documnet{
    render(){
        return(
            <Html lang="en">
                 <Head />
                 <body>
                     <Main />
                     <NextScript />
                 </body>
            </Html>
        )
    }
}
export default MyDocument