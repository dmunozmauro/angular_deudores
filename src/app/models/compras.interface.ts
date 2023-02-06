export class Compras {
    constructor(
        public id: Number,
        public producto: string,
        public valor: Number,
        public cantidad_cuotas: Number,
        public cuotas_pagadas: Number,
        public id_cuotas: Number
    ) { }
}