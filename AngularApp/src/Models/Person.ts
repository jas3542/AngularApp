export class Person {
  public id?: number;
  public name: string;
  public surname: string;
  public age: number;
  
  //Constructor
  constructor(idd:number, namee:string,surnamee:string,agee:number) {
    this.id = idd;
    this.name = namee;
    this.surname = surnamee;
    this.age = agee;
  }
}

export class PersonForPost {
  public name: string;
  public surname: string;
  public age: number;

}
