export interface IDriverDob {
  age: number;
  date: string;
}

export interface IDriverId {
  name: string;
  value: string | null;
}

export interface IDriverName {
  first: string;
  last: string;
  title: string;
}

export interface IDriverPicture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface IDriverInfo {
  cell: string;
  dob: IDriverDob;
  email: string;
  gender: string;
  id: IDriverId;
  name: IDriverName;
  phone: string;
  picture: IDriverPicture;
}

export interface IDriverRes {
  results: Array<IDriverInfo>;
}

export interface IDriverNormalize {
  id: string;
  img: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  dob: string;
}

export interface IDriverProps {
  data: Array<IDriverNormalize>;
}
