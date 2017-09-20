export class Hospital{
    id:number;
    name: string;
    reason: string;
    phone_no: string;
   constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}