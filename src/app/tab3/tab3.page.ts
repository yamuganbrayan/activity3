import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController, AlertController } from '@ionic/angular';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  public tab3: string;
  public items = [
    {
      id: 1,
      name: 'Ate Lezel',
      number: '09199846679'
    },
    {
      id: 2,
      name: 'Yu Zhong',
      number: '09293128545'
    },
     {
      id: 3,
      name: 'Selena',
      number: '09293128545'
    },
    {
      id: 4,
      name: 'Broody',
      number: '09293128545'
    },
    {
      id: 5,
      name: 'Grock',
      number: '09293128545'
    },
    {
      id: 6,
      name: 'Chou',
      number: '09293128545'
    },
     {
      id: 7,
      name: 'Freya',
      number: '09293128545'
    },
    {
      id: 8,
      name: 'Claude',
      number: '09293128545'
    }
  ]

  constructor(private activatedRoute: ActivatedRoute, 
              private alertCtrl:AlertController) {}

  ngOnInit() {
    this.tab3 = this.activatedRoute.snapshot.paramMap.get('id');
  }
  
  async alertThis(index: number){
    await this.alertCtrl.create({
      header: "Alert",
      message: " Are you sure?",
      buttons: [{
        text: 'yes',
        role: 'destructive',
        handler: () => {   
                this.items.splice(index, 1);  
          console.log ('delete Clicked');
        }
      },
      {
        text: 'cancel'
      }
      ]

    }).then (res=> res.present());
  }
}
