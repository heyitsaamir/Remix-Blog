import styled from 'styled-components'

export const LogoContainer = styled.div`
  font-size: 2em;
  border-bottom: 5px solid #e7bb41;
  line-height: 76px;
  text-align: end;
  padding-inline-end: 25px;

  span {
    background: #c6e5fb;
  }
`

export const Logo = () => {
  return (
    <LogoContainer>
      <span>aamir j.</span>
    </LogoContainer>
  )
}
