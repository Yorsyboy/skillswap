import { create } from "zustand";
import { persist } from "zustand/middleware"; 
import type { Skill } from "../types/skill";

interface SkillState {
  skills: Skill[];
  addSkill: (skill: Skill) => void;
  removeSkill: (id: string) => void;          
}

export const useSkillStore = create<SkillState>()(
  persist(                                    
    (set) => ({
      skills: [ ],       
      addSkill: (skill) =>
        set((state) => ({ skills: [skill, ...state.skills] })),
      removeSkill: (id) =>
        set((state) => ({ skills: state.skills.filter((s) => s.id !== id) })),
    }),
    { name: "skillswap-storage" }             
  )
);