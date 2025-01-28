import { useContext } from "react"
import { themeContext } from "./ContextApi"

const EE = () => {

  const theme=useContext(themeContext)
  return (
    <div>
       <h1>EE {JSON.stringify(theme)}</h1>
    </div>

  )
}

export default EE