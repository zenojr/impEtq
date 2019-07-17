import { MatFormFieldModule, MatButtonModule, MatCheckboxModule, MatInputModule, MatOptionModule,
         MatSelectModule, MatTabsModule, MatCardModule, MatIconModule, MatRadioModule} from '@angular/material';
import { NgModule } from '@angular/core';

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
            MatRadioModule],
  exports: [MatButtonModule,
            MatCheckboxModule,
            MatFormFieldModule,
            MatInputModule,
            MatOptionModule,
            MatSelectModule,
            MatTabsModule,
            MatCardModule,
            MatIconModule,
            MatRadioModule],
})
export class MaterialModule { }
