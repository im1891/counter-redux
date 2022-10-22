export type GetClassesArg = Array<{ condition: boolean; className: string }>;

export const getClasses = (classNames: GetClassesArg) => {
  let classes = "";
  classNames.forEach(({ condition, className }) => {
    if (condition) classes += ` ${className}`;
  });
  return classes;
};
