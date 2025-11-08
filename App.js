import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import MemberRegistration from "./MemberRegistration";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>Welcome to My Website</h1>
              <p>This is the homepage.</p>
            </div>
          }
        />
        <Route path="/add-member" element={<MemberRegistration />} />
      </Routes>
    </Router>
  );
}

export default App;
