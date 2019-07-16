import { MatFormFieldModule, MatButtonModule, MatCheckboxModule, MatInputModule, MatOptionModule,
         MatSelectModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule,
            MatCheckboxModule,
            MatFormFieldModule,
            MatInputModule,
            MatOptionModule,
            MatSelectModule],
  exports: [MatButtonModule,
            MatCheckboxModule,
            MatFormFieldModule,
            MatInputModule,
            MatOptionModule,
            MatSelectModule],
})
export class MaterialModule { }
