import { describe, expect, it } from "vitest";
import { getProjectBySlug, projects } from "@/content/projects";

describe("projects", () => {
  it("găsește proiect după slug", () => {
    const p = getProjectBySlug("agent-penthouse-bucuresti-nord");
    expect(p?.title).toContain("penthouse");
  });

  it("returnează undefined pentru slug inexistent", () => {
    expect(getProjectBySlug("inexistent")).toBeUndefined();
  });

  it("lista projects nu e goală", () => {
    expect(projects.length).toBeGreaterThan(0);
  });
});
