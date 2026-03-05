
export interface TalktoUS_types {
  name: string;
  phone: string;
  email: string;
  message: string;
  tour_id:string;
}

export type TalktoUsEnquiryResponse = {
  result: string;
  message: string;
};


export interface TalktoUS_Errors {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export interface Download_ItineraryTypes{
  name:string;
  phone: string;
  email: string;
}

export interface Download_ErrorTypes{
  name:string;
  phone: string;
  email: string;
}
