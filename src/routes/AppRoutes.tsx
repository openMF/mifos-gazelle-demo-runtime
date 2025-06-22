import { DemoList } from "@/pages/demo/DemoList"
import { Home } from "@/pages/Home"
import { Route, Routes } from "react-router-dom"

export const AppRoutes = ()=>{
    return(
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demos/:product" element={<DemoList/>}/>
    </Routes>
    )
}