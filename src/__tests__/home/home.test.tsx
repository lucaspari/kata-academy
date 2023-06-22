import Home from "@/app/page";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
jest.mock("next-auth/react", () => ({
  useSession: jest.fn().mockResolvedValue({ data: null }),
}));

describe("Home.tsx", () => {
  it("home exists?", async () => {
    render(<Home />);
  });
});
