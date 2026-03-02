// Form types
export interface DYTformtypes {
  title:string;
  name: string;
  phone: string;
  email: string;
  message: string;
  destination:string;
  travel_date:string;
  duration:string;
  group_size:string;
  trip_type:string;
  travel_pace:string;
  budget:string;
  season :string;
}

export interface DYTFormErrors {
  title:string;
  name: string;
  phone: string;
  email: string;
  destination:string;
}
export type DYTEnquiryResponse = {
  result: string;
  message: string;
};