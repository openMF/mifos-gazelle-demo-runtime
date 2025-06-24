import { DemoList } from "@/pages/demo-list/DemoList"
import { DemoPage } from "@/pages/demo/demo-page"
import { Home } from "@/pages/Home"
import { Route, Routes } from "react-router-dom"

export const AppRoutes = ()=>{
    return(
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo-list/:product" element={<DemoList/>}/>
        <Route path="/demo/:id/:demo-title" element={<DemoPage/>}/>
    </Routes>
    )
}