export type Language = 'te' | 'en';

export interface CoupleProfile {
  title: string;
  name: string;
  prefix: string;
  role: string;
  parents: string;
  residence: string;
  district: string;
  state: string;
  bio?: string;
}

export interface EventDetail {
  id: string;
  name: string;
  nameEn: string;
  time: string;
  timeEn: string;
  date: string;
  description: string;
  descriptionEn: string;
  iconType: 'muhurtham' | 'dinner' | 'thalambralu' | 'blessings';
}

export interface GuestBlessing {
  id: string;
  name: string;
  city: string;
  relation: string;
  message: string;
  date: string;
  attending: boolean;
  guestsCount?: number;
}
