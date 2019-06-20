// import { Component, OnInit } from '@angular/core';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from './helpers/must-match.validator';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
    registerForm: FormGroup;
    submitted = false;
    states=['andhra pradesh','vizayanagaram','ankapalli','chennai']

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            gender:['',Validators.required],
            states:[''],
            password: ['', [Validators.required, Validators.minLength(6)]],
          
            confirmPassword: ['', Validators.required],
            checkbox: ['',Validators.requiredTrue]
        }, {
            validator: MustMatch('password', 'confirmPassword')
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
    }
}





















// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// // import custom validator to validate that password and confirm password fields match
// //import { MustMatch } from './helpers/must-match.validator';

// @Component({
//     selector: 'app-root',
//     templateUrl: 'app.component.html'
// })
// export class AppComponent{
//   countries = ['USA', 'Germany', 'Italy', 'France']


  
//       profileForm = this.fb.group({
//         firstName: ['', [Validators.required, Validators.minlength(3)]],
//         lastName: ['',Validators.required],
//         address: this.fb.group({
//           street: [''],
//           city: [''],
//           state: [''],
//           zip: [''],
//           countries:['']
//         }),
//       });
//   constructor(private fb: FormBuilder) { }

// }


  
      
















// import { Component, OnInit } from '@angular/core';
// // import { FormControl, FormGroup } from '@angular/forms';
// //import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
// // import { FormGroup, FormControl } from '@angular/forms';
// import { FormBuilder } from '@angular/forms';
// import { Validators } from '@angular/forms';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
//  export class AppComponent{
//   countries = ['USA', 'Germany', 'Italy', 'France']
//   profileForm = this.fb.group({
//     firstName: ['', [Validators.required, Validators.minlength(3)]],
//     lastName: ['',Validators.required],
//     address: this.fb.group({
//       street: [''],
//       city: [''],
//       state: [''],
//       zip: [''],
//       countries:['']
//     }),
//   });
 
//   constructor(private fb: FormBuilder) { }

  
//   onSubmit() {
//     // TODO: Use EventEmitter with form value
//     console.warn(this.profileForm.value);
//   }



//  }

// // export class ContactComponent implements OnInit{
// //   title = 'forms';

// //   contactForm: FormGroup;
// //   countries = ['USA', 'Germany', 'Italy', 'France']

// //   requestTypes = ['Claim', 'Feedback', 'Help Request']


// // constructor(private formBuilder: FormBuilder) {
// //     this.contactForm = this.createFormGroup();
// // }

// // createFormGroupWithBuilder(formBuilder: FormBuilder) {
// //   return formBuilder.group({
// //     personalData: formBuilder.group({
// //       email: 'defaul@email.com',
// //       mobile: '',
// //       country: ''
// //     }),
// //     requestType: '',
// //     text: ''
// //   });
// // }
// // onSubmit() {
// //   // Make sure to create a deep copy of the form-model
// //   const result: ContactRequest = Object.assign({}, this.contactForm.value);
// //   result.personalData = Object.assign({}, result.personalData);

// //   // Do useful stuff with the gathered data
// //   console.log(result);
// // }
// // revert() {
// //   // Resets to blank object
// //   this.contactForm.reset();

// //   // Resets to provided model
// //   this.contactForm.reset({ personalData: new PersonalData(), requestType: '', text: '' });
// // }
// //   ngOnInit() {}
// // }
