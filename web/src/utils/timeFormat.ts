import moment from "moment";

export const timeFoamat = (row: any, column:any) => {
  return row[column.property] = moment(row[column.property]).format('YYYY-MM-DD HH:mm:ss');
}