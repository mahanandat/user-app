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
  constructor(private route: ActivatedRoute, private userService: UserService) {

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

  onSubmit(): void {
    console.log('Submitted:', this.usersData);
    this.usersData = {
      id: 0,
      firstName: '',
      lastName: '',
      email: '',
      age: 5,
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
    this.userService.addUser(this.usersData).subscribe((response)=>{
      console.log('response is ',response)
    })
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
}
