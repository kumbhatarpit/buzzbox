import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArrowRight, Award, Briefcase, CalendarDays, DollarSign, Clock, Download, Film, GraduationCap, Image, LucideAngularModule, LucideIconData, Palette, PlayCircle, RefreshCw, Rocket, Store, Type, Users } from 'lucide-angular';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    LucideAngularModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  download = Download;
  arrowRight = ArrowRight;
  playCircle = PlayCircle;
  users = Users;
  rocket = Rocket;
  briefcase = Briefcase;
  graduationCap = GraduationCap;
  refreshCw = RefreshCw;
  store = Store;
  film = Film;
  image = Image;
  type = Type;
  calendarDays = CalendarDays;
  clock = Clock;
  award = Award;
  palette = Palette;
  dollarSign = DollarSign;
}
