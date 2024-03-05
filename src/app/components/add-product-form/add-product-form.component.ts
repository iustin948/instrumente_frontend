import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Category } from 'src/app/models/Category';
import { AuthService } from 'src/app/services/Auth.service';
import { ProductService } from 'src/app/services/Product.service';
@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.css']
})
export class AddProductFormComponent implements OnInit {
  addProductForm !: FormGroup
  formData = new FormData();
  selectedFiles: File[] = [];
  categories: Category[] =  [
    { id: 1, name: 'Guitars' },
    { id: 2, name: 'Drums' },
    { id: 3, name: 'Keyboards' },
    { id: 4, name: 'Brass Instruments' },
    { id: 5, name: 'String Instruments' },
    { id: 6, name: 'Percussion Instruments' },
    { id: 7, name: 'Woodwind Instruments' },
    { id: 8, name: 'Electronic Instruments' },
    { id: 9, name: 'Accessories' }
  ];

  
  constructor(private productService : ProductService, private authService :AuthService) { }
  
  ngOnInit() {
    this.addProductForm = new FormGroup(
      {
        title: new FormControl('', [Validators.required]), // Use empty string
        description: new FormControl('', [Validators.required]), // Use empty string
        price: new FormControl('', [Validators.required]), // Use empty string
        categoryId: new FormControl('', [Validators.required]), // Use empty string or null if it's a dropdown
        productCondition: new FormControl('',[Validators.required]),
        location: new FormControl('',[Validators.required]),
        seller: new FormControl(this.authService.getUserId(),[Validators.required])
      }
      );
    }
    
    onUpload(event: any) {
      //this.selectedFiles = event.target.files;
     
      for (let file of event.files) {
        this.selectedFiles.push(file);  

    }
  }

    OnProductSubmit() {
      const formData = new FormData;
      if (this.selectedFiles) 
        for (let i = 0; i < this.selectedFiles.length; i++)
        {
          const file = this.selectedFiles[i];
          formData.append(`file`, file, file.name.replaceAll(" ","_"));
        }
        console.log(this.addProductForm.value)
       
        formData.append('product',JSON.stringify(this.addProductForm.value))
        
        return this.productService.addProduct(formData).subscribe(res => console.log(res));
      }
      

}
