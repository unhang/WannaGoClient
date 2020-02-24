import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FaqsPageRoutingModule } from './faqs-routing.module';

import { FaqsPage } from './faqs.page';
import {ComponentModule} from '../../../components/component.module';
import {GoQuestionComponent} from './question/question.component';
import {GoContactComponent} from './contact/contact.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FaqsPageRoutingModule,
    ComponentModule
  ],
  declarations: [
      FaqsPage,
      GoQuestionComponent,
      GoContactComponent
  ]
})
export class FaqsPageModule {}
