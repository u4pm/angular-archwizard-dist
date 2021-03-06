/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, forwardRef } from '@angular/core';
import { WizardStep } from '../util/wizard-step.interface';
/**
 * The `aw-wizard-step` component is used to define a normal step inside a wizard.
 *
 * ### Syntax
 *
 * With `stepTitle` and `navigationSymbol` inputs:
 *
 * ```html
 * <aw-wizard-step [stepTitle]="step title" [navigationSymbol]="{ symbol: 'symbol', fontFamily: 'font-family' }"
 *    [canExit]="deciding function" (stepEnter)="enter function" (stepExit)="exit function">
 *    ...
 * </aw-wizard-step>
 * ```
 *
 * With `awWizardStepTitle` and `awWizardStepSymbol` directives:
 *
 * ```html
 * <aw-wizard-step"
 *    [canExit]="deciding function" (stepEnter)="enter function" (stepExit)="exit function">
 *    <ng-template awWizardStepTitle>
 *        step title
 *    </ng-template>
 *    <ng-template awWizardStepSymbol>
 *        symbol
 *    </ng-template>
 *    ...
 * </aw-wizard-step>
 * ```
 *
 * ### Example
 *
 * With `stepTitle` and `navigationSymbol` inputs:
 *
 * ```html
 * <aw-wizard-step stepTitle="Address information" [navigationSymbol]="{ symbol: '&#xf1ba;', fontFamily: 'FontAwesome' }">
 *    ...
 * </aw-wizard-step>
 * ```
 *
 * With `awWizardStepTitle` and `awWizardStepSymbol` directives:
 *
 * ```html
 * <aw-wizard-step>
 *    <ng-template awWizardStepTitle>
 *        Address information
 *    </ng-template>
 *    <ng-template awWizardStepSymbol>
 *        <i class="fa fa-taxi"></i>
 *    </ng-template>
 * </aw-wizard-step>
 * ```
 *
 * @author Marc Arndt
 */
