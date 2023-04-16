import { Component, OnInit } from '@angular/core';
import {Room, RoomList} from './rooms'
@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit{
hotelName='Hilton Hotel';
numberofRooms=10;
hideRooms=false;
rooms:Room={
  totalRooms:20,
  availableRooms : 10,
  bookedRooms: 5
}

roomList:RoomList[]=[];
ngOnInit(): void {
  this.roomList=[{
    roomNumber: 1 ,
    roomType:'Deluxe Room',
    amenities:'free WI-FI,Air conditioner',
    price:500,
    photos:'https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x768',
    checkinTime:new Date('11-Nov-2023'),
    checkoutTime:new Date('13-Nov-2023'),
    rating:4.5
  },
  {
    roomNumber:2,
    roomType:'Deluxe Room',
    amenities:'free WI-FI,Air conditioner',
    price:1000,
    photos:'https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x768',
    checkinTime:new Date('11-Nov-2023'),
    checkoutTime:new Date('13-Nov-2023'),  
    rating:3.5
  },
  {
    roomNumber:3,
    roomType:'Private Room',
    amenities:'free WI-FI,Air conditioner',
    price:1000,
    photos:'https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x768',
    checkinTime:new Date('11-Nov-2023'),
    checkoutTime:new Date('13-Nov-2023'),
    rating:4.7  
  }
  ]
}
toggle(){
  this.hideRooms=!this.hideRooms
}

}

