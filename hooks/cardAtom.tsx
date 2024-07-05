import { atom } from "recoil";

export const cardTitleState = atom<string>({
  key: 'cardTitleState',
  default: "bit title",
});

export const cardDescriptionState = atom<string>({
  key: 'cardDescriptionState',
  default: "some desc",
});

export const cardLinkNameState = atom<string>({
  key: 'cardLinkNameState',
  default: "some link name",
});
