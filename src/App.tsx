import { ButtonColor } from './components/const.ts'
import { Button } from './components/button'

function App() {
  return (
    <>
      <Button text={'Hell World'} type={'largeFill'} color={ButtonColor.blue} />
      <Button text={'Hell World'} type={'regularFill'} color={ButtonColor.blue} />
      <Button text={'Hell World'} type={'regularLine'} color={ButtonColor.blue} />
    </>
  )
}

export default App
