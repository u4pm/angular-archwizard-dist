/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Host } from '@angular/core';
import { WizardStep } from '../util/wizard-step.interface';
/**
 * The `awSelectedStep` directive can be used on a [[WizardStep]] to set it as selected after the wizard initialisation or a reset.
 *
 * ### Syntax
 *
 * ```html
 * <aw-wizard-step stepTitle="Step title" awSelectedStep>
 *     ...
 * </aw-wizard-step>
 * ```
 *
 * @author Marc Arndt
 */
var SelectedStepDirective = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param wizardStep The wizard step, which should be selected by default
     */
    function SelectedStepDirective(wizardStep) {
        this.wizardStep = wizardStep;
    }
    /**
     * Initialization work
     */
    /**
     * Initialization work
     * @return {?}
     */
    SelectedStepDirective.prototype.ngOnInit = /**
     * Initialization work
     * @return {?}
     */
    function () {
        this.wizardStep.defaultSelected = true;
    };
    SelectedStepDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[awSelectedStep]'
                },] }
    ];
    /** @nocollapse */
    SelectedStepDirective.ctorParameters = function () { return [
        { type: WizardStep, decorators: [{ type: Host }] }
    ]; };
    return SelectedStepDirective;
}());
export { SelectedStepDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SelectedStepDirective.prototype.wizardStep;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0ZWQtc3RlcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9zZWxlY3RlZC1zdGVwLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxJQUFJLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLCtCQUErQixDQUFDOzs7Ozs7Ozs7Ozs7OztBQWV6RDtJQUlFOzs7O09BSUc7SUFDSCwrQkFBNEIsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUNsRCxDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0ksd0NBQVE7Ozs7SUFBZjtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUN6QyxDQUFDOztnQkFqQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7aUJBQzdCOzs7O2dCQWpCTyxVQUFVLHVCQXdCSCxJQUFJOztJQVNuQiw0QkFBQztDQUFBLEFBbEJELElBa0JDO1NBZlkscUJBQXFCOzs7Ozs7SUFNcEIsMkNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEhvc3QsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1dpemFyZFN0ZXB9IGZyb20gJy4uL3V0aWwvd2l6YXJkLXN0ZXAuaW50ZXJmYWNlJztcblxuLyoqXG4gKiBUaGUgYGF3U2VsZWN0ZWRTdGVwYCBkaXJlY3RpdmUgY2FuIGJlIHVzZWQgb24gYSBbW1dpemFyZFN0ZXBdXSB0byBzZXQgaXQgYXMgc2VsZWN0ZWQgYWZ0ZXIgdGhlIHdpemFyZCBpbml0aWFsaXNhdGlvbiBvciBhIHJlc2V0LlxuICpcbiAqICMjIyBTeW50YXhcbiAqXG4gKiBgYGBodG1sXG4gKiA8YXctd2l6YXJkLXN0ZXAgc3RlcFRpdGxlPVwiU3RlcCB0aXRsZVwiIGF3U2VsZWN0ZWRTdGVwPlxuICogICAgIC4uLlxuICogPC9hdy13aXphcmQtc3RlcD5cbiAqIGBgYFxuICpcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYXdTZWxlY3RlZFN0ZXBdJ1xufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RlZFN0ZXBEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHdpemFyZFN0ZXAgVGhlIHdpemFyZCBzdGVwLCB3aGljaCBzaG91bGQgYmUgc2VsZWN0ZWQgYnkgZGVmYXVsdFxuICAgKi9cbiAgY29uc3RydWN0b3IoQEhvc3QoKSBwcml2YXRlIHdpemFyZFN0ZXA6IFdpemFyZFN0ZXApIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXphdGlvbiB3b3JrXG4gICAqL1xuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy53aXphcmRTdGVwLmRlZmF1bHRTZWxlY3RlZCA9IHRydWU7XG4gIH1cbn1cbiJdfQ==