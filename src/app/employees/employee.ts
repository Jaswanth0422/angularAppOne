export interface Employee {
  $key: string;
   id: Number;
   title: string;
   userid: string;
   department:string;
   professionalSkills:object;
}
export  const departments = [
  {id: 1, name: 'finanace'},
  {id: 2, name: 'information technology'},
  {id: 3, name: 'Human Resource'},
  {id: 4, name: 'External'},
  {id: 5, name: 'Software Development'},

];
export const professionalSkills=[
  {id:5,name:'java'},
  {id:6,name:'javaScript'},
  {id:7,name:'MangoDB'},
  {id:8,name:'HTML'},
];
