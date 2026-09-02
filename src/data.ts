import {
  BenefitItem,
  BonusItem,
  RecipeCategoryItem,
  EbookSampleItem,
  RecipeSampleItem,
  TargetAudienceItem,
  BeforeAfterItem,
  TestimonialItem,
  FAQItem
} from './types';

export const HERO_BULLETS = [
  "100 recettes détaillées et testées pas à pas",
  "Des classiques familiaux aux desserts de haute pâtisserie",
  "Accès numérique instantané à vie sur smartphone, tablette & PC",
  "8 bonus exclusifs offerts d'une valeur de plus de 280 €"
];

export const TRUST_POINTS = [
  { label: "100 Recettes", desc: "Une collection gourmande complète", icon: "BookOpen" },
  { label: "Accès Immédiat", desc: "Disponible dans votre boîte mail", icon: "Zap" },
  { label: "Tous Écrans", desc: "Mobile, Tablette & Ordinateur", icon: "Smartphone" },
  { label: "Garantie 7 Jours", desc: "100% Satisfait ou Remboursé", icon: "ShieldCheck" }
];

export const PROBLEM_CARDS = [
  {
    id: "prob-1",
    question: "Vous préparez toujours les mêmes desserts ?",
    description: "La routine s'installe vite en cuisine. On refait sans cesse le même gâteau au yaourt ou la même mousse, par manque d'idées neuves et fiables.",
    icon: "RotateCcw"
  },
  {
    id: "prob-2",
    question: "Vous cherchez une recette sans savoir laquelle choisir ?",
    description: "Perdre des heures sur Google ou Pinterest face à des recettes douteuses, mal proportionnées ou truffées d'ingrédients introuvables.",
    icon: "SearchX"
  },
  {
    id: "prob-3",
    question: "Vous aimeriez impressionner votre famille ou vos invités ?",
    description: "Envie de susciter ce fameux 'Wouah !' au moment du dessert lors des déjeuners du dimanche ou des repas de fête sans stresser.",
    icon: "Sparkles"
  },
  {
    id: "prob-4",
    question: "Vous avez envie de découvrir de nouvelles idées gourmandes ?",
    description: "Varier les plaisirs sucrés, tester des associations audacieuses et régaler les petits comme les grands au quotidien.",
    icon: "HeartHandshake"
  }
];

export const PRODUCT_HIGHLIGHTS = [
  "100 recettes de pâtisserie et desserts expliquées simplement",
  "Des recettes très variées : gâteaux, tartes, crèmes, chocolat, fruits, viennoiseries",
  "Des idées gourmandes pour toutes les occasions (goûters, dîners, anniversaires, fêtes)",
  "Des recettes adaptées à différents niveaux, du grand débutant au passionné",
  "Une immense source d'inspiration quotidienne directement sous la main",
  "Consultation numérique fluide sur smartphone, tablette et ordinateur",
  "Fiches recettes claires, lisibles et prêtes à être imprimées"
];

