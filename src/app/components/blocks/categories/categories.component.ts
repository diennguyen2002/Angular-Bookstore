import {Component} from "@angular/core";
import {CategoryService} from "../../../services/category.service"

@Component({
    selector:"app-categories",
    templateUrl:"./categories.component.html",
    providers:[CategoryService]
})

export class CategoriesComponent {
    categories:any;
    constructor(private cateService: CategoryService){
        cateService.getCategories().subscribe(data =>{
            this.categories = data.items;
        })
    }
}