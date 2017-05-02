
var vacanciesData =[
	{
		src: 'https://habrastorage.org/getpro/moikrug/uploads/company/100/005/419/5/logo/medium_dbfccb9b1f899bf2660c00d6df74dece.png',
		title:"Frontend-разработчик",
		name:'ЗАО "Инфорус"',
		location:"Москва",
		salary:"От 90 000 до 110 000 руб.",
		vacancy_url:'https://moikrug.ru/vacancies/1000032599',
		company_url:"https://moikrug.ru/companies/inforus",
		location_url:"https://moikrug.ru/vacancies?city_id=678"

	},
	{
		src:'https://habrastorage.org/getpro/moikrug/uploads/company/100/004/381/2/logo/medium_9450dc89d2da8e447e32f1a4154719d9.png',
		title:"Senior frontend developer",		
		name:"Digital Education Technology",
		location:"Санкт-Петербург",
		salary:"От 100 000  руб."
	},
	{
		src:"https://habracdn.net/mk/assets/defaults/companies/logo/medium_default-24155d3c1826f1b948ff74257329961a.png",
		title:"JavaScript Frontend/Backend разработчик (react, redux, node.js, sql)",
		name:'ООО ДиджиРиал',
		location:"Краснодар",
		salary:"От 80 000 до 120 000 руб."
	},
	{
		src:"https://habrastorage.org/getpro/moikrug/uploads/company/100/004/693/8/logo/medium_ab777d5b17c34f957b83f47e2e8c5d04.jpg",
		title:"Frontend-разработчик",
		name:"МЛСН.ру",
		location:"Омск",
		salary:"От 80 000 до 85 000 руб."
	}
]

Template.similarVacancies.helpers({
	vacancy:vacanciesData
});
/*var urlData = [
	{
		vacancy_url:'https://moikrug.ru/vacancies/1000032599',
		company_url:"https://moikrug.ru/companies/inforus",
		location_url:"https://moikrug.ru/vacancies?city_id=678"
	},
	{
		vacancy_url:'https://moikrug.ru/vacancies/1000032234',
		company_url:"https://moikrug.ru/companies/digitaledtech",
		location_url:"https://moikrug.ru/vacancies?currency=rur&location=%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3&city_id=679"
	},
	{
		vacancy_url:'https://moikrug.ru/vacancies/1000027132',
		company_url:"https://moikrug.ru/companies/c15a0950-f57d-4357-b575-adcbf3ae1dc3",
		location_url:"https://moikrug.ru/vacancies?q=%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80&currency=rur"
	},
	{
		vacancy_url:'https://moikrug.ru/vacancies/1000029931',
		https://moikrug.ru/companies/mlsnru",
		location_url:"https://moikrug.ru/vacancies?currency=rur&location=%D0%9E%D0%BC%D1%81%D0%BA&city_id=718"
	}
]

Template.urlData.helpers({
	
	icon: iconData,
	title:titleData,
	name:nameData,
	location:locationData,
	salary:salaryData
});*/