export const RECIPE_CATEGORIES: RecipeCategoryItem[] = [
  {
    id: "cat-1",
    name: "Gâteaux Moelleux & Gourmands",
    emoji: "🍰",
    tag: "GÂTEAUX",
    description: "Des gâteaux moelleux, généreux et parfaits pour le goûter, le petit-déjeuner ou les réunions de famille.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
    recipesCount: "130+ Recettes"
  },
  {
    id: "cat-2",
    name: "L'Univers du Chocolat",
    emoji: "🍫",
    tag: "CHOCOLAT",
    description: "Brownies ultra fondants, cœurs coulants, truffes intenses, ganaches et créations irrésistibles pour vrais amateurs.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
    recipesCount: "150+ Recettes"
  },
  {
    id: "cat-3",
    name: "Cookies, Sablés & Biscuits",
    emoji: "🍪",
    tag: "COOKIES & BISCUITS",
    description: "Des textures croustillantes à l'extérieur et fondantes à cœur, faciles et rapides à préparer pour toutes les envies.",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80",
    recipesCount: "110+ Recettes"
  },
  {
    id: "cat-4",
    name: "Tartes Salivantes & Tartelettes",
    emoji: "🥧",
    tag: "TARTES",
    description: "Des grands classiques de la pâtisserie française aux créations contemporaines aux fruits et au chocolat.",
    image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=800&q=80",
    recipesCount: "120+ Recettes"
  },
  {
    id: "cat-5",
    name: "Desserts Frais aux Fruits",
    emoji: "🍓",
    tag: "DESSERTS AUX FRUITS",
    description: "Fraises, framboises, agrumes, pommes et fruits exotiques pour des douceurs légères, colorées et équilibrées.",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80",
    recipesCount: "95+ Recettes"
  },
  {
    id: "cat-6",
    name: "Crèmes, Mousses & Verrines",
    emoji: "🍮",
    tag: "CRÈMES & MOUSSES",
    description: "Des textures soyeuses, légères et aériennes pour terminer un bon repas sur une note de pure gourmandise.",
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80",
    recipesCount: "90+ Recettes"
  },
  {
    id: "cat-7",
    name: "Crêpes, Gaufres & Pancakes",
    emoji: "🥞",
    tag: "CRÊPES & GAUFRES",
    description: "Pâtes parfaites sans grumeaux, garnitures maison, sauces caramel beurre salé et douceurs de brunch.",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=800&q=80",
    recipesCount: "75+ Recettes"
  },
  {
    id: "cat-8",
    name: "Viennoiseries & Brioches",
    emoji: "🥐",
    tag: "VIENNOISERIES",
    description: "Brioches filantes, pains au chocolat dorés, croissants croustillants et chaussons dorés au four.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80",
    recipesCount: "80+ Recettes"
  },
  {
    id: "cat-9",
    name: "Desserts Rapides Sans Cuisson",
    emoji: "🍨",
    tag: "SANS CUISSON",
    description: "Cheesecakes express, parfaits glacés, tiramisus crémeux et carpaccios de fruits sans allumer le four.",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80",
    recipesCount: "85+ Recettes"
  },
  {
    id: "cat-10",
    name: "Fêtes & Grandes Occasions",
    emoji: "🎉",
    tag: "OCCASIONS SPÉCIALES",
    description: "Entremets festifs, bûches de Noël, gâteaux d'anniversaire étagés et pièces maîtresses spectaculaires.",
    image: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=800&q=80",
    recipesCount: "90+ Recettes"
  }
];

export const EBOOK_SAMPLES: EbookSampleItem[] = [
  {
    id: "eb-1",
    volumeNumber: "LIVRE PRINCIPAL",
    title: "100 Recettes de Pâtisseries & Desserts",
    subtitle: "Gâteaux, tartes, crèmes, viennoiseries et desserts incontournables expliqués pas à pas",
    tag: "COLLECTION COMPLÈTE",
    category: "Livre Principal",
    coverImage: "https://i.ibb.co/Nd8yP7Gw/00-Principal-pagina-22.jpg",
    recipesCount: "100 Fiches Recettes",
    pages: "Fiches PDF HD",
    highlightRecipes: ["Gâteaux moelleux & cakes d'antan", "Tartes croustillantes et garnitures", "Desserts familiaux & viennoiseries"]
  },
  {
    id: "eb-2",
    volumeNumber: "BONUS 01",
    title: "Masterclass de Pâtisserie Française",
    subtitle: "Les techniques fondamentales, secrets de texture et gestes précis des grands chefs",
    tag: "MASTERCLASS CHEFS",
    category: "Techniques Professionnelles",
    coverImage: "https://i.ibb.co/S4545KxQ/01-Masterclass-pagina-67.jpg",
    recipesCount: "Masterclass Complète",
    pages: "Guide Illustré HD",
    highlightRecipes: ["Techniques de cuisson & gestes pros", "Secrets de texture des maîtres pâtissiers", "Conseils pratiques inratables"]
  },
  {
    id: "eb-3",
    volumeNumber: "BONUS 02",
    title: "L’Excellence de la Pâtisserie Française",
    subtitle: "Recettes professionnelles et créations de haut niveau adaptées à votre cuisine",
    tag: "EXCELLENCE & CRÉATIONS",
    category: "Haute Pâtisserie",
    coverImage: "https://i.ibb.co/LzH6QVct/02-Excellence-pagina-61.jpg",
    recipesCount: "Recettes de Chefs",
    pages: "Édition Prestige HD",
    highlightRecipes: ["Entremets d'exception & finitions", "Ganaches soyeuses & crèmes signatures", "Dressages contemporains de boutique"]
  },
  {
    id: "eb-4",
    volumeNumber: "BONUS 02 • SUITE",
    title: "Créations & Dressages d’Excellence",
    subtitle: "Leçons de dressage, finitions de précision et pas à pas des pièces maîtresses",
    tag: "CRÉATIONS & DRESSAGES",
    category: "Haute Pâtisserie",
    coverImage: "https://i.ibb.co/NdPSJDgY/02-Excellence-pagina-85.jpg",
    recipesCount: "Créations Uniques",
    pages: "Grand Format HD",
    highlightRecipes: ["Finitions miroir et velours", "Montages de précision pas à pas", "Équilibres subtils de saveurs"]
  },
  {
    id: "eb-5",
    volumeNumber: "BONUS 03",
    title: "Les Grands Classiques de la Pâtisserie Française",
    subtitle: "Le savoir-faire et l’exigence intemporels inspirés de l’École Lenôtre",
    tag: "SAVOIR-FAIRE LENÔTRE",
    category: "Tradition & Prestige",
    coverImage: "https://i.ibb.co/Hp1dNNX8/03-Classiques-Lenotre-pagina-61.jpg",
    recipesCount: "Classiques Français",
    pages: "Savoir-Faire Lenôtre",
    highlightRecipes: ["Pâte feuilletée & millefeuilles parfaits", "Paris-Brest & pâte à choux aérienne", "Saint-Honoré & éclairs traditionnels"]
  },
  {
    id: "eb-6",
    volumeNumber: "BONUS 06",
    title: "La Bible des Macarons & Mignardises",
    subtitle: "Macarons inratables aux collerettes parfaites, financiers, madeleines et mignardises",
    tag: "MACARONS & MIGNARDISES",
    category: "Mignardises & Biscuits",
    coverImage: "https://i.ibb.co/CstFQvp2/06-Macarons-pagina-170.jpg",
    recipesCount: "Guide Complet Macarons",
    pages: "Guide Pas à Pas HD",
    highlightRecipes: ["Collerettes parfaites & ganaches montées", "Financiers noisette & madeleines dorées", "Cannelés croustillants & mignardises"]
  }
];

