import { atom } from 'jotai';
import { focusAtom } from 'jotai-optics';
import { uniqBy, orderBy } from 'lodash';

//import { appSettingsAtom } from '~/app-settings';
import type { NewsWithSymbols } from '~/hooks/use-news/use-news.types';
import { genId } from '~/utils/id.utils';
import {Feeds, FeedsItem} from "~/hooks/use-news.types.ts";


export const newsSearchAtom = atom('');
export const _messageHistoryAtom = atom<Feeds[]>([]);
export const _feedsItemAtom = atom<FeedsItem[]>([]);

export const contentAtom=atom({})
export const feedsItemAtom = atom(
    (get) => {
        const messages = get(_feedsItemAtom);

        return messages ;
    },
    (_get, set, value: FeedsItem[]) => set(_feedsItemAtom, value)
);
export const messageHistoryAtom = atom(
  (get) => {
    const messages = get(_messageHistoryAtom);
    // const search = get(newsSearchAtom).trim();

    // if (!search || search.length < 3) return messages;

    return messages
  },
  (_get, set, value: Feeds[]) => set(_messageHistoryAtom, value)
);

export const setMessageHistoryAtom = atom(
  null,
  (get, set, news: Feeds[]) => {
    const prev = get(_messageHistoryAtom);

    const withoutEmpty = news.filter((n) => n.title.length > 2);
    const withId = withoutEmpty.map((n) => ({ ...n, id: n.id || genId() }));

    const withoutDuplicates = uniqBy(
      prev.concat(...withId),
      ({ news: { title, id } }) => title + id
    );

    const ordered = orderBy(withoutDuplicates, ['id'], ['desc']);
    set(_messageHistoryAtom, ordered as Feeds[]);
  }
);