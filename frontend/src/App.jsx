import React from "react";
import Layout from "./component/Layout";
import Home from "./home/Home";

function App() {
  return (
    <div
      className="bg-cover bg-center min-h-screen flex flex-col"
      style={{ backgroundImage: "url('/img.jpeg')" }}
    >
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;
