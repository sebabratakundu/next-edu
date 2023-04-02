import Head from "next/head";

const Header = ({children}) => {
  return (
    <Head>
      {children}
    </Head>
  )
}

export default Header;