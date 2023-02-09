export class Compras {
    constructor(
        public id: Number,
        public producto: string,
        public valor: Number,
        public cantidad_cuotas: Number,
        public cuotas_pagadas: Number,
        public valor_cuota: Number,
        public es_servicio: Boolean,
        public ultima_fecha_pago: string
    ) { }
}