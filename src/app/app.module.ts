import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from "angular-datatables";

// import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";

import { SidebarModule } from './shared/sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
// import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';


import { PresentationComponent } from './presentation/presentation.component';
import { CompTableComponent } from './presentation/comp-table/comp-table.component';
import { GraphsComponent } from './presentation/graphs/graphs.component';


// import { NgxApexchartsModule } from 'ngx-apexcharts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SanernowComponent } from './presentation/sanernow/sanernow.component';
import { IntruderComponent } from './presentation/intruder/intruder.component';
import { ManageEngineComponent } from './presentation/manage-engine/manage-engine.component';
import { QualysComponent } from './presentation/qualys/qualys.component';
import { NessusComponent } from './presentation/nessus/nessus.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    
    PresentationComponent,
    CompTableComponent,
    GraphsComponent,
    SanernowComponent,
    IntruderComponent,
    ManageEngineComponent,
    QualysComponent,
    NessusComponent,
  ],
  imports: [
    NgApexchartsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SidebarModule,
    NavbarModule,
    DataTablesModule,
    FooterModule,
    ToastrModule.forRoot(),
    // FixedPluginModule
    NgbModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
