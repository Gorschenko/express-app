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

// ИНТЕРФЕЙСЫ И ТИПЫ

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

// ИНТЕРФЕЙСЫ И ТИПЫ

// ЛИТЕРАЛЫ
// let b: 'hi' = 'hi' // - литерал

// type direction = 'left' | 'right'

// function moveDog(direction: direction): -1 | 0 | 1 {
// 	switch(direction) {
// 		case 'left':
// 			return -1
// 		case 'right':
// 			return 1
// 		default:
// 			return 0
// 	}
// }

// interface IConnection {
// 	host: string,
// 	port: number
// }
// function connect(connection: IConnection | 'default') {

// }

// connect()

// const connection = {
// 	host: 'localhost',
// 	protocol: 'https' as 'https', // Задаем ключу значение литерала
// }

// let a: any = 5
// let c = a as number

// function connect (host: string, protocol: 'http' | 'https') {

// }
// connect (connection.host, connection.protocol) 

// ЛИТЕРАЛЫ

// ЕНАМЫ
// type direction = 'left' | 'right'

// enum Direction {
// 	Left,
// 	Right
// }

// function move(direction: Direction) {
// 	switch (direction) {
// 		case Direction.Left:
// 			return -1
// 		case Direction.Right:
// 			return 1
// 	}
// }

// function objMod(obj: { Left: number }) {

// }

// objMod(Direction)

// const enum Direction2 {
// 	Up,
// 	Down
// }

// let myDirection = Direction2.Up

// ЕНАМЫ

// ДЖЕНЕРИКИ - позволяют не дублировать функцию и
// работать с разными типами аргументов, которые передаем

// function log(obj: string): string {
// 	console.log(obj)
// 	return obj
// }

// function log2(obj: number): number {
// 	console.log(obj)
// 	return obj
// }

// interface HasLength {
// 	length: number
// }

// function log<T extends HasLength, K>(obj: T, arr: K[]): K[] {
// 	console.log(obj)
// 	return arr
// }

// interface IUser {
// 	name: string,
// 	age?: number,
// 	bid: <T>(sum: T) => boolean,
// }

// function bid<T>(sum: T): boolean {
// 	return true
// }

// ДЖЕНЕРИКИ

// КЛАССЫ
// interface LoggerService {
// 	log: (s: string) => void
// }

// class Logger implements LoggerService { // заставляет имплементировать (повторить) логику интерфейса
// 	log(s: string) {
// 		console.log(s)
// 	}
// }

// class MyClass<T> {
// 	a: <T>
// }

// const b = new MyClass<string>()
// b.a

// КЛАССЫ

// ДРУГОЕ
type Coord = {
	lat: number,
	long: number
}
type P = keyof Coord

let a: P = 'long'

// ДРУГОЕ