import { MatFormFieldModule, MatButtonModule, MatCheckboxModule, MatInputModule, MatOptionModule,
         MatSelectModule, MatTabsModule, MatCardModule, MatIconModule, MatRadioModule,
         MatStepperModule, MatSnackBarModule} from '@angular/material';
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
            ReactiveFormsModule,
            MatSnackBarModule],
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
            ReactiveFormsModule,
            MatSnackBarModule],
})
export class MaterialModule { }
