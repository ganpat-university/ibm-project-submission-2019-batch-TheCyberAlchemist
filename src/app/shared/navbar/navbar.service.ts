import { EventEmitter, Injectable } from "@angular/core";

@Injectable()
export class NavbarService{
	constructor () {}
	pageChangedTo = new EventEmitter<string>();
	page_title = "";
}