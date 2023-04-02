import {styled} from "@mui/material";

const FooterWrapper = styled('div')({
  width: '100%',
  minHeight: 60,
  backgroundColor: '#ccc',
})

const Footer = () => {
  return (
    <FooterWrapper><h2>This is footer</h2></FooterWrapper>
  )
}

export default Footer;