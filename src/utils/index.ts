export const getFormattedDateMM_DD_YYYY = (dateStr: string) => {
  const date = new Date(dateStr);
  const str =
    (date.getMonth() > 8 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1)) +
    "/" +
    (date.getDate() > 9 ? date.getDate() : "0" + date.getDate()) +
    "/" +
    date.getFullYear();

  return str;
};
