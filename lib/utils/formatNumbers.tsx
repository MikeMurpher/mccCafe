export function formatDollar(amt: any) {
  return amt.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

export function numberWithCommas(x: number | string) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function formatTotalRealized(
  totalEarnings: string,
  totalUnpaid: string
) {
  return numberWithCommas(
    (
      Number(parseFloat(totalEarnings?.replace(/,/g, '')).toFixed(2)) -
      Number(parseFloat(totalUnpaid?.replace(/,/g, '')).toFixed(2))
    ).toFixed(2)
  );
}
