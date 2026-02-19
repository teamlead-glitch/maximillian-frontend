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

export interface SettingsResponse {
  company_name: string;
  contact_email: string;
  package_enquiry_email: string;
  fit_enquiry_email: string;
  email: string;
  phone: string;
  address: string;
  address_2:string;
  fb_url: string | null;
  twitter_url: string | null;
  youtube_url: string | null;
  linked_in: string | null;
  insta_url: string | null;
  whatsapp:string;
  address_link:string;
  address_link_2:string;
}
