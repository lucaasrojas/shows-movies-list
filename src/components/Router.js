import React from "react";
import { ShowsList, ShowDetail } from ".";
import { Route, Routes } from "react-router-dom";

const Router = () => {
    return (
        <Routes>
            <Route exact path="/" element={<ShowsList />} />
            <Route exact path="/:id" element={<ShowDetail />} />
        </Routes>
    );
};

export default Router;
