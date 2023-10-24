export type Mods = Record<string, boolean | string | number>;

export const classNames = (cls: string, mods?: Mods, addn?: string[]) => {
  return [
    cls,
    ...addn,
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([classname]) => classname),
  ].join(" ");
};
