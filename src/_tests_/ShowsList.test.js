
import React from "react";
import 'regenerator-runtime/runtime'
import {render,queryByAttribute} from "@testing-library/react";
import Api from "../api/index";
import { ShowsList } from "../components";
import { BrowserRouter } from "react-router-dom";
const getById = queryByAttribute.bind(null, 'id')
jest.mock("../api/index")
it("Match snapshot", async () => {
    const res = [
        {
            show: {
                id: 123,
                image: {
                    medium: "http://www.image.com"
                },
                name: "Show Name",
                summary: "<p>Brief description</p>"
            }
        }
    ];
    Api.getAll.mockImplementationOnce(() => Promise.resolve({ data: res }));
    const wrapper = render(<ShowsList />);
    expect(wrapper).toMatchSnapshot()
});

it("Having data should render card - preview", async () => {
    const res = [
        {
            show: {
                id: 123,
                image: {
                    medium: "http://www.image.com"
                },
                name: "Show Name",
                summary: "<p>Brief description</p>"
            }
        }
    ];
    Api.getAll.mockImplementationOnce(() => Promise.resolve({ data: res }));
    const wrapper = render(<BrowserRouter><ShowsList showsList={res} /></BrowserRouter>);

    const component = getById(wrapper.container, '123')
    const image = await wrapper.findByRole('img')

    expect(component).toBeTruthy()
    expect(await wrapper.findByText(res[0].show.name)).toBeTruthy()
    expect(await wrapper.findByText("Brief description")).toBeTruthy()
    expect(image.src.includes(res[0].show.image.medium)).toBeTruthy()

});

it("Without data should not render card - preview", async () => {
    const res = [];
    Api.getAll.mockImplementationOnce(() => Promise.resolve({ data: res }));
    const wrapper = render(<BrowserRouter><ShowsList showsList={res} /></BrowserRouter>);
    let image;
    try {
        image = await wrapper.findByRole('img')
    } catch (error) {
        image = error
    }   
    
    expect(image).toBeTruthy()

});