export const RECIPE_SAMPLES: RecipeSampleItem[] = [
  {
    id: "rec-1",
    title: "Fondant au Chocolat Cœur Coulant",
    category: "Chocolat Grand Cru",
    prepTime: "15 min",
    cookTime: "10 min",
    difficulty: "Très Facile",
    servings: "4 personnes",
    description: "L'incontournable classique avec une croûte délicate et un cœur de chocolat noir intensément coulant et chaud.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
    ingredients: [
      "200g de chocolat noir 70%",
      "100g de beurre doux",
      "3 œufs entiers extra-frais",
      "60g de sucre de canne blond",
      "40g de farine de blé T55",
      "1 pincée de fleur de sel de Guérande"
    ],
    steps: [
      "Faire fondre doucement le chocolat et le beurre coupés en morceaux au bain-marie.",
      "Dans un bol, fouetter énergiquement les œufs et le sucre jusqu'à ce que le mélange blanchisse.",
      "Incorporer le chocolat fondu tiédi, puis ajouter la farine tamisée et la fleur de sel.",
      "Verser dans 4 ramequins beurrés et farinés, puis enfourner 9 à 11 minutes à 200°C.",
      "Déguster dès la sortie du four accompagné d'une boule de glace vanille."
    ],
    chefTip: "Pour un cœur encore plus surprenant, insérez un carré de chocolat praliné ou une noisette de pâte à tartiner congelée au centre avant d'enfourner.",
    badge: "⭐ Coup de Cœur"
  },
  {
    id: "rec-2",
    title: "Tarte Fine aux Fraises Gariguette & Pistache",
    category: "Tartes & Fruits",
    prepTime: "25 min",
    cookTime: "20 min",
    difficulty: "Facile",
    servings: "6 personnes",
    description: "Une pâte sablée pur beurre croustillante, surmontée d'une crème mousseline parfumée à la pistache d'Italie et de fraises fraîches parfumées.",
    image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=800&q=80",
    ingredients: [
      "1 pâte sablée vanillée maison",
      "400g de fraises Gariguette fraîches",
      "250ml de lait entier",
      "2 jaunes d'œufs",
      "50g de sucre fin",
      "25g de fécule de maïs",
      "35g de pâte de pistache pure",
      "Pistaches concassées torréfiées"
    ],
    steps: [
      "Foncer un cercle à tarte et cuire la pâte sablée à blanc à 170°C pendant 18-20 minutes.",
      "Préparer la crème pâtissière en fouettant les jaunes, le sucre, la fécule et le lait chaud.",
      "Hors du feu, incorporer la pâte de pistache et laisser refroidir filmé au contact.",
      "Garnir le fond de tarte refroidi de crème pistache lissée.",
      "Dresser harmonieusement les fraises coupées en deux et parsemer d'éclats de pistache."
    ],
    chefTip: "Passez un léger coup de pinceau imbibé de gelée de framboise tiède sur les fraises pour leur donner un éclat miroir digne des vitrines parisiennes.",
    badge: "🍓 Fraîcheur & Élégance"
  },
  {
    id: "rec-3",
    title: "Cheesecake Vanille Bourbon & Coulis de Framboises",
    category: "Sans Cuisson & Crémeux",
    prepTime: "20 min",
    cookTime: "Sans cuisson (4h repos)",
    difficulty: "Facile",
    servings: "8 personnes",
    description: "Texture d'un velouté incomparable sur une base biscuitée pur spéculoos croustillante, sublimée par l'acidité naturelle des framboises fraîches.",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80",
    ingredients: [
      "200g de biscuits spéculoos ou sablés",
      "80g de beurre fondu",
      "450g de fromage frais type Philadelphia",
      "200ml de crème liquide entière 35% MG bien froide",
      "75g de sucre glace",
      "1 gousse de vanille Bourbon de Madagascar",
      "200g de framboises fraîches pour le coulis"
    ],
    steps: [
      "Mixer les spéculoos, mélanger avec le beurre fondu et tasser au fond d'un moule à charnière.",
      "Monter la crème liquide bien froide en chantilly ferme avec le sucre glace et les grains de vanille.",
      "Détendre le cream cheese au batteur, puis incorporer délicatement la chantilly vanillée.",
      "Étaler la préparation sur le fond biscuité et lisser à la spatule.",
      "Placer au réfrigérateur au moins 4 heures (idéalement toute la nuit) avant de napper de coulis."
    ],
    chefTip: "Pour un démoulage parfait, passez délicatement la lame d'un couteau préalablement chauffée sous l'eau chaude tout autour du cercle.",
    badge: "✨ Succès Garanti"
  },
  {
    id: "rec-4",
    title: "Paris-Brest Praliné Noisettes du Piémont",
    category: "Haute Pâtisserie",
    prepTime: "40 min",
    cookTime: "35 min",
    difficulty: "Intermédiaire",
    servings: "6 personnes",
    description: "Couronne de pâte à choux croustillante parsemée d'amandes effilées, généreusement garnie d'une crème mousseline pralinée intense et fondante.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    ingredients: [
      "125ml d'eau + 125ml de lait",
      "100g de beurre doux",
      "150g de farine tamisée",
      "4 œufs entiers",
      "Amandes effilées",
      "Crème mousseline au praliné noisette maison 50%",
      "Sucre glace pour la finition"
    ],
    steps: [
      "Réaliser la pâte à choux, dresser en couronne à la poche à douille et parsemer d'amandes.",
      "Cuire à 180°C pendant 35 minutes sans ouvrir la porte du four.",
      "Préparer la crème mousseline pralinée en fouettant beurre pommade et crème pâtissière pralinée.",
      "Couper la couronne de choux refroidie en deux dans l'épaisseur.",
      "Pocher de généreuses rosaces de crème mousseline et refermer le chapeau avant de saupoudrer de sucre glace."
    ],
    chefTip: "Ajoutez un filet de praliné pur coulant au cœur de chaque rosace de crème pour une explosion gourmande à la dégustation.",
    badge: "👑 Grand Classique Français"
  },
  {
    id: "rec-5",
    title: "Macarons Parisiens Ganache Vanille Madagascar",
    category: "Petites Douceurs",
    prepTime: "35 min",
    cookTime: "14 min",
    difficulty: "Intermédiaire",
    servings: "20 pièces",
    description: "Coques lisses, brillantes avec une collerette parfaite, garnies d'une ganache montée soyeuse infusée aux gousses de vanille de Madagascar.",
    image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=800&q=80",
    ingredients: [
      "150g de poudre d'amandes extra-fine",
      "150g de sucre glace",
      "110g de blancs d'œufs vieillis",
      "150g de sucre en poudre pour le sirop",
      "Ganache chocolat blanc et vanille bourbon"
    ],
    steps: [
      "Tamiser finement la poudre d'amandes et le sucre glace (le tant-pour-tant).",
      "Réaliser la meringue italienne en versant le sirop de sucre à 118°C sur les blancs montés.",
      "Macaronner avec la maryse jusqu'à l'obtention d'un ruban brillant et fluide.",
      "Pocher sur tapis de cuisson et enfourner à 145°C pendant 14 minutes.",
      "Garnir les coques refroidies et conserver au frais 24h avant dégustation."
    ],
    chefTip: "Le secret absolu du macaron réside dans le repos de 24h au frais : l'humidité de la ganache pénètre le biscuit pour lui donner sa texture irrésistible.",
    badge: "💎 Bijou de Pâtisserie"
  },
  {
    id: "rec-6",
    title: "Crème Brûlée Traditionnelle Vanille Bourbon",
    category: "Crèmes & Desserts",
    prepTime: "15 min",
    cookTime: "45 min",
    difficulty: "Très Facile",
    servings: "4 personnes",
    description: "Le contraste magique entre une fine couche de caramel craquant tiède et une crème onctueuse parfumée aux grains de vanille.",
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80",
    ingredients: [
      "5 jaunes d'œufs",
      "500ml de crème liquide entière 30%",
      "70g de sucre semoule",
      "1 belle gousse de vanille Bourbon",
      "Cassonade pure canne pour caraméliser"
    ],
    steps: [
      "Faire infuser la crème liquide chaude avec la gousse de vanille fendue et grattée 15 minutes.",
      "Fouetter les jaunes et le sucre sans faire mousser.",
      "Verser la crème tiède filtrée sur le mélange d'œufs en remuant doucement.",
      "Répartir dans des plats à crème brûlée et cuire au bain-marie à 100°C pendant 45 minutes.",
      "Laisser refroidir, saupoudrer de cassonade et caraméliser au chalumeau juste avant de servir."
    ],
    chefTip: "Ne brûlez le sucre qu'au tout dernier moment pour garantir un craquant parfait sous la cuillère.",
    badge: "🥄 Plaisir Régressif"
  },
  {
    id: "rec-7",
    title: "Brownie Américain Fèves de Cacao & Noix de Pécan",
    category: "Chocolat",
    prepTime: "15 min",
    cookTime: "22 min",
    difficulty: "Très Facile",
    servings: "8 parts",
    description: "Croûte craquelée brillante, texture dense ultra fondante (fudgy) et croquant torréfié des noix de pécan entières.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
    ingredients: [
      "250g de chocolat noir 65%",
      "150g de beurre doux",
      "3 œufs",
      "130g de sucre de canne",
      "70g de farine",
      "100g de noix de pécan torréfiées",
      "Fleur de sel"
    ],
    steps: [
      "Fondre chocolat et beurre au bain-marie.",
      "Battre œufs et sucre au fouet jusqu'à consistance mousseuse.",
      "Mélanger délicatement, ajouter la farine et 80% des noix de pécan.",
      "Verser dans un moule carré chemisé, déposer le reste des noix sur le dessus.",
      "Cuire 20 à 22 min à 175°C. La pointe d'un couteau doit ressortir avec des miettes humides."
    ],
    chefTip: "Laissez le brownie refroidir complètement au réfrigérateur 2 heures avant de le couper en carrés nets et impeccables.",
    badge: "🔥 100% Gourmand"
  },
  {
    id: "rec-8",
    title: "Mille-Feuille Croustillant Caramélisé & Vanille",
    category: "Haute Pâtisserie",
    prepTime: "45 min",
    cookTime: "25 min",
    difficulty: "Pâtissier",
    servings: "6 parts",
    description: "Trois couches de feuilletage inversé caramélisé au sucre glace, alternées avec une crème diplomate vanillée riche et aérienne.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    ingredients: [
      "1 rouleau de pâte feuilletée pur beurre de qualité",
      "Sucre glace pour caramélisation",
      "400ml de crème diplomate à la vanille",
      "Framboises fraîches pour le décor"
    ],
    steps: [
      "Étaler la pâte feuilletée, la piquer et la cuire entre deux plaques de cuisson à 190°C.",
      "En fin de cuisson, saupoudrer de sucre glace et caraméliser à 220°C pendant 3-4 minutes.",
      "Découper des rectangles réguliers à l'aide d'un couteau scie.",
      "Pocher la crème diplomate sur le premier rectangle, recouvrir du second, pocher à nouveau et déposer le chapeau.",
      "Servir dressé sur la tranche pour une découpe facile sans écraser la crème."
    ],
    chefTip: "Dresser le mille-feuille sur la tranche permet à vos convives de le couper facilement à la fourchette sans faire déborder la crème.",
    badge: "⭐ Signature Française"
  }
];

