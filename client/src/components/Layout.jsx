import styled from "@emotion/styled"
import { widths, unit } from "../assets/styles"
import Header from "../components/Header"
const Layout = ({ fullWidth, children, grid }) => {
  return (
    <>
      <Header />
      <PageContaier fullWidth={fullWidth} grid={grid}>
        {children}
      </PageContaier>
    </>
  )
}

export default Layout

const PageContaier = styled.div(props => ({
  display: 'flex',
  justifyContent: props.grid ? 'center' : 'top',
  flexDirection: props.grid ? 'row' : 'column',
  flexWrap: 'wrap',
  alignSelf: 'center',
  flexGrow: 1,
  maxWidth: props.fullWidth ? null : `${widths.regularPageWidth}px`,
  width: '100%',
  padding: props.fullWidth ? 0 : unit * 2,
  paddingBottom: unit * 5,
}))