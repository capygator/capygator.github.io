import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";

describe("Card-Komponenten", () => {
  it("rendert Card mit Inhalt", () => {
    render(<Card data-testid="card">Inhalt</Card>);
    expect(screen.getByTestId("card")).toBeInTheDocument();
    expect(screen.getByTestId("card")).toHaveTextContent("Inhalt");
  });

  it("wendet zusätzliche className an", () => {
    render(<Card className="custom-class" data-testid="card" />);
    expect(screen.getByTestId("card")).toHaveClass("custom-class");
  });

  it("rendert CardTitle korrekt", () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Mein Titel</CardTitle>
        </CardHeader>
      </Card>
    );
    expect(screen.getByText("Mein Titel")).toBeInTheDocument();
  });

  it("rendert vollständige Card-Struktur", () => {
    render(
      <Card data-testid="full-card">
        <CardHeader>
          <CardTitle>Sprint</CardTitle>
          <CardDescription>5 Tage · Quick Wins</CardDescription>
        </CardHeader>
        <CardContent>8.000 €</CardContent>
        <CardFooter>Jetzt buchen</CardFooter>
      </Card>
    );
    const card = screen.getByTestId("full-card");
    expect(card).toBeInTheDocument();
    expect(screen.getByText("Sprint")).toBeInTheDocument();
    expect(screen.getByText("5 Tage · Quick Wins")).toBeInTheDocument();
    expect(screen.getByText("8.000 €")).toBeInTheDocument();
    expect(screen.getByText("Jetzt buchen")).toBeInTheDocument();
  });
});
