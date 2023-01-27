import { createContext } from "react"

export interface RouteContextInferface {
    routeName: string,
    setRouteName: Function,
    mode: Color,
    setMode: Function
}
export enum Color {
    dark = 1,
    light = 2
}

export default createContext<RouteContextInferface>({
    routeName: "",
    setRouteName: () => { },
    mode: Color.dark,
    setMode: () => { },
})
