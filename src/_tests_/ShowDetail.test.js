
import 'regenerator-runtime/runtime'
import { render } from "@testing-library/react";
import React from "react";
import { ShowDetail } from "../components";
import { BrowserRouter } from "react-router-dom";

it("With data should render card", async () => {
    const wrapper = render(<BrowserRouter><ShowDetail /></BrowserRouter>);
    expect(wrapper).toMatchSnapshot();
});