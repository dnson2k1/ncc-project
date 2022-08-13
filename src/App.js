import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { publicRouter } from "./routers/routes";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {publicRouter.map((item, index) => {
            const Page = item.component;
            const Layout = MainLayout;

            return (
              <Route
                key={index}
                path={item.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
