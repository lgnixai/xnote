
import { atomWithStorage } from 'jotai/utils';

export type ChartTF = 1;
export const selectedFeedAtom = atomWithStorage<ChartTF>(
    'selectedFeed',
    1
);