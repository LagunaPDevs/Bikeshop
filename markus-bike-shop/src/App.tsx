// project imports
import Locales from "./components/Locales";
import Dashboard from "./layout/Dashboard/DashboardLayout";
import RulesList from "./pages/RulesPage";
import AddRule from "./pages/AddRule";

// routing
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import {
  addRulePath,
  bikeCreator,
  rootPath,
  rulesPath,
} from "./utils/constants/route_constants";
import BikeCreator from "./pages/BikeCreator";

function App() {
  return (
    <>
      <BrowserRouter>
        <Locales>
          <Routes>
            <Route path={rootPath} element={<Dashboard />}>
              <Route index element={<Navigate replace to={rulesPath} />} />
              <Route path={rulesPath} element={<RulesList />} />
              <Route path={addRulePath} element={<AddRule />} />
              <Route path={bikeCreator} element={<BikeCreator />} />
            </Route>
          </Routes>
        </Locales>
      </BrowserRouter>
    </>
  );
}

export default App;
