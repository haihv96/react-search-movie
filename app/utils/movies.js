export const convertDate = (date) => {
  const myDate = new Date(date);
  return `${myDate.getDate()}/${myDate.getMonth() + 1}/${myDate.getFullYear()}`;
};

export const convertQuery = (queryObject) => {

};
