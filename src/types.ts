export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface BonusItem {
  id: string;
  number: number;
  title: string;
  subtitle?: string;
  description: string;
  originalPrice: number;
  tag: string;
  image: string;
  features?: string[];
}

export interface RecipeCategoryItem {
  id: string;
  name: string;
  emoji: string;
  tag: string;
  description: string;
  image: string;
  recipesCount: string;
}

export interface EbookSampleItem {
  id: string;
  volumeNumber: string;
  title: string;
  subtitle: string;
  tag: string;
  category: string;
  coverImage: string;
  recipesCount: string;
  pages: string;
  highlightRecipes: string[];
}

export interface RecipeSampleItem {
  id: string;
  title: string;
  category: string;
  prepTime: string;
  cookTime: string;
  difficulty: 'Très Facile' | 'Facile' | 'Intermédiaire' | 'Pâtissier';
  servings: string;
  description: string;
  image: string;
  ingredients: string[];
  steps: string[];
  chefTip: string;
  badge?: string;
}

export interface TargetAudienceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  bullet: string;
}

export interface BeforeAfterItem {
  id: string;
  before: string;
  after: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  role: string;
  quote: string;
  rating: number;
  verified: boolean;
  date: string;
  avatarUrl: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
