// Placeholder text shared by all projects. To write a real project,
// add the same field to that project and it overrides the placeholder.
const placeholder = {
  year: "[Year]",
  client: "[Client name]",
  role: "[My role]",
  timeline: "[Duration]",
  tools: ["[Tool]", "[Tool]", "[Tool]"],
  summary: "[A one or two sentence summary: what the project was and what it achieved.]",
  overview: "[A short paragraph introducing the project, the problem it solved and who it was for.]",
  challenge: "[Describe the problem or constraints I started with.]",
  approach: "[Describe how I analysed it and the steps I took.]",
  results: [
    { value: "[00]%", label: "[Result metric one]" },
    { value: "[00]x", label: "[Result metric two]" },
    { value: "[00]+", label: "[Result metric three]" },
  ],
};

const gallery = (slug) => ({
  cover: `/images/projects/${slug}/cover.webp`,
  wide: `/images/projects/${slug}/wide.webp`,
  a: `/images/projects/${slug}/a.webp`,
  b: `/images/projects/${slug}/b.webp`,
});

export const projects = [
  {
    ...placeholder,
    id: 1,
    slug: "project-one",
    title: "[Project one]",
    category: "Systems analysis",
    images: gallery("project-one"),
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project-one",
  },
  {
    ...placeholder,
    id: 2,
    slug: "project-two",
    title: "[Project two]",
    category: "Project management",
    images: gallery("project-two"),
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project-two",
  },
  {
    ...placeholder,
    id: 3,
    slug: "project-three",
    title: "[Project three]",
    category: "Robotics (ROS)",
    images: gallery("project-three"),
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project-three",
  },
  {
    ...placeholder,
    id: 4,
    slug: "project-four",
    title: "[Project four]",
    category: "Software",
    images: gallery("project-four"),
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project-four",
  },
];