/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, EventEmitter, Host, Output } from '@angular/core';
import { WizardCompletionStep } from '../util/wizard-completion-step.interface';
/**
 * The `awEnableBackLinks` directive can be used to allow the user to leave a [[WizardCompletionStep]] after is has been entered.
 *
 * ### Syntax
 *
 * ```html
 * <aw-wizard-completion-step awEnableBackLinks (stepExit)="exit function">
 *     ...
 * </aw-wizard-completion-step>
 * ```
 *
 * ### Example
 *
 * ```html
 * <aw-wizard-completion-step stepTitle="Final step" awEnableBackLinks>
 *     ...
 * </aw-wizard-completion-step>
 * ```
 *
 * @author Marc Arndt
 */
var EnableBackLinksDirective = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param completionStep The wizard completion step, which should be exitable
     */
    function EnableBackLinksDirective(completionStep) {
        this.completionStep = completionStep;
        /**
         * This EventEmitter is called when the step is exited.
         * The bound method can be used to do cleanup work.
         */
        this.stepExit = new EventEmitter();
    }
    /**
     * Initialization work
     */
    /**
     * Initialization work
     * @return {?}
     */
    EnableBackLinksDirective.prototype.ngOnInit = /**
     * Initialization work
     * @return {?}
     */
    function () {
        this.completionStep.canExit = true;
        this.completionStep.stepExit = this.stepExit;
    };
    EnableBackLinksDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[awEnableBackLinks]'
                },] }
    ];
    /** @nocollapse */
    EnableBackLinksDirective.ctorParameters = function () { return [
        { type: WizardCompletionStep, decorators: [{ type: Host }] }
    ]; };
    EnableBackLinksDirective.propDecorators = {
        stepExit: [{ type: Output }]
    };
    return EnableBackLinksDirective;
}());
export { EnableBackLinksDirective };
if (false) {
    /**
     * This EventEmitter is called when the step is exited.
     * The bound method can be used to do cleanup work.
     * @type {?}
     */
    EnableBackLinksDirective.prototype.stepExit;
    /**
     * @type {?}
     * @private
     */
    EnableBackLinksDirective.prototype.completionStep;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5hYmxlLWJhY2stbGlua3MuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1hcmNod2l6YXJkLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvZW5hYmxlLWJhY2stbGlua3MuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRTVFLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLDBDQUEwQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUI5RTtJQVdFOzs7O09BSUc7SUFDSCxrQ0FBNEIsY0FBb0M7UUFBcEMsbUJBQWMsR0FBZCxjQUFjLENBQXNCOzs7OztRQVB6RCxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQW1CLENBQUM7SUFRdEQsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNJLDJDQUFROzs7O0lBQWY7UUFDRSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDbkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUMvQyxDQUFDOztnQkF6QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7aUJBQ2hDOzs7O2dCQXpCTyxvQkFBb0IsdUJBdUNiLElBQUk7OzsyQkFSaEIsTUFBTTs7SUFrQlQsK0JBQUM7Q0FBQSxBQTFCRCxJQTBCQztTQXZCWSx3QkFBd0I7Ozs7Ozs7SUFLbkMsNENBQ3NEOzs7OztJQU8xQyxrREFBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBIb3N0LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01vdmluZ0RpcmVjdGlvbn0gZnJvbSAnLi4vdXRpbC9tb3ZpbmctZGlyZWN0aW9uLmVudW0nO1xuaW1wb3J0IHtXaXphcmRDb21wbGV0aW9uU3RlcH0gZnJvbSAnLi4vdXRpbC93aXphcmQtY29tcGxldGlvbi1zdGVwLmludGVyZmFjZSc7XG5cbi8qKlxuICogVGhlIGBhd0VuYWJsZUJhY2tMaW5rc2AgZGlyZWN0aXZlIGNhbiBiZSB1c2VkIHRvIGFsbG93IHRoZSB1c2VyIHRvIGxlYXZlIGEgW1tXaXphcmRDb21wbGV0aW9uU3RlcF1dIGFmdGVyIGlzIGhhcyBiZWVuIGVudGVyZWQuXG4gKlxuICogIyMjIFN5bnRheFxuICpcbiAqIGBgYGh0bWxcbiAqIDxhdy13aXphcmQtY29tcGxldGlvbi1zdGVwIGF3RW5hYmxlQmFja0xpbmtzIChzdGVwRXhpdCk9XCJleGl0IGZ1bmN0aW9uXCI+XG4gKiAgICAgLi4uXG4gKiA8L2F3LXdpemFyZC1jb21wbGV0aW9uLXN0ZXA+XG4gKiBgYGBcbiAqXG4gKiAjIyMgRXhhbXBsZVxuICpcbiAqIGBgYGh0bWxcbiAqIDxhdy13aXphcmQtY29tcGxldGlvbi1zdGVwIHN0ZXBUaXRsZT1cIkZpbmFsIHN0ZXBcIiBhd0VuYWJsZUJhY2tMaW5rcz5cbiAqICAgICAuLi5cbiAqIDwvYXctd2l6YXJkLWNvbXBsZXRpb24tc3RlcD5cbiAqIGBgYFxuICpcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYXdFbmFibGVCYWNrTGlua3NdJ1xufSlcbmV4cG9ydCBjbGFzcyBFbmFibGVCYWNrTGlua3NEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICAvKipcbiAgICogVGhpcyBFdmVudEVtaXR0ZXIgaXMgY2FsbGVkIHdoZW4gdGhlIHN0ZXAgaXMgZXhpdGVkLlxuICAgKiBUaGUgYm91bmQgbWV0aG9kIGNhbiBiZSB1c2VkIHRvIGRvIGNsZWFudXAgd29yay5cbiAgICovXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgc3RlcEV4aXQgPSBuZXcgRXZlbnRFbWl0dGVyPE1vdmluZ0RpcmVjdGlvbj4oKTtcblxuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICpcbiAgICogQHBhcmFtIGNvbXBsZXRpb25TdGVwIFRoZSB3aXphcmQgY29tcGxldGlvbiBzdGVwLCB3aGljaCBzaG91bGQgYmUgZXhpdGFibGVcbiAgICovXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgcHJpdmF0ZSBjb21wbGV0aW9uU3RlcDogV2l6YXJkQ29tcGxldGlvblN0ZXApIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXphdGlvbiB3b3JrXG4gICAqL1xuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jb21wbGV0aW9uU3RlcC5jYW5FeGl0ID0gdHJ1ZTtcbiAgICB0aGlzLmNvbXBsZXRpb25TdGVwLnN0ZXBFeGl0ID0gdGhpcy5zdGVwRXhpdDtcbiAgfVxufVxuIl19