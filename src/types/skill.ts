
export type SkillType = "offer" | "request";

export type SkillCategory =          
  | "Technology" | "Design" | "Music"
  | "Language"   | "Business" | "Fitness"
  | "Cooking"    | "Art" | "Writing" | "Other";

export interface UserProfile {       
  name: string;
  avatar: string;                    
  bio: string;
  contact: string;                   
}

export interface Skill {
  id: string;
  title: string;
  category: SkillCategory;           
  description: string;
  type: SkillType;
  tags: string[];                   
  user: UserProfile;                 
  createdAt: string;                
}