import { Routes } from '@angular/router';
import { Impressum} from './impressum/impressum';
import { AboutUs} from './about-us/about-us';
import { Barrierefreiheitserklaerung} from './barrierefreiheitserklaerung/barrierefreiheitserklaerung';
import { License} from './license/license';
import {PrivacyNotice} from './privacy-notice/privacy-notice';
import {HomePage} from './home-page/home-page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'impressum', component: Impressum },
  { path: 'about-us', component: AboutUs },
  { path: 'license', component: License },
  { path: 'barrierefreiheit', component: Barrierefreiheitserklaerung },
];
