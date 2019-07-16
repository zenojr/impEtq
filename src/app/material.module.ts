import { MatFormFieldModule, MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule,
            MatCheckboxModule,
            MatFormFieldModule],
  exports: [MatButtonModule,
            MatCheckboxModule,
            MatFormFieldModule],
})
export class MaterialModule { }