export const BENEFITS: BenefitItem[] = [
  {
    id: "ben-1",
    title: "Trouver facilement une nouvelle idée chaque jour",
    description: "Fini la panne d'inspiration ! En ouvrant votre collection, trouvez en quelques secondes le dessert idéal selon le contenu de vos placards.",
    icon: "Sparkles"
  },
  {
    id: "ben-2",
    title: "Varier les plaisirs et les desserts de la famille",
    description: "Proposez chaque semaine des douceurs différentes : gâteaux moelleux, tartes parfumées, crèmes soyeuses ou biscuits croquants.",
    icon: "Heart"
  },
  {
    id: "ben-3",
    title: "Épater vos invités sans passer des heures aux fourneaux",
    description: "Des présentations soignées, des textures maîtrisées et des saveurs équilibrées qui récolteront tous les compliments à table.",
    icon: "Smile"
  },
  {
    id: "ben-4",
    title: "Progresser pas à pas en pâtisserie chez vous",
    description: "Des explications simples, des temps de cuisson précis et des astuces de chefs pour réussir vos préparations dès le premier essai.",
    icon: "TrendingUp"
  },
  {
    id: "ben-5",
    title: "Avoir toujours une recette sous la main sur tous vos appareils",
    description: "Accédez à vos fiches sur votre téléphone dans la cuisine, sur votre tablette ou imprimez les recettes que vous préférez annoter.",
    icon: "Smartphone"
  },
  {
    id: "ben-6",
    title: "Un investissement unique sans abonnement caché",
    description: "Payez une seule fois aujourd'hui et profitez de l'intégralité de la collection à vie, avec tous les bonus inclus sans frais additionnels.",
    icon: "CheckCircle"
  }
];

