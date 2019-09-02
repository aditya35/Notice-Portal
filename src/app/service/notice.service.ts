import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpHeaders , HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NoticeService {

  constructor(
    public auth : AuthService,
    private http : HttpClient,
  ) { }

  getNotice(){
    let headers = new HttpHeaders({
      'RollNo' : this.auth.user.rollNo,
      'sessionId1' : this.auth.user.sessionId1,
      'sessionId2' : this.auth.user.sessionId2,
      'sessionId3' : this.auth.user.sessionId3,
      'sessionId4' : this.auth.user.sessionId4


      })
    let option = {headers: headers}
    return this.http.get(TNP_NOTICE_URI,option);
  }

  downloadNotice(noticeId:string){
    
    let headers = new HttpHeaders({
      'notice_id' : noticeId,
      'RollNo' : this.auth.user.rollNo,
      'sessionId1' : this.auth.user.sessionId1,
      'sessionId2' : this.auth.user.sessionId2,
      'sessionId3' : this.auth.user.sessionId3,
      'sessionId4' : this.auth.user.sessionId4
    })
    // let option = {
    //   headers: headers,
    // }
    return this.http.get(TNP_NOTICE_DOWNLOAD_URI,{
      headers : headers})
    //   responseType: ResponseContentType.Blob
    // }).toPromise()
    // .then(response => this.saveAsBlob(response))
    // .catch(error=> {console.log(error)});
  }

  private saveAsBlob(data: any) {
    const blob = new Blob([data._body],
        { type: 'application/pdf' });
    const file = new File([blob], 'app',
        { type: 'application/vnd.ms-excel' });

    // FileSaver.saveAs(file);
}

}
export const TNP_NOTICE_DOWNLOAD_URI = "https://apiv3.kiittnp.in/api/1.2/connect/notice/downlaod"
export const TNP_NOTICE_URI = "https://apiv3.kiittnp.in/api/1.2/connect/notice";
