import { Component, OnInit } from '@angular/core';
import { NoticeService } from '../service/notice.service';
import {Notice} from '../../model/Notice';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  notices : Notice[]
  constructor(
    public noticeService : NoticeService
  ) { }

  
  ngOnInit() {
    this.getNotice();
  }

  getNotice(){
    this.noticeService.getNotice().subscribe(
      Response=>{
        // console.log(Response)
        this.notices = <Notice[]> Response;
        console.log(this.notices)
      },
      Error=>{
        console.log(Error)
      }
    )
  }
  downloadNotice(noticeId : string){
    this.noticeService.downloadNotice(noticeId);
  }
  downloadFile(data: Response) {
    // const blob = new Blob([data], { type: 'text/pdf' });
    // const url= window.URL.createObjectURL(blob);
    // window.open(url);
  }
  downLoadFile(data: any, type: string) {
    let blob = new Blob([data], { type: type});
    let url = window.URL.createObjectURL(blob);
    let pwa = window.open(url);
    if (!pwa || pwa.closed || typeof pwa.closed == 'undefined') {
        alert( 'Please disable your Pop-up blocker and try again.');
    }
}

}
