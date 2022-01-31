import styled from 'styled-components'

export const Layout = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;

  font-family: 'Open Sans', sans-serif;
  color: #221b21;
`

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  flex: 0 0 20%;
  border-right: 1px solid #3b413c;
  padding: 60px;
  background-color: #f1f9f8;

  h1 {
    text-align: center;
  }
`

export const Main = styled.main`
  flex: 1;
  background: #f3f6f6;
  padding: 60px;
  overflow-x: hidden;
`
