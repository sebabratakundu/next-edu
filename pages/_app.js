import '@/styles/globals.css'
import {createTheme, ThemeProvider} from '@mui/material'
import {useEffect} from "react";
import {useRouter} from "next/router";
import NProgress from 'nprogress';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const theme = createTheme({
    palette: {
      mode: 'light'
    }
  });

  useEffect(() => {
    router.events.on('routeChangeStart', (d) => {
      NProgress.start();
    })

    router.events.on('routeChangeComplete', () => {
      NProgress.done();
    })
  }, [router])

  return <ThemeProvider theme={theme}><Component {...pageProps} /></ThemeProvider>
}
