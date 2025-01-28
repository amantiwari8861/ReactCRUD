import { createContext } from "react"
import AA from "./AA"

const data = {
    theme: "dark",
    bgColor: "#000000",
    textColor: "#ffffff"
}
const themeContext = createContext();

const ContextApi = () => {
    return (
        <div>
            <h1>ContextApi {JSON.stringify(data)}</h1>
            <themeContext.Provider value={data}>
                <AA />
            </themeContext.Provider>
        </div>
    )
}

export default ContextApi
export {themeContext}