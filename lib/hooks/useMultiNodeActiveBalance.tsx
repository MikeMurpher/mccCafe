import MultiNodeContractAbi from '../../contracts/MultiNode.json';
import { MULTINODE_CLAIM_CONTRACT } from '../constants';
import { numberWithCommas } from '../utils/formatNumbers';
import { parseBalance } from '../utils/parseBalance';
import { useContractRead } from 'wagmi';

interface Props {
  functionName: 'getUnpaidEarnings' | 'getTotalEarnings';
  nodeId?: string;
}

export function useMultiNodeActiveBalance(props: Props) {
  const { nodeId, functionName } = props;

  const { data } = useContractRead({
    address: MULTINODE_CLAIM_CONTRACT,
    abi: MultiNodeContractAbi,
    functionName,
    args: nodeId ? [parseInt(nodeId)] : [],
  });

  // @ts-expect-error
  return numberWithCommas(parseBalance(data ?? 0, 18, 2));
}
