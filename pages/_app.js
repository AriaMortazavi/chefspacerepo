import "./main.scss";
import "./LoginPage/LoginPage.scss"
import "./SignUpPage/SignUpPage.scss"
import LoginPage from "./LoginPage"
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return  <div>
  <Component {...pageProps}/> 
  </div>
}

export default MyApp