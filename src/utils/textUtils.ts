import moment from "moment";

export const formatUSD = (value: number) => {
  return new Intl.NumberFormat("us-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

export const formatDate = (value: string) => {
  return moment(new Date(value)).format("LLLL")
}