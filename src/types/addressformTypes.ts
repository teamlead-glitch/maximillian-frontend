// Form types
export interface Formtypes {
  title:string;
  name: string;
  mobile: string;
  email: string;
  message: string;
  is_agreed: boolean;
}

export interface FormErrors {
  title:string;
  name: string;
  mobile: string;
  email: string;
  message: string;
}


//resonse api
export type ContactEnquiryResponse = {
  result: string;
  message: string;
};
