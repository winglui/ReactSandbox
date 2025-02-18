import { atom } from "jotai";
import {loadable } from 'jotai/utils';

export const counterAtom = atom(0);
export const doubleCounterAtom = atom((get) => get(counterAtom) * 2);
const asyncUserAtom = atom(async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  return response.json();
});
export const loadableUserAtom = loadable(asyncUserAtom);