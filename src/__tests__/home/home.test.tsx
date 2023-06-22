import Home from "@/app/page";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { useSession } from "next-auth/react";
jest.mock("next-auth/react");

describe("Home.tsx", () => {
  it("home exists?", async () => {
    useSession.mockReturnValueOnce([
      {
        user: {
          email: "foo@bar.com",
        },
      },
      false,
    ]);
    render(<Home />);
  });
});
