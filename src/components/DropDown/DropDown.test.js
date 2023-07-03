import DateRange, { ChangeFormat } from "./DateRange"
import { render, screen, fireEvent } from '@testing-library/react'
import React from "react";
import { TripTypeContextProvider } from "../../context/TripTypeContext";

describe("test dateRange component", () => {
    it("testing trip type state change and display right leaving date", () => {
        render(<DateRange />, {
            wrapper: TripTypeContextProvider
        })
        const FromDate = new Date()
        FromDate.setDate(FromDate.getDate() + 7);
        const addReturn = screen.getByTestId("addReturn")
        fireEvent.click(addReturn)
        const returnDateLabel = screen.getByTestId("returnDateLabel")
        expect(returnDateLabel).toHaveTextContent(ChangeFormat(FromDate))
    })
    it("Display right departure date", () => {
        render(<DateRange />)
        const FromDate = new Date()
        FromDate.setDate(FromDate.getDate() + 1);
        const departureDateLabel = screen.getByTestId("departureDateLabel")
        expect(departureDateLabel).toHaveTextContent(ChangeFormat(FromDate))
    })

})