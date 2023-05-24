import Home from "@/app/page";
import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

describe("Home.tsx", () => {
  it("renders home", () => {
    render(<Home />);
    expect(screen.getByRole("main")).toBeInTheDocument();
  });
  it("test_button_click_event", () => {
    const handleClick = jest.fn();
    render(<button onClick={handleClick}>Aprenda Mais</button>);
    fireEvent.click(screen.getByRole("button", { name: /Aprenda Mais/i }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
