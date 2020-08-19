import { NgModule } from "@angular/core";

import { PhotoModule } from './photo/photo.module';
import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { CardModule } from '../shared/components/card/card.module';
import { DarkenOnHoverModule } from '../shared/directives/darken-on-hover/darken-on-hover.module';
import { PhotoDetailsModule } from './photo-details/photo-details.module';

@NgModule({
    
    imports: [ 
        PhotoModule,
        PhotoListModule,        
        PhotoFormModule,
        CardModule,
        DarkenOnHoverModule,
        PhotoDetailsModule        
    ]
})
export class PhotosModule{}