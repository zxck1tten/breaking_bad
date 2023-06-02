import styled from 'styled-components'

type Props = {
  result: string[]
}

const BreakingLogo = ({result}: Props) => {
  return (
    <Styles.Wrapper>
      <Styles.Text>{result[0]}</Styles.Text>
      {result[1] && <Styles.Element>{result[1]}</Styles.Element>}
      <Styles.Text>{result[2]}</Styles.Text>
    </Styles.Wrapper>
  )
}

const Styles = {

  Wrapper: styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 75px;
`,

  Element: styled.div`
    color: white;
    height: 100px;
    aspect-ratio: 1;
    background-color: #2D6C35;
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  Text: styled.div`
    color: #FDFEF5;
  `

}


export default BreakingLogo