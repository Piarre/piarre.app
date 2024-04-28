type TProject = {
  title: string;
  description: string;
  whatFor?: string;
  link?: TLink[];
  tags: string[];
  image?: string;
  color?: keyof typeof Colors;
};

type TLink = { name: string; hash: string };

enum Colors {
  Blue,
  Orange,
  Green,
  Red,
  Yellow,
  Purple,
  Pink,
  Indigo,
  Violet,
  Cyan,
  Teal,
  Lime,
  Amber,
  Gray,
  White,
  Black,
}

export { type TProject, type TLink };
