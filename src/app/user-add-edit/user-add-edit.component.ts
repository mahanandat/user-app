import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../types/users';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-add-edit',
  templateUrl: './user-add-edit.component.html',
  styleUrl: './user-add-edit.component.css'
})
export class UserAddEditComponent implements OnInit {
  id: string | null = null;
  isEdit: boolean = true;
  showModal: boolean = false;
  message: string = ''
  usersData: User = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    age: 0,
    gender: '',
    phone: '',
    username: '',
    password: '',
    birthDate: '',
    image: '',
    bloodGroup: '',
    height: 0,
    weight: 0,
    eyeColor: '',
    hair: {
      color: '',
      type: ''
    },
    ip: '',
    address: {
      address: '',
      city: '',
      state: '',
      stateCode: '',
      postalCode: '',
      coordinates: {
        lat: 0,
        lng: 0
      },
      country: ''
    },
    macAddress: '',
    university: '',
    bank: {
      cardExpire: '',
      cardNumber: '',
      cardType: '',
      currency: '',
      iban: ''
    },
    company: {
      department: '',
      name: '',
      title: '',
      address: {
        address: '',
        city: '',
        state: '',
        stateCode: '',
        postalCode: '',
        coordinates: {
          lat: 0,
          lng: 0
        },
        country: ''
      }
    },
    ein: '',
    ssn: '',
    userAgent: '',
    crypto: {
      coin: '',
      wallet: '',
      network: ''
    },
    role: 'user'
  };
  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) {

  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      if (this.id === '0') {
        this.isEdit = false
      } else {
        this.fetchUserData(this.id);
      }
      console.log(this.id);
    });
  }

  onSubmit(id: string | null, userData: User): void {
    console.log('Submitted:', this.usersData);
    if (id && id !== '0') {
      this.userService.updatePost(id, userData).subscribe((response) => {
        console.log('updatePost response is => ', response)
        this.showModal = true
        this.message = 'User updated successully'
        this.goBack()
      })
    } else {
      this.userService.addUser(userData).subscribe((response) => {
        console.log('addUser response is => ', response)
        this.showModal = true
        this.message = 'User added successully'
        this.goBack()
      }, (error) => {

      })
    }
  }

  fetchUserData(id: string | null) {
    return this.userService.getUserById(id).subscribe(
      (users: User) => {
        this.usersData = users;
        console.log('Users:', this.usersData);
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

  goBack(): void {
    this.router.navigateByUrl('');
  }
}
