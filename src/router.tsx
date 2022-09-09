import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Blog } from "./pages/Blog";
import { Publication } from "./pages/Publication";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Blog />}/>
        <Route path="/publication" element={<Publication />}/>
      </Route>
    </Routes>
  )
}