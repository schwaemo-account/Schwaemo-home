import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen, within } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Footer from "@/components/Footer";
import { founders } from "@/data/founders";
import { getFeaturedProjects, projects } from "@/data/projects";
import Founders from "@/pages/Founders";
import ProjectDetail from "@/pages/ProjectDetail";
import Showcase from "@/pages/Showcase";

afterEach(() => {
  cleanup();
});

const renderFoundersPage = () =>
  render(
    <MemoryRouter initialEntries={["/founders"]}>
      <Routes>
        <Route path="/founders" element={<Founders />} />
      </Routes>
    </MemoryRouter>
  );

const renderProjectDetail = (slug: string) =>
  render(
    <MemoryRouter initialEntries={[`/projects/${slug}`]}>
      <Routes>
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>
    </MemoryRouter>
  );

const renderShowcasePage = () =>
  render(
    <MemoryRouter initialEntries={["/showcase"]}>
      <Routes>
        <Route path="/showcase" element={<Showcase />} />
      </Routes>
    </MemoryRouter>
  );

describe("founders page", () => {
  it("renders the founders with Shanil's photo and no email links", () => {
    renderFoundersPage();

    expect(screen.getByText("Shanil Shah")).toBeInTheDocument();
    expect(screen.getByText("Tejas Gharat")).toBeInTheDocument();
    expect(screen.getByAltText("Shanil Shah portrait")).toBeInTheDocument();
    expect(screen.getAllByText(/photo coming soon/i)).toHaveLength(1);
    expect(document.querySelectorAll('a[href^="mailto:"]')).toHaveLength(0);

    founders.forEach((founder) => {
      const card = screen.getByRole("heading", { name: founder.name }).closest("article");
      expect(card).not.toBeNull();

      const scoped = within(card!);
      expect(scoped.getByRole("link", { name: "GitHub" })).toHaveAttribute(
        "href",
        founder.links.github
      );
      expect(scoped.getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
        "href",
        founder.links.linkedin
      );
      expect(scoped.queryByRole("link", { name: /email/i })).not.toBeInTheDocument();
    });
  });
});

describe("project data", () => {
  it("keeps featured projects limited to featured entries and returns them in reverse card order", () => {
    const featuredProjects = getFeaturedProjects();
    const slugs = projects.map((project) => project.slug);
    const huggingbox = projects.find((project) => project.slug === "huggingbox");

    expect(featuredProjects).toHaveLength(3);
    expect(featuredProjects.every((project) => project.featured)).toBe(true);
    expect(featuredProjects.map((project) => project.slug)).toEqual([
      "huggingbox",
      "trust-me-bro",
      "tldr",
    ]);
    expect(new Set(slugs).size).toBe(slugs.length);
    expect(huggingbox).toBeDefined();
    expect(huggingbox?.featured).toBe(true);
  });
});

describe("showcase page", () => {
  it("renders project cards in reverse order by default", () => {
    renderShowcasePage();

    const projectLinks = screen
      .getAllByRole("link")
      .filter((link) => link.getAttribute("href")?.startsWith("/projects/"));

    expect(projectLinks.map((link) => link.getAttribute("href"))).toEqual([
      "/projects/huggingbox",
      "/projects/trust-me-bro",
      "/projects/tldr",
    ]);
  });
});

describe("project detail hero links", () => {
  it("shows the TLDR live demo without a dead GitHub button", () => {
    renderProjectDetail("tldr");

    const hero = screen.getByRole("heading", { name: /tldr/i }).closest("section");
    expect(hero).not.toBeNull();

    const scoped = within(hero!);
    expect(scoped.getByText("MVP")).toBeInTheDocument();
    expect(scoped.getByRole("link", { name: /live demo/i })).toHaveAttribute(
      "href",
      "https://tldr-321914.vercel.app/"
    );
    expect(scoped.queryByRole("link", { name: /github/i })).not.toBeInTheDocument();
  });

  it("shows GitHub for Trust Me Bro", () => {
    renderProjectDetail("trust-me-bro");

    const hero = screen
      .getByRole("heading", { name: /trust me bro/i })
      .closest("section");
    expect(hero).not.toBeNull();

    const scoped = within(hero!);
    expect(scoped.getByText("Prototype")).toBeInTheDocument();
    expect(scoped.getByRole("link", { name: /github/i })).toHaveAttribute(
      "href",
      "https://github.com/Schwaemo/trust-me-bro"
    );
  });

  it("shows a disabled GitHub button for HuggingBox", () => {
    renderProjectDetail("huggingbox");

    const hero = screen
      .getByRole("heading", { name: /huggingbox/i })
      .closest("section");
    expect(hero).not.toBeNull();

    const scoped = within(hero!);
    expect(scoped.getByText("TBD")).toBeInTheDocument();
    expect(scoped.getByRole("button", { name: /github/i })).toBeDisabled();
    expect(scoped.queryByRole("link", { name: /github/i })).not.toBeInTheDocument();
    expect(scoped.queryByRole("link", { name: /live demo/i })).not.toBeInTheDocument();
  });
});

describe("footer", () => {
  it("points the GitHub icon at the Schwaemo org", () => {
    render(<Footer />);

    expect(screen.getByLabelText(/github/i)).toHaveAttribute(
      "href",
      "https://github.com/Schwaemo"
    );
  });
});
