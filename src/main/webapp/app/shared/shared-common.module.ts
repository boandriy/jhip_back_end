import { NgModule } from '@angular/core';

import { TropSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [TropSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [TropSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class TropSharedCommonModule {}
