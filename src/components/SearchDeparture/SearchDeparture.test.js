import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import SearchDeparture from "./SearchDeparture";

describe("SearchDeparture", () => {
  it("should auto-select the first suggestion when clicked outside the component", async () => {
    const mockSetDeparture = jest.fn();
  
    render(
      <SearchDeparture />,
      {
        DepartureContextCreate: {
          setDeparture: mockSetDeparture,
        },
      }
    );
  
    const input = screen.getByPlaceholderText("From: City, Station Or Airport");
    fireEvent.change(input, { target: { value: "par" } });
  
    await waitFor(() => {
      const suggestionOption = screen.getByText("Paris");
      expect(suggestionOption).toBeInTheDocument();
    });
  
    const suggestionOption = screen.getByText("Paris");
    fireEvent.click(suggestionOption);
    fireEvent.click(document.body);
  
    setTimeout(() => {
      expect(input.value).toMatch(/paris/i);
      expect(mockSetDeparture).toHaveBeenCalledWith({ city: "paris" });
    }, 0);
  });
  
  
  
});