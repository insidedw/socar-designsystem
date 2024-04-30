import { Color } from './components/const.ts'
import { Button } from './components/button'

function App() {
  return (
    <>
      <Button text={'Hell World'} type={'largeFill'} color={Color.blue} />
      <Button text={'Hell World'} type={'regularFill'} color={Color.blue} />
      <Button text={'Hell World'} type={'regularLine'} color={Color.blue} />
    </>
  )
}

export default App
