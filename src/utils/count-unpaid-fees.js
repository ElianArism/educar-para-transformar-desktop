import { differenceInMonths } from "date-fns";

const PAYMENT_DAY = new Date(
  new Date().getFullYear(),
  new Date().getMonth(),
  15
);

export const countUnpaidFees = (student) => {
  if (!student.fees || student.fees.length < 1) return 0;
  const lastPaidFee = student.fees[0];
  const paymentDate = new Date(lastPaidFee.paymentDate);

  return differenceInMonths(PAYMENT_DAY, paymentDate);
};
