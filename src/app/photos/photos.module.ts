import { NgModule } from "@angular/core";

import { PhotoModule } from './photo/photo.module';
import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { CardModule } from '../shared/components/card/card.module';
import { DarkenOnHoverModule } from '../shared/directives/darken-on-hover/darken-on-hover.module';

@NgModule({
    
    imports: [ 
        PhotoModule,
        PhotoListModule,        
        PhotoFormModule,
        CardModule,
        DarkenOnHoverModule        
    ]
})
export class PhotosModule{}