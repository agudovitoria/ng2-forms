export interface FormData {
  name: string,
  lastName: string,
  gender: number,
  dob: number,
  phone: string,
  address: {
    addressLine1: string,
    addressLine2: string,
    city: string,
    province: string,
    zip: number
  }
}
