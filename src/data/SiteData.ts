import moriBlendImage from "../assets/mori-blend.png";
import matchaLatteImage from "../assets/matcha-latte.png";
import konomiTartImage from "../assets/konomi-tart.png";

export type Feature = {
  title: string;
  text: string;
};

export type MenuItem = {
  name: string;
  description: string;
  price: string;
  detail: string;
  ingredients: string;
  recommendation: string;
  badge?: string;
};

export const features: Feature[] = [
  {
    title: "森林浴で深呼吸",
    text: "木々の香りとやわらかな光に包まれながら、心と体をゆっくり整える時間を過ごせます。",
  },
  {
    title: "こだわりのカフェ時間",
    text: "自然を感じる店内で、ハンドドリップコーヒーや季節のスイーツを楽しめます。",
  },
  {
    title: "週末の小さなご褒美に",
    text: "忙しい日常から少し離れて、静かな森とやさしい一杯でリラックスしませんか。",
  },
];

export const menuItems: MenuItem[] = [
  {
    name: "森のブレンド",
    description: "やわらかな香りとすっきりした後味のオリジナルコーヒー",
    price: "¥580",
    detail: "中深煎りの豆を使用した定番ブレンド",
    ingredients: "コーヒー豆 / お湯",
    recommendation: "朝や読書時間におすすめ",
    badge: "定番人気",
  },
  {
    name: "抹茶ラテ",
    description: "やさしい甘さとクリーミーな口当たり",
    price: "¥650",
    detail: "抹茶とミルクのバランスが絶妙",
    ingredients: "抹茶 / ミルク / 砂糖",
    recommendation: "午後の休憩におすすめ",
    badge: "人気No.1",
  },
  {
    name: "木の実タルト",
    description: "ナッツの香ばしさと果物の甘さが楽しめるスイーツ",
    price: "¥720",
    detail: "くるみとベリーとアーモンドを使用",
    ingredients: "くるみ / ベリー / アーモンド / バター",
    recommendation: "コーヒーと相性抜群",
    badge: "季節おすすめ",
  },
];

export const menuImages: Record<string, string> = {
  "森のブレンド": moriBlendImage,
  "抹茶ラテ": matchaLatteImage,
  "木の実タルト": konomiTartImage,
};