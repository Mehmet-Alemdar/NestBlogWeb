export const dateFormat = (originalDateString) => {
  const originalDate = new Date(originalDateString);

  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = originalDate.toLocaleString('en-US', options);

  return formattedDate;
}