export const TARGET_AUDIENCE: TargetAudienceItem[] = [
  {
    id: "aud-1",
    title: "Débutants en Pâtisserie",
    subtitle: "Des bases saines et des succès immédiats",
    description: "Des recettes simples, détaillées pas à pas sans jargon complexe, pour réussir de superbes desserts dès le premier essai sans matériel coûteux.",
    icon: "Smile",
    bullet: "✓ Recettes claires avec ingrédients faciles à trouver"
  },
  {
    id: "aud-2",
    title: "Passionnés & Amateurs Éclairés",
    subtitle: "De nouvelles inspirations créatives",
    description: "Découvrez des techniques de chefs, des associations de textures et des créations raffinées pour renouveler votre carnet de recettes et repousser vos limites.",
    icon: "ChefHat",
    bullet: "✓ Secrets de textures, ganaches et finitions de précision"
  },
  {
    id: "aud-3",
    title: "Familles & Parents Gourmands",
    subtitle: "Des goûters sains et des moments de partage",
    description: "Des centaines d'idées de gâteaux du dimanche, biscuits pour le goûter des enfants et desserts conviviaux à préparer à quatre mains.",
    icon: "Users",
    bullet: "✓ Des desserts réconfortants qui font l'unanimité"
  },
  {
    id: "aud-4",
    title: "Amateurs de Bonnes Tables",
    subtitle: "Recevoir avec distinction",
    description: "Pour ceux qui aiment régaler leurs proches lors des dîners et apporter cette touche finale gourmande qui transforme un repas en fête.",
    icon: "Award",
    bullet: "✓ Dressages élégants et desserts de réception"
  }
];

