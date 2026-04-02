import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Insights from "./pages/Insights";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Parent Route */}
        <Route path="/" element={<Layout />}>
          {/* Default page */}
          <Route index element={<Dashboard />} />

          {/* Other pages */}
          <Route path="transactions" element={<Transactions />} />
          <Route path="insights" element={<Insights />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
