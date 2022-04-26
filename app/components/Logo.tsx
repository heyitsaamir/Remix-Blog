import styled from 'styled-components'

export const LogoContainer = styled.div`
  font-size: 2em;
  border-bottom: 5px solid #e7bb41;
  line-height: 76px;
  text-align: end;
  padding-inline-end: 25px;

  span {
    font-family: 'Whisper', cursive;
  }
`

export const Logo = () => {
  return (
    <div className="w-full border-b-4 border-amber-400 text-center">
      <span className="text-3xl font-serif">aamir j.</span>
    </div>
  )
}
