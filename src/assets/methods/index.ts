export const dateHandler = (date: Date) => {
  return date.toLocaleDateString("pt-br", { dateStyle: "long" });
};
