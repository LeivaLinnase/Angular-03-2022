export class Product {
    constructor(
        public id: number,
        public name: string,
        public imgSrc: string,
        public price: number,
        public category: string,
        public description: string,
        public isActive: boolean
    ) {}
}

// {id: number, name: string, price: number, imgSrc: string, category: string, description: string, isActive: boolean}

// product: Product = getValueFromDb();

// MODELS + PIPES
// 1. lyhidus (kood on palju lyhem)
// 2. muutmine (kui teen yhe muutuse, l2heb igale poole)
// 3. k6ik on samast liigist

// product: {id: number, name: string, price: number, imgSrc: string, category: string,
//       description: string, isActive: boolean} = getValueFromDb();
// product: Product = getValueFromDb();

// product: {id: number, name: string, country: string, content: string[],
//       description: string, isActive: boolean} = getValueFromDb();
// product: ProductExtra = getValueFromDb();