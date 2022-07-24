import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ProtocolPages from "./components/ProtocolPages";
import MarketShare from "./components/MarketShare";
import Download from "./components/Download";
import NotFound from "./components/NotFound";
import Layout from "./components/Layout";
import "./App.css";

export default function App() {
  React.useEffect(() => {
    document.title = "Browser Dashboard";
  }, []);

  return (
    <div>
      <Router>
        <Routes>
          <Route
            exact
            path="/404"
            element={
              <Layout>
                <NotFound />
              </Layout>
            }
          ></Route>
          <Route
            exact
            path="/protocol-pages"
            element={
              <Layout>
                <ProtocolPages />
              </Layout>
            }
          ></Route>
          <Route
            exact
            path="/market-share"
            element={
              <Layout>
                <MarketShare />
              </Layout>
            }
          ></Route>
          <Route
            exact
            path="/download"
            element={
              <Layout>
                <Download />
              </Layout>
            }
          ></Route>
          <Route
            exact
            path="/dashboard"
            element={
              <Layout>
                <Dashboard />
              </Layout>
            }
          ></Route>
          <Route
            exact
            path="/"
            element={
              <Layout>
                <Dashboard />
              </Layout>
            }
          ></Route>
          <Route
            path="*"
            element={
              <Layout>
                <NotFound />
              </Layout>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}
