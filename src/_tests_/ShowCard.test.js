
import 'regenerator-runtime/runtime'
import { render, queryByAttribute, fireEvent } from "@testing-library/react";
import React from "react";
import { ShowCard } from "../components";
import { BrowserRouter } from "react-router-dom";
const getById = queryByAttribute.bind(null, 'id')
const mockedUsedNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate,
}));
it("With data should render the show card", async () => {
    const res = {
        show: {
            id: 123,
            image: {
                medium: "http://www.image.com"
            },
            name: "Show Name",
            summary: "<p>Brief description</p>"
        }
    };
    const wrapper = render(<BrowserRouter><ShowCard {...res} /></BrowserRouter>);
    const card = getById(wrapper.container, '123')
    expect(await wrapper.findByText(res.show.name)).toBeTruthy()
    expect(card).toBeTruthy();
    expect(wrapper).toMatchSnapshot()
});

it("On click should redirect to detail", async () => {
    const res = {
        show: {
            id: 123,
            image: {
                medium: "http://www.image.com"
            },
            name: "Show Name",
            summary: "<p>Brief description</p>"
        }
    };
    const wrapper = render(<BrowserRouter><ShowCard {...res} /></BrowserRouter>);
    const card = getById(wrapper.container, '123')
    fireEvent.click(card)

    expect(mockedUsedNavigate).toHaveBeenCalledWith('/123')

});