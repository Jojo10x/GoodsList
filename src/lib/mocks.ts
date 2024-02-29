import { Product, Review, User, Company } from "./types";

export const users: User[] = [
  { id: "e4644f87-94df-40ff-80e5-15831d28873a", name: "Александр" },
  { id: "db05b87a-e575-4560-9b09-301951de72dd", name: "Евгения" },
  { id: "6ae26070-4a3c-4867-a8d0-36b437eb40e2", name: "Максим" },
  { id: "8cbef307-fd45-49ce-a275-b7b98390f726", name: "Елена" },
  { id: "4f7bb96a-126f-49d3-810d-3a749073ac36", name: "Ольга" },
  { id: "bb4d6cee-5490-48f0-9619-f5c70a0db2c8", name: "Андрей" },
  { id: "4882de55-e42d-4f3c-96a7-2a36145b1033", name: "Дмитрий" },
  { id: "4d9a7fd2-a76a-4378-998a-36f60a53a9d4", name: "Надежда" },
  { id: "de1e9d13-3bbd-4716-896b-134b6434822f", name: "Ирина" },
  { id: "8c9000cb-17ec-43d1-9179-d68cffbc100a", name: "Алла" },
];

export const companies: Company[] = [
  {
    id: "b5471ceb-86a4-47e0-859d-7c3f4289d573",
    name: "SUPER",
    created: 1994,
    country: "USST",
  },
  {
    id: "f03e4e2f-e918-4602-a838-9774b324c7c3",
    name: "BEST",
    created: 2000,
    country: "Rumt",
  },
  {
    id: "23aadfe1-4a96-4da4-9444-6cb1edbdfac1",
    name: "WWW",
    created: 2010,
    country: "Ultra",
  },
  {
    id: "2896b7e5-0a08-4c06-aaed-1bbbc99f393b",
    name: "Operation",
    created: 2020,
    country: "Aasd",
  },
  {
    id: "2d578ec0-3cee-4953-ae52-197d1b1451a8",
    name: "Koald",
    created: 2015,
    country: "Qwerty",
  },
  {
    id: "1d302a01-4634-4590-addd-93f670114240",
    name: "Panda",
    created: 2010,
    country: "ASDQ",
  },
  {
    id: "f3f55fa8-0e55-428e-8e13-15de0184795c",
    name: "Machine",
    created: 2005,
    country: "Laplandia",
  },
  {
    id: "9b0dcaa7-eac4-4dea-b94d-bafb7824580a",
    name: "Nikola",
    created: 2023,
    country: "ASDQ",
  },
  {
    id: "c0ca926e-3005-49a1-a572-37df489a3ac4",
    name: "Solana",
    created: 2010,
    country: "Albask",
  },
  {
    id: "cda32ce5-eb00-46b0-9f53-41aebaf3e62a",
    name: "Valenxa",
    created: 2007,
    country: "Koreandr",
  },
];

export const products: Product[] = [
  {
    id: 1,
    companyId: "b5471ceb-86a4-47e0-859d-7c3f4289d573",
    reviewIds: [],
    name: "Холодильник SuperCool",
    description:
      "Продвинутый холодильник с технологией автоматической разморозки и системой контроля температуры.",
  },
  {
    id: 2,
    companyId: "f03e4e2f-e918-4602-a838-9774b324c7c3",
    reviewIds: [],
    name: "4K Телевизор UltraVision",
    description:
      "Современный телевизор с высоким разрешением 4K и встроенной системой умного телевидения.",
  },
  {
    id: 3,
    companyId: "23aadfe1-4a96-4da4-9444-6cb1edbdfac1",
    reviewIds: [],
    name: "Смартфон Galaxy Z",
    description:
      "Мощный смартфон с продвинутой камерой, высокой производительностью и большим дисплеем.",
  },
  {
    id: 4,
    companyId: "2896b7e5-0a08-4c06-aaed-1bbbc99f393b",
    reviewIds: [],
    name: "Ноутбук ProBook X3",
    description:
      "Универсальный ноутбук с поворотным экраном, высокой производительностью и долгим временем автономной работы.",
  },
  {
    id: 5,
    companyId: "2d578ec0-3cee-4953-ae52-197d1b1451a8",
    reviewIds: ["3a444249-dd96-48cb-8433-361ea7d48fab"],
    name: "Кофемашина CoffeeMaster",
    description:
      "Профессиональная кофемашина с автоматическим приготовлением разнообразных кофейных напитков.",
  },
  {
    id: 6,
    companyId: "1d302a01-4634-4590-addd-93f670114240",
    reviewIds: ["2a447206-211c-4cb7-beab-f7b0bec27ee0"],
    name: "Микроволновка Chef's Choice",
    description:
      "Современная микроволновая печь с разнообразными режимами приготовления и стильным дизайном.",
  },
  {
    id: 7,
    companyId: "f3f55fa8-0e55-428e-8e13-15de0184795c",
    reviewIds: ["d33c7549-4e34-4c17-82ef-153c1073d9d1"],
    name: "Утюг IronSteam Pro",
    description:
      "Мощный утюг с парогенератором и функцией поддержания оптимальной температуры для различных тканей.",
  },
  {
    id: 8,
    companyId: "9b0dcaa7-eac4-4dea-b94d-bafb7824580a",
    reviewIds: [],
    name: "Фитнес-браслет FitnessTracker 500",
    description:
      "Умный фитнес-браслет с множеством функций для отслеживания активности и состояния здоровья.",
  },
  {
    id: 9,
    companyId: "c0ca926e-3005-49a1-a572-37df489a3ac4",
    reviewIds: [],
    name: "Блендер PowerBlend",
    description:
      "Мощный блендер для приготовления смузи, коктейлей и других напитков из свежих фруктов и овощей.",
  },
  {
    id: 10,
    companyId: "cda32ce5-eb00-46b0-9f53-41aebaf3e62a",
    reviewIds: [],
    name: "Пылесос CleanPro Ultra",
    description:
      "Мощный пылесос с системой фильтрации HEPA и различными насадками для уборки различных поверхностей.",
  },
];

export const reviews: Review[] = [
  {
    userId: "e4644f87-94df-40ff-80e5-15831d28873a",
    id: "3a444249-dd96-48cb-8433-361ea7d48fab",
    text: "Отличный кофе, всем рекомендую!",
  },
  {
    userId: "8cbef307-fd45-49ce-a275-b7b98390f726",
    id: "2a447206-211c-4cb7-beab-f7b0bec27ee0",
    text: "Микроволновка работает на ура!",
  },
  {
    userId: "bb4d6cee-5490-48f0-9619-f5c70a0db2c8",
    id: "d33c7549-4e34-4c17-82ef-153c1073d9d1",
    text: "Отличный утюг, не жалею о покупке.",
  },
];
