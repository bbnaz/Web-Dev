export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  image1: string;
  image2: string;
  image3: string;
  link: string;
}

export const products = [
  {
    id: 1,
    name: 'White tulips',
    price: 42.5,
    description: `Bestflowers BF934 белые тюльпаны 19 шт, 50 см`,
    image1:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd4/hcc/49248505692190/bestflowers-bf934-belye-tulpany-19-st-50-sm-104047776-3.jpg',
    image2:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd4/hcc/49248505692190/bestflowers-bf934-belye-tulpany-19-st-50-sm-104047776-3.jpg',
    image3:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd4/hcc/49248505692190/bestflowers-bf934-belye-tulpany-19-st-50-sm-104047776-3.jpg',
    link: 'https://kaspi.kz/shop/p/bestflowers-bf934-belye-tjul-pany-19-sht-50-sm-104047776/?c=750000000&sr=13&qid=f1008d8497861aa0db12d0346b374442&ref=shared_link#!/item',
    rating: 5.0,
  },
  {
    id: 2,
    name: 'Carolina Herrera Good Girl',
    price: 111,
    description: `Carolina Herrera Good Girl парфюмерная вода EDP 50 мл`,
    image1:
      'https://goldapple.kz/web_scripts/webp/catalog/product/cache/fb5d06f7acfb2f26f85333624ccbfb5e/8/4/8411061823514_1_wemavjacpl1zinhu.jpg?quality=95',
    image2:
      'https://goldapple.kz/media/catalog/product/cache/df20e1840b63c7f40d0acee268900e66/8/4/8411061823514_2_hivnejxsie2myxak.jpg',
    image3:
      'https://goldapple.kz/media/catalog/product/cache/df20e1840b63c7f40d0acee268900e66/8/4/8411061823514_4_e56gnkfujxgecgon.jpg',
    link: 'https://kaspi.kz/shop/p/carolina-herrera-good-girl-parfjumernaja-voda-edp-50-ml-17300672/?c=750000000#!/item',
    rating: 5.0,
  },
  {
    id: 3,
    name: 'Dior backstage palette',
    price: 75.8,
    description: `Dior Backstage Glow Face Palette 001 Universal`,
    image1:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h9a/hbc/48908402491422/dior-backstage-glow-face-palette-102958071-1.jpg',
    image2:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h96/h8c/47340272680990/dior-backstage-glow-face-palette-102958071-2.jpg',
    image3:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf3/h4e/47340273139742/dior-backstage-glow-face-palette-102958071-3.jpg',
    link: 'https://kaspi.kz/shop/p/dior-backstage-glow-face-palette-001-universal-102958071/?c=750000000#!/item',
    rating: 5.0,
  },
  {
    id: 4,
    name: 'Браслет PANDORA',
    price: 118,
    description: `Браслет PANDORA Браслет I-D 599493C00-3 18 см 11.65 г серебро, без вставок`,
    image1:
    'https://pandora.kz/upload/iblock/774/77496717b8743e0bbd5100c1509e2eaf.png',
    image2:
      'https://pandora.kz/upload/iblock/a69/a69e1bd9aadd8d25d58da78531964b88.png',
    image3:
      'https://pandora.kz/upload/iblock/641/641afe4fd42b61e47eb85d0e57843030.png',
    link: 'https://kaspi.kz/shop/p/pandora-braslet-i-d-599493c00-3-18-sm-11-65-g-serebro-bez-vstavok-108093721/?c=750000000#!/item',
    rating: 5.0,
  },
  {
    id: 5,
    name: 'Кольцо PANDORA',
    price: 120,
    description: `Кольцо PANDORA Moments 191198C01-56 18 2.88 г серебро, цирконий`,
    image1:
      'https://pandora.kz/upload/iblock/3f7/3f7cf99b52ce9853c9a2b1fdb187c2fb.png',
    image2:
      'https://pandora.kz/upload/iblock/3f5/3f55291b5e9494bcf498efb70149746e.png',
    image3:
      'https://pandora.kz/upload/iblock/f13/f13aaa576ffb7070b44992b6f5138c3a.png',
    link: 'https://kaspi.kz/shop/p/pandora-moments-191198c01-56-18-2-88-g-serebro-tsirkonii-104688333/?c=750000000#!/item',
    rating: 5.0,
  },

  {
    id: 6,
    name: 'Apple iPhone 14 Pro Max',
    price: 2140,
    description: `Смартфон Apple iPhone 14 Pro Max 1Tb фиолетовый`,
    image1:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbf/he5/62948782407710/apple-iphone-14-pro-max-128gb-fioletovyj-106363345-1.jpg',
    image2:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h09/h67/62948782637086/apple-iphone-14-pro-max-128gb-fioletovyj-106363345-2.jpg',
    image3:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h23/hcd/63073996406814/apple-iphone-14-pro-max-128gb-fioletovyj-106363345-4.jpg',
    link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-1tb-fioletovyi-106363345/?c=750000000#!/item',
    rating: 5,
  },
  {
    id: 7,
    name: 'Dyson',
    price: 1017.8,
    description: `Dyson HS05 Airwrap Complete Long фен-щетка 1300 W`,
    image1: 'https://images.satu.kz/193896705_w640_h640_193896705.jpg',
    image2: 'https://images.satu.kz/193896707_w640_h640_193896707.jpg',
    image3: 'https://images.satu.kz/193896706_w640_h640_193896706.jpg',
    link: 'https://kaspi.kz/shop/p/dyson-hs05-airwrap-complete-long-fen-schetka-1300-w-104498649/?c=750000000#!/item',
    rating: 5.0,
  },
  {
    id: 8,
    name: 'Apple iPad Pro 2022',
    price: 1135.3,
    description: `Планшет Apple iPad Pro 2022 11 256GB Wi-Fi серый`,
    image1: 'https://object.pscloud.io/cms/cms/Photo/img_0_64_872_6_1.webp',
    image2: 'https://object.pscloud.io/cms/cms/Photo/img_0_64_872_7_1.webp',
    image3: 'https://object.pscloud.io/cms/cms/Photo/img_0_64_872_5_1.webp',
    link: 'https://kaspi.kz/shop/p/apple-ipad-pro-2022-11-256gb-wi-fi-seryi-107276752/?c=750000000#!/item',
    rating: 5.0,
  },
  {
    id: 9,
    name: 'Apple AirPods Max',
    price: 845.4,
    description: `Наушники Apple AirPods Max серебристый`,
    image1:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0f/h18/33524667154462/apple-airpods-max-serebristyj-100949286-1-Container.jpg',
    image2:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h11/h59/33524671447070/apple-airpods-max-serebristyj-100949286-2-Container.jpg',
    image3:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0f/h18/33524667154462/apple-airpods-max-serebristyj-100949286-1-Container.jpg',
    link: 'https://kaspi.kz/shop/p/apple-airpods-max-serebristyi-100949286/?c=750000000#!/item',
    rating: 5.0,
  },
  {
    id: 10,
    name: 'Sony PlayStation 5',
    price: 742.7,
    description: `Игровая приставка Sony PlayStation 5 белый`,
    image1:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd1/hbe/49348562681886/sony-playstation-5-belyj-100746577-1-Container.jpg',
    image2:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h80/h7d/33035116019742/sony-playstation-5-belyj-100746577-4-Container.jpg',
    image3:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hca/h70/33035111104542/sony-playstation-5-belyj-100746577-2-Container.jpg',
    link: 'https://kaspi.kz/shop/p/sony-playstation-5-belyi-100746577/?c=750000000#!/item',
    rating: 5.0,
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
