import { Directive, ElementRef, OnInit } from '@angular/core';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';

@Directive({

    selector: '[immediateClick]'
})
export class ImmediateClickDirective implements OnInit {

    constructor(
        private element:ElementRef,
        private platformDetector:PlatformDetectorService

    ){}

    ngOnInit(): void {
        
        if(this.platformDetector.isPlatformBrowser()){

            this.element.nativeElement.click();
        }
    }
}