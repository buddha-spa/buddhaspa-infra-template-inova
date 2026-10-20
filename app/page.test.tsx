import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./page";

describe("Home", () => {
  it("exibe o titulo do template", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { name: /template next\.js/i })
    ).toBeInTheDocument();
  });
});
