import { Injectable } from '@angular/core';
import { Exam } from '../../models/exam.models';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  public users: User[] = USERS
  public exams: Exam[] = EXAMS

  constructor() { }
}

const USERS: User[] = [
  	{
		name: "Erasmus",
		lastname: "Le",
		phone: 941832004,
		institution: "Habitant Morbi Tristique Institute",
		speciality: "Medicina general"
	},
	{
		name: "Xander",
		lastname: "Cohen",
		phone: 927462724,
		institution: "Quis Associates",
		speciality: "Tecnologia médica"
	},
	{
		name: "Lacota",
		lastname: "Steele",
		phone: 952894847,
		institution: "Vehicula PC",
		speciality: "Medicina general"
	},
	{
		name: "Ashely",
		lastname: "O'connor",
		phone: 997545205,
		institution: "Sem Limited",
		speciality: "Tecnologia médica"
	},
	{
		name: "Octavia",
		lastname: "Mathews",
		phone: 949612263,
		institution: "Tortor Nibh Foundation",
		speciality: "Medicina general"
	},
  	{
		name: "Alec",
		lastname: "English",
		phone: 945514160,
		institution: "Litora Torquent Limited",
		speciality: "Medicina general"
	},
	{
		name: "Chadwick",
		lastname: "Long",
		phone: 969827126,
		institution: "Sociis Natoque Associates",
		speciality: "Tecnologia médica"
	},
	{
		name: "Brent",
		lastname: "Johns",
		phone: 946119534,
		institution: "Gravida Non Consulting",
		speciality: "Medicina general"
	},
	{
		name: "Amir",
		lastname: "Cooper",
		phone: 981191275,
		institution: "Imperdiet Limited",
		speciality: "Tecnologia médica"
	},
	{
		name: "Alec",
		lastname: "Clements",
		phone: 933378355,
		institution: "Dictum Sapien Industries",
		speciality: "Tecnologia médica"
	},
	{
		name: "Meghan",
		lastname: "Cervantes",
		phone: 968294289,
		institution: "Sagittis Corp.",
		speciality: "Tecnologia médica"
	},
	{
		name: "Marvin",
		lastname: "Gibbs",
		phone: 935581102,
		institution: "Sed Malesuada Augue LLP",
		speciality: "Medicina general"
	},
	{
		name: "Omar",
		lastname: "Macdonald",
		phone: 943984561,
		institution: "Viverra Foundation",
		speciality: "Medicina general"
	},
	{
		name: "Damon",
		lastname: "David",
		phone: 986917778,
		institution: "Venenatis Lacus Industries",
		speciality: "Tecnologia médica"
	},
	{
		name: "Lucian",
		lastname: "Valdez",
		phone: 913154432,
		institution: "Velit Dui Ltd",
		speciality: "Medicina general"
	},
	{
		name: "Ian",
		lastname: "Sparks",
		phone: 939583931,
		institution: "Neque Sed Dictum LLP",
		speciality: "Tecnologia médica"
	},
	{
		name: "Remedios",
		lastname: "Logan",
		phone: 974324268,
		institution: "Purus Sapien Industries",
		speciality: "Medicina general"
	},
	{
		name: "Christopher",
		lastname: "Barry",
		phone: 974945376,
		institution: "Urna Consulting",
		speciality: "Tecnologia médica"
	},
	{
		name: "Brielle",
		lastname: "Bird",
		phone: 906651936,
		institution: "Suspendisse Eleifend Cras Institute",
		speciality: "Medicina general"
	},
	{
		name: "Shannon",
		lastname: "Raymond",
		phone: 969745586,
		institution: "Pellentesque Habitant Morbi LLP",
		speciality: "Tecnologia médica"
	}
];

const EXAMS: Exam[] = [
	{
		patientName: "Tasha",
		patientLastName: "House",
		phone: '968977666',
		rut: "25.601.312-6",
		prediction: "Alta probabilidad",
		age: 60
	},
	{
		patientName: "Desirae",
		patientLastName: "Kirby",
		phone: '919553571',
		rut: "10.471.662-8",
		prediction: "Baja probabilidad",
		age: 77
	},
	{
		patientName: "Peter",
		patientLastName: "Ellis",
		phone: '927343238',
		rut: "17.118.429-0",
		prediction: "Probabilidad media",
		age: 23
	},
	{
		patientName: "Gage",
		patientLastName: "Howard",
		phone: '935558159',
		rut: "40.633.105-9",
		prediction: "Baja probabilidad",
		age: 13
	},
	{
		patientName: "Jescie",
		patientLastName: "Hays",
		phone: '953924982',
		rut: "47.613.451-K",
		prediction: "Probabilidad media",
		age: 3
	},
	{
		patientName: "Tasha",
		patientLastName: "House",
		phone: '968785326',
		rut: "25.601.312-6",
		prediction: "Alta probabilidad",
		age: 60
	},
	{
		patientName: "Desirae",
		patientLastName: "Kirby",
		phone: '922544513',
		rut: "10.471.662-8",
		prediction: "Baja probabilidad",
		age: 77
	},
	{
		patientName: "Peter",
		patientLastName: "Ellis",
		phone: '943753508',
		rut: "17.118.429-0",
		prediction: "Probabilidad media",
		age: 23
	},
	{
		patientName: "Gage",
		patientLastName: "Howard",
		phone: '951556661',
		rut: "40.633.105-9",
		prediction: "Baja probabilidad",
		age: 13
	},
	{
		patientName: "Jescie",
		patientLastName: "Hays",
		phone: '924576276',
		rut: "47.613.451-K",
		prediction: "Probabilidad media",
		age: 3
	},
	{
		patientName: "Chaney",
		patientLastName: "David",
		phone: '914832601',
		rut: "35.493.380-2",
		prediction: "Baja probabilidad",
		age: 31
	},
	{
		patientName: "Maxwell",
		patientLastName: "Ellis",
		phone: '966594446',
		rut: "23.569.323-2",
		prediction: "Baja probabilidad",
		age: 78
	},
	{
		patientName: "McKenzie",
		patientLastName: "Watson",
		phone: '974377428',
		rut: "29.694.217-0",
		prediction: "Alta probabilidad",
		age: 53
	},
	{
		patientName: "Cain",
		patientLastName: "Meadows",
		phone: '943657094',
		rut: "20.716.143-8",
		prediction: "Alta probabilidad",
		age: 13
	},
	{
		patientName: "Jonas",
		patientLastName: "Schmidt",
		phone: '947645371',
		rut: "20.842.203-0",
		prediction: "Baja probabilidad",
		age: 23
	},
	{
		patientName: "Carlos",
		patientLastName: "Aguirre",
		phone: '901424234',
		rut: "23.892.966-0",
		prediction: "Baja probabilidad",
		age: 53
	},
	{
		patientName: "Garrison",
		patientLastName: "Conley",
		phone: '919015205',
		rut: "22.930.936-6",
		prediction: "Probabilidad media",
		age: 3
	},
	{
		patientName: "Erica",
		patientLastName: "Shields",
		phone: '991552317',
		rut: "11.348.852-2",
		prediction: "Alta probabilidad",
		age: 89
	},
	{
		patientName: "Rahim",
		patientLastName: "Nolan",
		phone: '911799753',
		rut: "20.350.122-6",
		prediction: "Baja probabilidad",
		age: 41
	},
	{
		patientName: "Caryn",
		patientLastName: "Blackwell",
		phone: '947152256',
		rut: "1.167.913-7",
		prediction: "Alta probabilidad",
		age: 66
	}
];