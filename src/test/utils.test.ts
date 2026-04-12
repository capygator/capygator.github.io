import { describe, it, expect } from "vitest";
import { cn, formatEuro } from "@/lib/utils";

describe("cn()", () => {
  it("kombiniert einfache Klassen", () => {
    expect(cn("foo", "bar")).toBe("foo bar");
  });

  it("ignoriert falsy-Werte", () => {
    expect(cn("foo", undefined, null, false, "bar")).toBe("foo bar");
  });

  it("löst Tailwind-Konflikte auf", () => {
    expect(cn("p-4", "p-8")).toBe("p-8");
  });

  it("unterstützt bedingte Klassen", () => {
    const active = true;
    expect(cn("base", active && "active")).toBe("base active");
  });
});

describe("formatEuro()", () => {
  it("formatiert ganze Euro-Beträge korrekt", () => {
    expect(formatEuro(8000)).toBe("8.000\u00a0€");
  });

  it("formatiert große Beträge mit Tausendertrennzeichen", () => {
    expect(formatEuro(200000)).toBe("200.000\u00a0€");
  });

  it("formatiert null Euro korrekt", () => {
    expect(formatEuro(0)).toBe("0\u00a0€");
  });
});
