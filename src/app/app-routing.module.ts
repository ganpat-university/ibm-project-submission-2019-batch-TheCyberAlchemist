import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';

import { PresentationComponent } from './presentation/presentation.component';
import { CompTableComponent } from './presentation/comp-table/comp-table.component';
import { GraphsComponent } from './presentation/graphs/graphs.component';
import { SanernowComponent } from './presentation/sanernow/sanernow.component';
import { IntruderComponent } from './presentation/intruder/intruder.component';
import { ManageEngineComponent } from './presentation/manage-engine/manage-engine.component';
import { QualysComponent } from './presentation/qualys/qualys.component';
import { NessusComponent } from './presentation/nessus/nessus.component';


const routes: Routes = [
  {path: 'homepage',component: HomepageComponent,data: {title: 'Homepage'}},
  {path: 'presentation', component:PresentationComponent,data: {title: 'Presentation'},children: [
    {path: 'comp-table',component: CompTableComponent,data: {title: 'Comparison Table'}},
    {path: 'graphs',component: GraphsComponent,data: {title: 'Graphs'}},
    {path: 'sanernow',component: SanernowComponent,data: {title: 'SanerNow'}},
    {path: 'intruder',component: IntruderComponent,data: {title: 'Intruder'}},
    {path: 'manage-engine',component: ManageEngineComponent,data: {title: 'ManageEngine'}},
    {path: 'qualys',component: QualysComponent,data: {title: 'Qualys'}},
    {path: 'nessus',component: NessusComponent,data: {title: 'Nesssus'}},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
