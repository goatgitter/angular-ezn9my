export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Necklace',
    price: 10,
    description: 'A necklace made from natural fibers with in-line beads.'
  },
  {
    id: 2,
    name: 'Framed art',
    price: 15,
    description: 'Handmade framed art done in color pencil'
  },
  {
    id: 3,
    name: 'Poem',
    price: 5,
    description: 'Originally crafted poem'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/