import hrira from "./assets/hrira.jpg";
import brk from "./assets/brk.jpg";
import psl from "./assets/psul.jpg";

export const items = [
  {
    id: crypto.randomUUID(),
    title: "وجبة عشاء",
    description: "وصف الوجبة",
    price: "1300 دج",
    category: "افطار",
    image: hrira,
  },
  {
    id: crypto.randomUUID(),
    title: "وجبة غداء",
    description: "وصف الوجبة",
    price: "1100 دج",
    category: "افطار",
    image: brk,
  },
  {
    id: crypto.randomUUID(),
    title: "وجبة افطار",
    description: "وصف الوجبة",
    price: "2500 دج",
    category: "افطار",
    image: psl,
  },
  {
    id: crypto.randomUUID(),
    title: "وجبة تحلية",
    description: "وصف الوجبة",
    price: "3200 دج",
    category: "افطار",
    image: brk,
  },
  {
    id: crypto.randomUUID(),
    title: "وجبة عشاء",
    description: "وصف الوجبة",
    price: "800 دج",
    category: "افطار",
    image: hrira,
  },
];