export const BONUSES: BonusItem[] = [
  {
    id: "bon-1",
    number: 1,
    title: "Masterclass de Pâtisserie Française",
    subtitle: "Techniques, recettes et secrets de grands chefs",
    description: "Apprenez les gestes fondamentaux, les astuces professionnelles et les secrets des plus grands chefs pour maîtriser l'art de la pâtisserie à la maison.",
    originalPrice: 49,
    tag: "BONUS #1 • MASTERCLASS DE GRANDS CHEFS",
    image: "https://i.ibb.co/8D13XSj0/Chat-GPT-Image-2-de-set-de-2026-14-30-17.png",
    features: [
      "Techniques et gestes fondamentaux pas à pas",
      "Secrets de texture et de cuisson des grands chefs",
      "Conseils pratiques pour réussir à tous les coups"
    ]
  },
  {
    id: "bon-2",
    number: 2,
    title: "L’Excellence de la Pâtisserie Française",
    subtitle: "Recettes professionnelles et créations de chefs",
    description: "Des recettes d'exception et créations de haut niveau adaptées pour être facilement reproduites dans votre cuisine sans matériel inaccessible.",
    originalPrice: 45,
    tag: "BONUS #2 • EXCELLENCE & CRÉATIONS",
    image: "https://i.ibb.co/XfmptdNJ/Chat-GPT-Image-2-de-set-de-2026-14-31-57.png",
    features: [
      "Recettes professionnelles détaillées pas à pas",
      "Entremets d'exception et finitions de précision",
      "Dressages élégants dignes des grandes vitrines"
    ]
  },
  {
    id: "bon-3",
    number: 3,
    title: "Les Grands Classiques de la Pâtisserie Française",
    subtitle: "Le savoir-faire de l’École Lenôtre",
    description: "Redécouvrez les fleurons intemporels de la gastronomie sucrée française inspirés par la rigueur et le savoir-faire prestigieux de l'École Lenôtre.",
    originalPrice: 45,
    tag: "BONUS #3 • SAVOIR-FAIRE LENÔTRE",
    image: "https://i.ibb.co/S4T6WRRm/Chat-GPT-Image-2-de-set-de-2026-14-38-20.png",
    features: [
      "Millefeuilles, Paris-Brest, Saint-Honoré & éclairs",
      "Pâtes feuilletées et pâtes à choux parfaites",
      "La tradition et l'excellence de la haute pâtisserie"
    ]
  },
  {
    id: "bon-4",
    number: 4,
    title: "L’Art de la Pâtisserie aux Fruits",
    subtitle: "Plus de 70 recettes autour des fruits & dressages d’exception",
    description: "Une célébration des saveurs naturelles avec plus de 70 recettes fraîches, équilibrées et légères sublimant les fruits de chaque saison.",
    originalPrice: 39,
    tag: "BONUS #4 • +70 RECETTES AUX FRUITS",
    image: "https://i.ibb.co/M5tYNwMV/Chat-GPT-Image-2-de-set-de-2026-14-41-11.png",
    features: [
      "Tartes fines, mousses fruitées & pavlovas",
      "Compotées, coulis et inserts parfumés",
      "Desserts légers, équilibrés et vitaminés"
    ]
  },
  {
    id: "bon-5",
    number: 5,
    title: "Les Secrets des Pâtisseries de Paris",
    subtitle: "100 recettes inspirées des grandes maisons",
    description: "Une immersion gourmande au cœur de la capitale avec 100 recettes inspirées des plus illustres maisons et salons de thé parisiens.",
    originalPrice: 49,
    tag: "BONUS #5 • 100 RECETTES DE PARIS",
    image: "https://i.ibb.co/s9B24pb7/Chat-GPT-Image-2-de-set-de-2026-14-43-00.png",
    features: [
      "Recettes emblématiques des comptoirs parisiens",
      "Flans onctueux, brioches dorées & tartelettes",
      "Le goût et le chic de la capitale chez soi"
    ]
  },
  {
    id: "bon-6",
    number: 6,
    title: "La Bible des Macarons & Mignardises",
    subtitle: "Macarons, financiers, madeleines, éclairs et petites gourmandises",
    description: "Le recueil indispensable pour réussir des macarons à collerette parfaite, des financiers moelleux, madeleines à bosse et mignardises d'exception.",
    originalPrice: 39,
    tag: "BONUS #6 • MACARONS & MIGNARDISES",
    image: "https://i.ibb.co/fdkXZVcr/Chat-GPT-Image-2-de-set-de-2026-14-44-19.png",
    features: [
      "Macarons inratables aux collerettes parfaites",
      "Financiers, madeleines dorées & cannelés",
      "Mignardises et douceurs pour accompagner le café"
    ]
  }
];

