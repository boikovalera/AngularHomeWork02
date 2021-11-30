import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class NgCommonService {
    constructor() { }
}
NgCommonService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: NgCommonService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
NgCommonService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: NgCommonService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: NgCommonService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class NgCommonComponent {
    constructor() { }
    ngOnInit() {
    }
}
NgCommonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: NgCommonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NgCommonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: NgCommonComponent, selector: "ng-common-ng-common", ngImport: i0, template: `
    <p>
      ng-common works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: NgCommonComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ng-common-ng-common',
                    template: `
    <p>
      ng-common works!
    </p>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: FooterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
FooterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: FooterComponent, selector: "ng-common-footer", ngImport: i0, template: "<p>footer works!</p>\n", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: FooterComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ng-common-footer',
                    templateUrl: './footer.component.html',
                    styleUrls: ['./footer.component.css']
                }]
        }], ctorParameters: function () { return []; } });

class NgCommonModule {
}
NgCommonModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: NgCommonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgCommonModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: NgCommonModule, declarations: [NgCommonComponent,
        FooterComponent], exports: [NgCommonComponent,
        FooterComponent] });
NgCommonModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: NgCommonModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: NgCommonModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        NgCommonComponent,
                        FooterComponent
                    ],
                    imports: [],
                    exports: [
                        NgCommonComponent,
                        FooterComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of ng-common
 */

/**
 * Generated bundle index. Do not edit.
 */

export { FooterComponent, NgCommonComponent, NgCommonModule, NgCommonService };
//# sourceMappingURL=ng-common.js.map
