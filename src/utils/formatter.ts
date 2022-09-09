import moment from "moment";

export function PublicationPeriodFormatter(date: string) {
  return moment(date).fromNow()
}