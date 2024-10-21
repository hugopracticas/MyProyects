import React from "react";
import { Navbar } from "../ui/components";
import { Navigate, Route, Routes } from "react-router-dom";
import { Demons, Humans } from "../characters/pages";
import { Search } from "../characters/pages/Search";

export const AppRouter = () => {
  return (
    <div>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="humans" element={<Humans />} />
          <Route path="demons" element={<Demons />} />
          <Route path="search" element={<Search />} />

          <Route path="/*" element={<Navigate to="/humans" />} />
        </Routes>
      </div>
    </div>
  );
};