export const BEFORE_AFTER: BeforeAfterItem[] = [
  {
    id: "ba-1",
    before: "Je prépare toujours les 2 ou 3 mêmes desserts par habitude et manque d'idées.",
    after: "J'ai accès à 100 recettes variées et je découvre une nouvelle gourmandise chaque jour."
  },
  {
    id: "ba-2",
    before: "Je passe des heures à chercher des recettes sur internet avec des dosages souvent imprécis.",
    after: "Je trouve en 30 secondes une fiche claire, testée, avec des proportions exactes et des temps précis."
  },
  {
    id: "ba-3",
    before: "Je ne sais jamais quoi préparer pour impressionner mes invités lors des dîners de famille.",
    after: "Je réalise facilement des desserts spectaculaires qui suscitent l'admiration de tous les convives."
  },
  {
    id: "ba-4",
    before: "J'ai peur de rater mes préparations complexes (pâtes, crèmes, ganaches, cuissons).",
    after: "Les guides techniques et astuces de chefs inclus me guident sereinement étape par étape."
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Sophie Delorme",
    location: "Lyon, France",
    role: "Maman & passionnée de pâtisserie",
    quote: "Cette collection a transformé nos week-ends en famille ! Les fiches recettes sont d'une clarté exemplaire, les proportions tombent toujours juste et le marbré au chocolat 70% est devenu le gâteau préféré de mes enfants. C'est bien plus pratique que d'avoir dix livres encombrants dans la cuisine.",
    rating: 5,
    verified: true,
    date: "Il y a 3 jours",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "test-2",
    name: "Marc Vandamme",
    location: "Bruxelles, Belgique",
    role: "Amateur de grands classiques",
    quote: "Le bonus sur les crèmes et garnitures à lui seul vaut de l'or ! J'ai enfin réussi mon premier Paris-Brest et des macarons à la vanille avec une collerette parfaite sans stresser. Avoir toutes ces fiches ouvertes sur ma tablette posée sur le plan de travail est un vrai bonheur.",
    rating: 5,
    verified: true,
    date: "Il y a 5 jours",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "test-3",
    name: "Éléonore Chassagne",
    location: "Genève, Suisse",
    role: "Débutante devenue passionnée",
    quote: "J'avais toujours peur de rater mes pâtes ou mes cuissons. Grâce aux explications pas à pas et aux astuces de chef, tout devient limpide et inratable dès le premier essai. Mes invités n'en revenaient pas quand j'ai servi la tarte meringuée au citron !",
    rating: 5,
    verified: true,
    date: "Il y a 1 semaine",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "test-4",
    name: "Julien Tremblay",
    location: "Montréal, Canada",
    role: "Hôte et grand gourmand",
    quote: "Recevoir des amis pour le dîner est devenu un jeu d'enfant. J'ai préparé la Pavlova aux fruits rouges et le fondant cœur coulant le week-end dernier : un succès total, tout le monde m'a demandé le secret ! Un achat que je recommande à 2000%.",
    rating: 5,
    verified: true,
    date: "Il y a 10 jours",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "test-5",
    name: "Camille Moreau",
    location: "Bordeaux, France",
    role: "Cuisinière du quotidien",
    quote: "La diversité des 100 recettes et la générosité des 6 bonus gratuits sont exceptionnelles. En 2 minutes le soir, je trouve une recette rapide ou un classique réconfortant avec les ingrédients de mon placard. Le meilleur investissement gourmand !",
    rating: 5,
    verified: true,
    date: "Il y a 2 semaines",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Comment vais-je recevoir ma collection ?",
    answer: "Dès votre commande validée, vous recevez instantanément un e-mail contenant vos identifiants et le lien d'accès sécurisé pour consulter et télécharger l'ensemble de la collection et des 6 bonus sur tous vos appareils."
  },
  {
    id: "faq-2",
    question: "Est-ce un produit physique ou numérique ?",
    answer: "Il s'agit d'une collection 100% numérique en haute définition. Vous pouvez la consulter immédiatement sur smartphone, tablette ou ordinateur, et imprimer facilement les fiches recettes de votre choix."
  },
  {
    id: "faq-3",
    question: "Puis-je consulter les recettes sur mon téléphone ?",
    answer: "Oui, absolument ! Tous les fichiers sont optimisés pour une lecture confortable et fluide sur tous les smartphones (iPhone, Android), tablettes (iPad, etc.) et ordinateurs (Mac, PC)."
  },
  {
    id: "faq-4",
    question: "Les recettes conviennent-elles aux débutants ?",
    answer: "Tout à fait. Les recettes indiquent clairement le niveau de difficulté, le temps de préparation et les étapes détaillées pas à pas. Vous trouverez des centaines de recettes ultra faciles ainsi que des créations plus élaborées pour progresser à votre rythme."
  },
  {
    id: "faq-5",
    question: "Combien de recettes sont incluses ?",
    answer: "La collection principale regroupe 100 recettes de pâtisserie et de desserts organisées par grandes catégories. De plus, les 6 bonus exclusifs offerts ajoutent des dizaines d'autres fiches, techniques et guides de maîtres pâtissiers."
  },
  {
    id: "faq-6",
    question: "Que contiennent les 6 bonus ?",
    answer: "Les 6 bonus exclusifs couvrent des univers d'exception : Masterclass de Pâtisserie Française, L’Excellence de la Pâtisserie Française, Les Grands Classiques (École Lenôtre), L’Art de la Pâtisserie aux Fruits (+70 recettes), Les Secrets des Pâtisseries de Paris (100 recettes), et La Bible des Macarons & Mignardises."
  },
  {
    id: "faq-7",
    question: "Quand vais-je recevoir mon accès ?",
    answer: "L'accès est immédiat ! Dès la confirmation de votre paiement sécurisé, vous êtes automatiquement redirigé vers votre espace de téléchargement et recevez une copie par e-mail en moins de 60 secondes."
  },
  {
    id: "faq-8",
    question: "Puis-je conserver les fichiers à vie ?",
    answer: "Oui. Une fois les fichiers téléchargés, ils vous appartiennent pour toujours. Il n'y a aucun abonnement récurrent, aucun frais mensuel et aucune limite dans le temps."
  },
  {
    id: "faq-9",
    question: "Comment fonctionne la garantie de 7 jours ?",
    answer: "Vous bénéficiez d'une garantie inconditionnelle 'Satisfait ou Remboursé' de 7 jours. Si pour quelque raison que ce soit la collection ne correspond pas à vos attentes, il vous suffit de nous envoyer un simple e-mail pour être remboursé(e) intégralement, sans justification."
  }
];
