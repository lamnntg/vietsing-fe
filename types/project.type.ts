export type ProjectDef = {
  id: 3;
  name: string;
  images: string[];
  category: string;
  job_title: string;
  customer: string;
  job: string;
  location: string;
  area: string;
  year: string;
};

export type DropdownLink = {
  label: string;
  items: {
    href: string;
    label: string;
  }[];
};

export type RowDataDef = {
  width?: number;
  label: string;
  colSpan?: number;
  rowSpan?: number;
};

export enum ProductType {
  ALL = "all",
  EQUIPMENT = "equipment",
  ARTWORK = "artwork",
  INTERIOR = "interior",
  COMPOSITE = "composite",
  BILLBOARDS = "billboards",
}
