(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ng-common', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["ng-common"] = {}, global.ng.core));
})(this, (function (exports, i0) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);

    var NgCommonService = /** @class */ (function () {
        function NgCommonService() {
        }
        return NgCommonService;
    }());
    NgCommonService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: NgCommonService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    NgCommonService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: NgCommonService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: NgCommonService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var NgCommonComponent = /** @class */ (function () {
        function NgCommonComponent() {
        }
        NgCommonComponent.prototype.ngOnInit = function () {
        };
        return NgCommonComponent;
    }());
    NgCommonComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: NgCommonComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    NgCommonComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: NgCommonComponent, selector: "ng-common-ng-common", ngImport: i0__namespace, template: "\n    <p>\n      ng-common works!\n    </p>\n  ", isInline: true });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: NgCommonComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'ng-common-ng-common',
                        template: "\n    <p>\n      ng-common works!\n    </p>\n  ",
                        styles: []
                    }]
            }], ctorParameters: function () { return []; } });

    var FooterComponent = /** @class */ (function () {
        function FooterComponent() {
        }
        FooterComponent.prototype.ngOnInit = function () {
        };
        return FooterComponent;
    }());
    FooterComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: FooterComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    FooterComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: FooterComponent, selector: "ng-common-footer", ngImport: i0__namespace, template: "<p>footer works!</p>\n", styles: [""] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: FooterComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'ng-common-footer',
                        templateUrl: './footer.component.html',
                        styleUrls: ['./footer.component.css']
                    }]
            }], ctorParameters: function () { return []; } });

    var NgCommonModule = /** @class */ (function () {
        function NgCommonModule() {
        }
        return NgCommonModule;
    }());
    NgCommonModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: NgCommonModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    NgCommonModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: NgCommonModule, declarations: [NgCommonComponent,
            FooterComponent], exports: [NgCommonComponent,
            FooterComponent] });
    NgCommonModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: NgCommonModule, imports: [[]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: NgCommonModule, decorators: [{
                type: i0.NgModule,
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

    exports.FooterComponent = FooterComponent;
    exports.NgCommonComponent = NgCommonComponent;
    exports.NgCommonModule = NgCommonModule;
    exports.NgCommonService = NgCommonService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ng-common.umd.js.map
