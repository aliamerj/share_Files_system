import HomePage from "./pages/Home.page";
import { Route, Routes } from "react-router-dom";
import DownloadPage from "./pages/Download.page";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="/file/:fileId" element={<DownloadPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
