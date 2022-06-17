import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {

  contacts = [
    {
      name: 'Selena',
      phoneNumber: '09488745380',
      image: 'assets/avatar1.png',
    },
    {
      name: 'Ruby',
      phoneNumber: '09355543564',
      image: 'assets/avatar1.png',
    },
    {
      name: 'Grock',
      phoneNumber: '09517664573',
      image: 'assets/avatar1.png',
    },
    {
      name: 'Chou',
      phoneNumber: '09518515381',
      image: 'assets/avatar1.png',
    },
    {
      name: 'Freya',
      phoneNumber: '09503376844',
      image: 'assets/avatar1.png',
    },
    {
      name: 'Claude',
      phoneNumber: '09367656690',
      image: 'assets/avatar1.png',
    },
    {
      name: 'Miya',
      phoneNumber: '09164412267',
      image: 'assets/avatar1.png',
    },
  ];

  customAlertOptions: any = {
    header: 'Contacts',
    translucent: true
  };

  constructor() { }

  ngOnInit() {
  }

}
