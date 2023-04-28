import '@angular/compiler';
import 'imports/ui/polyfills';

import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

//Views
import { Login } from './views/login/login.component';
import { About } from './views/about/about.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { Dashboard } from './views/dashboard/dashboard.component';
import { Kanban } from './views/kanban/kanban.component';

//Components
import { NavbarComponent } from './components/navbar/navbar.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { KanbanListComponent } from './components/kanban-list/kanban-list.component';
import { KanbanSidebarComponent } from './components/kanban-sidebar/kanban-sidebar.component';
import { KanbanCardComponent } from './components/kanban-card/kanban-card.component';



//PrimeNG
import {StyleClassModule} from 'primeng/styleclass';
import {ButtonModule} from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';
import {DividerModule} from 'primeng/divider';
import {InputTextModule} from 'primeng/inputtext';
import {BadgeModule} from 'primeng/badge';
import {MenuModule} from 'primeng/menu';
import {SidebarModule} from 'primeng/sidebar';
import {InplaceModule} from 'primeng/inplace';
import {TieredMenuModule} from 'primeng/tieredmenu';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {AvatarModule} from 'primeng/avatar';
import {ProgressBarModule} from 'primeng/progressbar';


//Services
import { KanbanService } from 'imports/ui/app/services/kanban.service';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    DragDropModule,
    AppRoutingModule,
    StyleClassModule,
    ButtonModule,
    CheckboxModule,
    DividerModule,
    InputTextModule,
    BadgeModule,
    MenuModule,
    SidebarModule,
    InplaceModule,
    TieredMenuModule,
    AvatarGroupModule,
    AvatarModule,
    ProgressBarModule,
  ],
  providers: [
    KanbanService
  ],
  declarations: [
    AppComponent,
    Login,  
    About,
    Dashboard,
    Kanban,
    PageNotFoundComponent, NavbarComponent, TasksComponent, KanbanListComponent, KanbanSidebarComponent, KanbanCardComponent
  ],
  entryComponents: [
  ],
  bootstrap: [
    AppComponent
  ]
})
@Injectable()
export class AppModule { }