var WizardStepComponent = /** @class */ (function (_super) {
    tslib_1.__extends(WizardStepComponent, _super);
    function WizardStepComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WizardStepComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aw-wizard-step',
                    template: "<ng-content></ng-content>\n",
                    providers: [
                        { provide: WizardStep, useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return WizardStepComponent; })) }
                    ]
                }] }
    ];
    return WizardStepComponent;
}(WizardStep));
export { WizardStepComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLXN0ZXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1hcmNod2l6YXJkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvd2l6YXJkLXN0ZXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLCtCQUErQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0R6RDtJQU95QywrQ0FBVTtJQVBuRDs7SUFRQSxDQUFDOztnQkFSQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsdUNBQXlDO29CQUN6QyxTQUFTLEVBQUU7d0JBQ1QsRUFBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVOzs7NEJBQUMsY0FBTSxPQUFBLG1CQUFtQixFQUFuQixDQUFtQixFQUFDLEVBQUM7cUJBQzFFO2lCQUNGOztJQUVELDBCQUFDO0NBQUEsQUFSRCxDQU95QyxVQUFVLEdBQ2xEO1NBRFksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIGZvcndhcmRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtXaXphcmRTdGVwfSBmcm9tICcuLi91dGlsL3dpemFyZC1zdGVwLmludGVyZmFjZSc7XG5cbi8qKlxuICogVGhlIGBhdy13aXphcmQtc3RlcGAgY29tcG9uZW50IGlzIHVzZWQgdG8gZGVmaW5lIGEgbm9ybWFsIHN0ZXAgaW5zaWRlIGEgd2l6YXJkLlxuICpcbiAqICMjIyBTeW50YXhcbiAqXG4gKiBXaXRoIGBzdGVwVGl0bGVgIGFuZCBgbmF2aWdhdGlvblN5bWJvbGAgaW5wdXRzOlxuICpcbiAqIGBgYGh0bWxcbiAqIDxhdy13aXphcmQtc3RlcCBbc3RlcFRpdGxlXT1cInN0ZXAgdGl0bGVcIiBbbmF2aWdhdGlvblN5bWJvbF09XCJ7IHN5bWJvbDogJ3N5bWJvbCcsIGZvbnRGYW1pbHk6ICdmb250LWZhbWlseScgfVwiXG4gKiAgICBbY2FuRXhpdF09XCJkZWNpZGluZyBmdW5jdGlvblwiIChzdGVwRW50ZXIpPVwiZW50ZXIgZnVuY3Rpb25cIiAoc3RlcEV4aXQpPVwiZXhpdCBmdW5jdGlvblwiPlxuICogICAgLi4uXG4gKiA8L2F3LXdpemFyZC1zdGVwPlxuICogYGBgXG4gKlxuICogV2l0aCBgYXdXaXphcmRTdGVwVGl0bGVgIGFuZCBgYXdXaXphcmRTdGVwU3ltYm9sYCBkaXJlY3RpdmVzOlxuICpcbiAqIGBgYGh0bWxcbiAqIDxhdy13aXphcmQtc3RlcFwiXG4gKiAgICBbY2FuRXhpdF09XCJkZWNpZGluZyBmdW5jdGlvblwiIChzdGVwRW50ZXIpPVwiZW50ZXIgZnVuY3Rpb25cIiAoc3RlcEV4aXQpPVwiZXhpdCBmdW5jdGlvblwiPlxuICogICAgPG5nLXRlbXBsYXRlIGF3V2l6YXJkU3RlcFRpdGxlPlxuICogICAgICAgIHN0ZXAgdGl0bGVcbiAqICAgIDwvbmctdGVtcGxhdGU+XG4gKiAgICA8bmctdGVtcGxhdGUgYXdXaXphcmRTdGVwU3ltYm9sPlxuICogICAgICAgIHN5bWJvbFxuICogICAgPC9uZy10ZW1wbGF0ZT5cbiAqICAgIC4uLlxuICogPC9hdy13aXphcmQtc3RlcD5cbiAqIGBgYFxuICpcbiAqICMjIyBFeGFtcGxlXG4gKlxuICogV2l0aCBgc3RlcFRpdGxlYCBhbmQgYG5hdmlnYXRpb25TeW1ib2xgIGlucHV0czpcbiAqXG4gKiBgYGBodG1sXG4gKiA8YXctd2l6YXJkLXN0ZXAgc3RlcFRpdGxlPVwiQWRkcmVzcyBpbmZvcm1hdGlvblwiIFtuYXZpZ2F0aW9uU3ltYm9sXT1cInsgc3ltYm9sOiAnJiN4ZjFiYTsnLCBmb250RmFtaWx5OiAnRm9udEF3ZXNvbWUnIH1cIj5cbiAqICAgIC4uLlxuICogPC9hdy13aXphcmQtc3RlcD5cbiAqIGBgYFxuICpcbiAqIFdpdGggYGF3V2l6YXJkU3RlcFRpdGxlYCBhbmQgYGF3V2l6YXJkU3RlcFN5bWJvbGAgZGlyZWN0aXZlczpcbiAqXG4gKiBgYGBodG1sXG4gKiA8YXctd2l6YXJkLXN0ZXA+XG4gKiAgICA8bmctdGVtcGxhdGUgYXdXaXphcmRTdGVwVGl0bGU+XG4gKiAgICAgICAgQWRkcmVzcyBpbmZvcm1hdGlvblxuICogICAgPC9uZy10ZW1wbGF0ZT5cbiAqICAgIDxuZy10ZW1wbGF0ZSBhd1dpemFyZFN0ZXBTeW1ib2w+XG4gKiAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS10YXhpXCI+PC9pPlxuICogICAgPC9uZy10ZW1wbGF0ZT5cbiAqIDwvYXctd2l6YXJkLXN0ZXA+XG4gKiBgYGBcbiAqXG4gKiBAYXV0aG9yIE1hcmMgQXJuZHRcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXctd2l6YXJkLXN0ZXAnLFxuICB0ZW1wbGF0ZVVybDogJ3dpemFyZC1zdGVwLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAge3Byb3ZpZGU6IFdpemFyZFN0ZXAsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFdpemFyZFN0ZXBDb21wb25lbnQpfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFdpemFyZFN0ZXBDb21wb25lbnQgZXh0ZW5kcyBXaXphcmRTdGVwIHtcbn1cbiJdfQ==