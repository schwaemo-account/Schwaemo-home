import { useState, useMemo } from "react";
import { Search, Filter, ChevronDown } from "lucide-react";
import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import TechChip from "@/components/TechChip";
import { projects, getAllTags, Project } from "@/data/projects";

type SortOption = "newest" | "featured";

const Showcase = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const [showFilters, setShowFilters] = useState(false);

  const allTags = getAllTags();

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const filteredAndSortedProjects = useMemo(() => {
    let result = [...projects];

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.tags.some((t) => t.toLowerCase().includes(query))
      );
    }

    // Filter by selected tags
    if (selectedTags.length > 0) {
      result = result.filter((p) =>
        selectedTags.some((tag) => p.tags.includes(tag))
      );
    }

    // Sort
    if (sortBy === "newest") {
      result.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    } else {
      // Featured first, then by date
      result.sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      });
    }

    return result;
  }, [searchQuery, selectedTags, sortBy]);

  return (
    <Layout>
      {/* Header */}
      <section className="border-b-[3px] border-foreground">
        <div className="container mx-auto px-4 py-12">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
            SHOWCASE
          </h1>
          <p className="text-xl text-muted-foreground">
            Browse all projects. Filter by tech, search by keyword.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b-[3px] border-foreground bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                size={20}
              />
              <input
                type="text"
                placeholder="Search by keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-brutal bg-background font-display focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Filter Toggle (Mobile) */}
            <button
              className="md:hidden neo-btn-secondary flex items-center justify-center"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter size={20} className="mr-2" />
              Filters
              <ChevronDown
                size={16}
                className={`ml-2 transition-transform ${
                  showFilters ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="appearance-none w-full md:w-48 px-4 py-3 pr-10 border-brutal bg-background font-display cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="featured">Sort by Featured</option>
                <option value="newest">Sort by Newest</option>
              </select>
              <ChevronDown
                size={20}
                className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
              />
            </div>
          </div>

          {/* Tag Filters */}
          <div
            className={`${
              showFilters ? "block" : "hidden"
            } md:block mt-4 pt-4 border-t-2 border-muted`}
          >
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <TechChip
                  key={tag}
                  label={tag}
                  active={selectedTags.includes(tag)}
                  onClick={() => toggleTag(tag)}
                />
              ))}
              {selectedTags.length > 0 && (
                <button
                  onClick={() => setSelectedTags([])}
                  className="text-sm font-display font-semibold text-muted-foreground hover:text-foreground transition-colors"
                >
                  Clear all
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Project Grid */}
      <section>
        <div className="container mx-auto px-4 py-12">
          {filteredAndSortedProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAndSortedProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-muted border-brutal mx-auto mb-6 flex items-center justify-center">
                <Search size={40} className="text-muted-foreground" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-2">
                No projects found
              </h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search or filters
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedTags([]);
                }}
                className="neo-btn-secondary"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Showcase;
