import { ONE_BILLION } from '../constants';
import type { BigNumberish } from '@ethersproject/bignumber';
import { formatUnits } from '@ethersproject/units';

export const parseBalance = (
  value: BigNumberish,
  decimals = 18,
  decimalsToDisplay = 8
) =>
  (Number(formatUnits(value, decimals)) * ONE_BILLION).toFixed(
    decimalsToDisplay
  );
