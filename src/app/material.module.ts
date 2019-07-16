import { MatFormFieldModule, MatButtonModule, MatCheckboxModule, MatInputModule, MatOptionModule,
         MatSelectModule, MatTabsModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule,
            MatCheckboxModule,
            MatFormFieldModule,
            MatInputModule,
            MatOptionModule,
            MatSelectModule,
            MatTabsModule],
  exports: [MatButtonModule,
            MatCheckboxModule,
            MatFormFieldModule,
            MatInputModule,
            MatOptionModule,
            MatSelectModule,
            MatTabsModule],
})
export class MaterialModule { }
