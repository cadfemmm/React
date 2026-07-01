export type Priority = 'High' | 'Medium' | 'Low';
export type SlaTone = 'overdue' | 'at-risk' | 'on-track';
export type ConsentStatus = 'Valid' | 'Pending' | 'Expired';

export interface QueueRow {
  id: string;
  patient: string;
  refId: string;
  department: string;
  disciplineCode: string;
  priority: Priority;
  slaLabel: string;
  slaTone: SlaTone;
  createdLabel: string;
  createdDate: string;
  consent: ConsentStatus;
  age?: number;
  centre?: string;
}

export interface KpiCard {
  label: string;
  value: string;
  caption: string;
  captionTone?: 'default' | 'danger' | 'warning' | 'success';
}