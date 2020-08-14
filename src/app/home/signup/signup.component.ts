import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';

@Component({
    templateUrl: './signup.component.html'
    
})
export class SignUpComponent implements OnInit {

    signUpForm:FormGroup;

    constructor(
        private formBuilder:FormBuilder,
        private userNotTakenValidatorService:UserNotTakenValidatorService
        ){}
    
    ngOnInit(): void {
        
        this.signUpForm = this.formBuilder.group({

        email:['',
            [
                Validators.required,
                Validators.email
            ]
        ],

        fullName:['',
            [
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(40)
            ]
        ],
        userName:['',
            [
                Validators.required,
                lowerCaseValidator,//Poderia usar o Validators.pattern()
                Validators.minLength(2),
                Validators.maxLength(30)
            ],//Validações síncronas
            this.userNotTakenValidatorService.checkUserNameTaken()//Validação assíncrona
            
        ],
        password:['',
            [
                Validators.required,
                Validators.minLength(8),
                Validators.maxLength(14)
            ]
        ],
        
    

        })
    }
}
