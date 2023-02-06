export class Compras {
    constructor(
        public id: Number,
        public producto: string,
        public valor: Number,
        public id_cuotas: Number
    ) { }
}