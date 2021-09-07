import { atom } from "recoil";
import { query as q } from "faunadb";
import { COLLECTION_REF } from "constant";

const selectNameState = atom({
  key: "selectNameState",
  default: "",
});

const loadingState = atom({
  key: "loadingState",
  default: false,
});

const nameListState = atom({
  key: "nameListState",
  default: [],
});

const valueListState = atom({
  key: "valueListState",
  default: "",
});

const refState = atom({
  key: "refState",
  default: q.Ref(q.Collection("prices"), COLLECTION_REF),
});

export {
  selectNameState,
  loadingState,
  nameListState,
  valueListState,
  refState,
};
