import Country from '../app/country/page';
export interface CountryResponse {
  id: number;
  title: string;
  short_description: string | null;
  short_slug:string;
  image_path: string ;
}