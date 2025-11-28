import { LucideIcon } from "lucide-react";

export interface Tool {
  id: string;
  title: string;
  description: string;
  url: string;
  iconUrl?: string; // URL for external logo
  badge?: string; // e.g., "New", "Hot"
}

export interface SubCategory {
  id: string;
  title: string;
  tools: Tool[];
}

export interface Category {
  id: string;
  title: string;
  icon: LucideIcon;
  subCategories: SubCategory[];
}

export interface SidebarItemProps {
  category: Category;
  isActive: boolean;
  onClick: () => void;
}