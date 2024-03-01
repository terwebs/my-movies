import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import App from "../src/App"
import MoviesList from "../src/components/MoviesList"

describe("App", () => {
  it("renders headline", () => {
    render(<MoviesList />)
    expect(screen.getByRole("heading", { level: 1 }).textContent).toMatch(
      /My Favorite Movies/
    )
    // check if App components renders headline
  })
})
