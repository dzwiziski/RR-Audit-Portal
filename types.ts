
export type PriorityLevel = 0 | 1 | 2 | 3;

export interface AuditItem {
  id: string;
  category: string;
  subCategory: string;
  question: string;
}

export interface AuditResponse {
  currentState: number; // 0 = Doesn't Exist, 1 = Partially There, 2 = Fully Deployed
  priority: PriorityLevel; // 0 = N/A, 1 = Low, 2 = Medium, 3 = High
  notes: string;
}

export interface SectionScore {
  category: string;
  score: number; // Percentage
  totalPossible: number;
  actual: number;
}

export interface Participant {
  name: string;
  title: string;
}

export interface ClientInfo {
  companyName: string;
  partners: string;
  participants: Participant[];
  date: string;
}
