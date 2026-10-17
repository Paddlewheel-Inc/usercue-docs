export type Author = {
  name: string;
  avatar: string;
  link: string;
};

export const authors: Record<string, Author> = {
  tiagos: {
    name: "Tiago S.",
    avatar: "https://avatars.githubusercontent.com/u/184146812?v=4",
    link: "https://github.com/tiagoodevs",
  },
  brennanp: {
    name: "Brennan P.",
    avatar: "https://avatars.githubusercontent.com/u/102875688?v=4",
    link: "https://github.com/brennanpeters",
  },
  marinof: {
    name: "Marinó F.",
    avatar: "https://avatars.githubusercontent.com/u/48334228?v=4",
    link: "https://github.com/marinofranz",
  },
  cameromm: {
    name: "Cameron M.",
    avatar: "https://avatars.githubusercontent.com/u/112224450?v=4",
    link: "https://github.com/thecamerondev",
  },
};
