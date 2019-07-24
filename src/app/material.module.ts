import { MatFormFieldModule, MatButtonModule, MatCheckboxModule, MatInputModule, MatOptionModule,
         MatSelectModule, MatTabsModule, MatCardModule, MatIconModule, MatRadioModule,
         MatStepperModule} from '@angular/material';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [MatButtonModule,
            MatCheckboxModule,
            MatFormFieldModule,
            MatInputModule,
            MatOptionModule,
            MatSelectModule,
            MatTabsModule,
            MatCardModule,
            MatIconModule,
            MatRadioModule,
            FormsModule,
            ReactiveFormsModule],
  exports: [MatButtonModule,
            MatCheckboxModule,
            MatFormFieldModule,
            MatInputModule,
            MatOptionModule,
            MatSelectModule,
            MatTabsModule,
            MatCardModule,
            MatIconModule,
            MatRadioModule,
            MatStepperModule,
            FormsModule,
            ReactiveFormsModule],
})
export class MaterialModule { }
