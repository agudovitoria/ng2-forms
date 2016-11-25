export interface IFormData {
    name: string,
    lastName: string,
    gender: number,
    dob: Date,
    phone: number,
    address: {
        addressLine1: string,
        addressLine2: string,
        city: string,
        province: string,
        zip: number
    }
}
