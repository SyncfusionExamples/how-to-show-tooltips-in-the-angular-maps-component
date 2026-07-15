import { bootstrapApplication } from '@angular/platform-browser';
import {registerLicense} from '@syncfusion/ej2-base'
import { AppComponent } from './app/app.component';
registerLicense("ORg4AjUWIQA/Gnt2VFhiQlJPcUBDWXxLflF1VWJbdVt1flRBcDwsT3RfQF5jT39Xd0dmXn5WeXFURA==");

bootstrapApplication(AppComponent)
  .catch((err) => console.error(err));
