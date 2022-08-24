// let a: number = 'sdsad'
// let b: string = 'ssss'

// let c: number = a + b

// let d = true

// let names: string[] = ['sdasd', 'sada']
// let ages: number[] = [5, 3]

// let tup: [number, string] = [2, 'sdasda'] // ограничен по длине

// let e: any = 3
// e = 'dsg'
// e = true

// let anyArr: any[] = ['dasda', 223]

// // получаем параметр name по типу string,
// // на выходе ожидает переменную по типу string
// function greet (name: string): string {
// 	return name + 'Hi'
// }

// names.map((x: string) => x)

// // long? - необязательное значение
// function coord(coord: { lat: number, long?: number }) {

// }

// let universalId: number | string = 5 // union type
// universalId = 'sds'

// function prinId(id: number | string) {
// 	if (typeof id === 'string') {
// 		console.log(id.toUpperCase())
// 	} else {
// 		console.log(id)
// 	}
// }

// function helloUser(user: string | string[]) {
// 	if (Array.isArray(user)) {
// 		console.log(user.join(', ') + 'Hi!')
// 	} else {
// 		console.log(user + 'Hi!')
// 	}
// }

// type coord = { lat: number, long: number }

// interface ICoord {
// 	lat: number,
// 	long: number,
// }

// type ID = number | string

// function compute(coord: ID) {

// }

// interface Animal {
// 	name: string,

// }

// interface Dog extends Animal {
// 	tail?: boolean
// }

// const dog: Dog = {
// 	name: 'sdf',
// 	tail: true,
// }

// type Animal = {
// 	name: string,
// }

// type Dog = Animal & {
// 	tail: boolean;
// }

// const dog: Dog = {
// 	name: '',
// 	tail: true,
// }

// interface Dog {
// 	name: string
// }

// interface Dog {
// 	tail: boolean
// }

// const dog : Dog = {
// 	name: 'sds',
// 	tail: true,
// }