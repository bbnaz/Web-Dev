export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  link: string;
  rating : number;
  category : string;
  like : number;
}

export const products = [
  {
    id: 1,
    name: 'Alstroemeria bouquet',
    price: 9300,
    description: 'DI Flowers Studio Самоцвет альстремерия 7 шт 50 см',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc1/hff/48440303550494/di-flowers-studio-samocvet-miks-alstromerij-7-st-103532446-1.jpg",
    link: "https://kaspi.kz/shop/p/di-flowers-studio-samotsvet-al-stremerija-7-sht-50-sm-103532446/?c=750000000&ysclid=lepgzvxk1m670416227#!/item",
    rating: 5,
    category : "Flowers",
    like : 0
  },
  {
    id: 2,
    name: 'Gorgeous rose',
    price: 81000,
    description: 'Art Flowers 202102AF Букет 51 шикарная роза',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h38/h3c/47184126902302/art-flowers-202102af-buket-51-sikarnaa-roza-102878189-1.jpg",
    link: "https://kaspi.kz/shop/p/art-flowers-202102af-buket-51-shikarnaja-roza-102878189/?c=750000000#!/item",
    rating: 5,
    category : "Flowers",
    like : 0
  },
  {
    id: 3,
    name: 'Pions',
    price: 105000,
    description: 'ANDOR 304 пион 21 шт 50 см',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h50/hb2/50720313049118/frutobuket-304-104845056-1.jpg",
    link: "https://kaspi.kz/shop/p/andor-304-pion-21-sht-50-sm-104845056/?c=750000000#!/item",
    rating: 5,
    category : "Flowers",
    like : 0
  },
  {
    id: 4,
    name: 'Bush roses',
    price: 172550,
    description: `Flowers Brand 103113KHH кустовая роза 101 шт 50 см`,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf8/hfe/34395774124062/flowers-brand-103113khh-kustovye-rozy-101-st-101314405-1-Container.jpg",
    link : "https://kaspi.kz/shop/p/flowers-brand-103113khh-kustovaja-roza-101-sht-50-sm-101314405/?c=750000000#!/item",
    rating: 5,
    category : "Flowers",
    like : 0
  },
  {
    id: 5,
    name: 'White tulips',
    price: 159990,
    description: `Bestflowers BF706 тюльпан 201 шт`,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h76/h75/48767188664350/bestflowers-bf706-tulpan-201-st-103709976-1.jpg",
    link : "https://kaspi.kz/shop/p/bestflowers-bf706-tjul-pan-201-sht-103709976/?c=750000000#!/item",
    rating: 5,
    category : "Flowers",
    like : 0
  },
  {
    id: 6,
    name: 'PANDORA bracelet',
    price: 52900,
    description: `Браслет PANDORA Браслет I-D 599493C00-3 18 см 11.65 г серебро, без вставок`,
    image: "https://pandora.kz/upload/iblock/774/77496717b8743e0bbd5100c1509e2eaf.png",
    link: 'https://kaspi.kz/shop/p/pandora-braslet-i-d-599493c00-3-18-sm-11-65-g-serebro-bez-vstavok-108093721/?c=750000000#!/item',
    rating: 5,
    category : "Pandora",
    like : 0
  },
  {
    id: 7,
    name: 'PANDORA bracelet',
    price: 53900,
    description: `Браслет PANDORA Moments 591469C01-16 14 см 3.49 г серебро, цирконий`,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hdf/h3f/50391757094942/pandora-moments-591469c01-16-14-sm-3-49-g-serebro-cirkonij-104671913-4.jpg",
    link : "https://kaspi.kz/shop/p/pandora-moments-591469c01-16-14-sm-3-49-g-serebro-tsirkonii-104671913/?c=750000000#!/item",
    rating: 5,
    category : "Pandora",
    like : 0
  },
  {
    id: 8,
    name: 'PANDORA Necklace',
    price: 69900,
    description: `Колье PANDORA Семейное древо 390384CZ-80 Pandora Moments 80 см 7.1 г серебро, цирконий`,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h07/h7c/34099152388126/pandora-semejnoe-drevo-390384cz-80-pandora-moments-101663841-1.jpg",
    link : "https://kaspi.kz/shop/p/pandora-semeinoe-drevo-390384cz-80-pandora-moments-80-sm-7-1-g-serebro-tsirkonii-101663841/?c=750000000#!/item",
    rating: 5,
    category : "Pandora",
    like : 0
  },
  {
    id: 9,
    name: 'PANDORA ring',
    price: 57900,
    description: `Кольцо PANDORA Тройное кольцо с паве 199057C01-50 16 5.37 г серебро, цирконий`,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h78/h10/67203469082654/kol-tsa-s-kamnyami-108180591-1.jpg",
    link : "https://kaspi.kz/shop/p/pandora-troinoe-kol-tso-s-pave-199057c01-50-16-5-37-g-serebro-tsirkonii-108180591/?c=750000000#!/item",
    rating: 5,
    category : "Pandora",
    like : 0
  },
  {
    id: 10,
    name: 'PANDORA bracelet',
    price: 89900,
    description: `Браслет Pandora 599694C01-3 16 см 11.13 г серебро, жемчуг`,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb3/hf9/48804328472606/pandora-me-599694c01-3-serebro-kultivirovannyj-zemcug-103728157-1.jpg",
    link : "https://kaspi.kz/shop/p/pandora-599694c01-3-16-sm-11-13-g-serebro-zhemchug-103728157/?c=750000000#!/item",
    rating: 5,
    category : "Pandora",
    like : 0
  },
  {
    id: 11,
    name: 'Carolina Herrera Good Girl',
    price: 49390,
    description: 'Carolina Herrera Good Girl парфюмерная вода EDP 50 мл',
    image: "https://goldapple.kz/web_scripts/webp/catalog/product/cache/fb5d06f7acfb2f26f85333624ccbfb5e/8/4/8411061823514_1_wemavjacpl1zinhu.jpg?quality=95",
    link: "https://kaspi.kz/shop/p/carolina-herrera-good-girl-parfjumernaja-voda-edp-50-ml-17300672/?c=750000000#!/item",
    rating: 5,
    category : "Perfume",
    like : 0
  },
  {
    id: 12,
    name: 'MOSCHINO Funny',
    price: 22995,
    description: 'MOSCHINO Funny туалетная вода EDT 100 мл',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h46/hfe/31584662814750/moschino-funny-edt-100-ml-17300760-1.jpg",
    link: "https://kaspi.kz/shop/p/google-pixel-6a-6-gb-128-gb-belyi-106250314/?c=750000000#!/item",
    rating: 5,
    category : "Perfume",
    like : 0
  },
  {
    id: 13,
    name: "Imperatrice",
    price: 31995,
    description: 'DOLCE&GABBANA 3 L Imperatrice туалетная вода EDT 100 мл',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h08/h46/68076494880798/dolce-gabbana-l-imperatrice-tualetnaya-voda-edt-100-ml-102466699-1.jpg",
    link: "https://kaspi.kz/shop/p/dolce-gabbana-3-l-imperatrice-tualetnaja-voda-edt-100-ml-102466699/?c=750000000#!/item",
    rating: 5,
    category : "Perfume",
    like : 0
  },
  {
    id: 14,
    name: 'CHANEL Chance Eau Tendre',
    price: 123442,
    description: 'CHANEL Chance Eau Tendre туалетная вода EDT 150 мл',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h62/h69/31977745842206/chanel-chance-eau-tendre-edt-150-ml-100157376-1.jpg",
    link: "https://kaspi.kz/shop/p/chanel-chance-eau-tendre-tualetnaja-voda-edt-150-ml-100157376/?c=750000000#!/item",
    rating: 5,
    category : "Perfume",
    like : 0
  },
  {
    id: 15,
    name: 'Guerlain champs elysees',
    price: 131452,
    description: 'Guerlain champs elysees 2017100 туалетная вода EDT 100 мл',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4f/h59/31770482966558/guerlain-champs-elysees-2017-edt-100-17302815-1.jpg",
    link: "https://kaspi.kz/shop/p/guerlain-champs-elysees-2017100-tualetnaja-voda-edt-100-ml-17302815/?c=750000000#!/item",
    rating: 5,
    category : "Perfume",
    like : 0
  },
  {
    id: 16,
    name: 'Baseus Refrigerator',
    price: 92900,
    description: 'Холодильник Baseus CRBXNS-A04 розовый пластик, стекло',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2c/he0/62437629657118/baseus-crbxns-a04-rozovyj-plastik-steklo-106433866-1.jpg",
    link: "https://kaspi.kz/shop/p/baseus-crbxns-a04-rozovyi-plastik-steklo-106433866/?c=750000000#!/item",
    rating: 5,
    category : "Mini Fridge for Makeup",
    like : 0
  },
  {
    id: 17,
    name: 'Beauty fridge',
    price: 35434,
    description: 'Холодильник Beauty fridge Frg-0588 белый',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he6/hda/49729389232158/beauty-fridge-frg0588-belyj-103477601-1.jpg",
    link: "https://kaspi.kz/shop/p/beauty-fridge-frg-0588-belyi-103477601/?c=750000000#!/item",
    rating: 5,
    category : "Mini Fridge for Makeup",
    like : 0
  },
  {
    id: 18,
    name: 'My Beauty Gadge',
    price: 149000,
    description: 'Холодильник My Beauty Gadget 3M-12L',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h40/hb9/52320154648606/holodilnik-12-litrov-pro-105728251-1.jpg",
    link: "https://kaspi.kz/shop/p/my-beauty-gadget-3m-12l-105728251/?c=750000000#!/item",
    rating: 5,
    category : "Mini Fridge for Makeup",
    like : 0
  },
  {
    id: 19,
    name: 'Bf',
    price: 35000,
    description: 'Холодильник Bf 1-1 белый пластик, стекло, металл',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h9d/h81/68996314791966/bf-1-1-belyi-plastik-steklo-metall-108892619-1.jpg",
    link: "https://kaspi.kz/shop/p/bf-1-1-belyi-plastik-steklo-metall-108892619/?c=750000000#!/item",
    rating: 5,
    category : "Mini Fridge for Makeup",
    like : 0
  },
  {
    id: 20,
    name: 'PINKTOP',
    price: 48000,
    description: 'Холодильник PINKTOP MFO-20L розовый пластик, стекло',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hed/hb8/63104071139358/mini-holodilnik-dla-kosmetiki-106803211-1.jpg",
    link: "https://kaspi.kz/shop/p/pinktop-mfo-20l-rozovyi-plastik-steklo-106803211/?c=750000000#!/item",
    rating: 5,
    category : "Mini Fridge for Makeup",
    like : 0
  }

];
