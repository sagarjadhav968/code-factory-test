import { Observable } from 'rxjs/Observable';
export class HttpSubscriber {

subscribeData(httpObserable: Observable<any>, onSuccess: (data: any) => any, onFailure: (error: any) => any) {
  let response: any;
  httpObserable.subscribe(
      (res: any) => {
        response = res;
      },
      (error: any) => {
        onFailure(error);
      },
      () => {
        onSuccess(response);
      });
}

}
