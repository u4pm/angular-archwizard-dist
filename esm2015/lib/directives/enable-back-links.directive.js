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
export class EnableBackLinksDirective {
    /**
     * Constructor
     *
     * @param {?} completionStep The wizard completion step, which should be exitable
     */
    constructor(completionStep) {
        this.completionStep = completionStep;
        /**
         * This EventEmitter is called when the step is exited.
         * The bound method can be used to do cleanup work.
         */
        this.stepExit = new EventEmitter();
    }
    /**
     * Initialization work
     * @return {?}
     */
    ngOnInit() {
        this.completionStep.canExit = true;
        this.completionStep.stepExit = this.stepExit;
    }
}
EnableBackLinksDirective.decorators = [
    { type: Directive, args: [{
                selector: '[awEnableBackLinks]'
            },] }
];
/** @nocollapse */
EnableBackLinksDirective.ctorParameters = () => [
    { type: WizardCompletionStep, decorators: [{ type: Host }] }
];
EnableBackLinksDirective.propDecorators = {
    stepExit: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5hYmxlLWJhY2stbGlua3MuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1hcmNod2l6YXJkLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvZW5hYmxlLWJhY2stbGlua3MuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRTVFLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLDBDQUEwQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEI5RSxNQUFNLE9BQU8sd0JBQXdCOzs7Ozs7SUFhbkMsWUFBNEIsY0FBb0M7UUFBcEMsbUJBQWMsR0FBZCxjQUFjLENBQXNCOzs7OztRQVB6RCxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQW1CLENBQUM7SUFRdEQsQ0FBQzs7Ozs7SUFLTSxRQUFRO1FBQ2IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ25DLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDL0MsQ0FBQzs7O1lBekJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2FBQ2hDOzs7O1lBekJPLG9CQUFvQix1QkF1Q2IsSUFBSTs7O3VCQVJoQixNQUFNOzs7Ozs7OztJQUFQLDRDQUNzRDs7Ozs7SUFPMUMsa0RBQW9EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSG9zdCwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNb3ZpbmdEaXJlY3Rpb259IGZyb20gJy4uL3V0aWwvbW92aW5nLWRpcmVjdGlvbi5lbnVtJztcbmltcG9ydCB7V2l6YXJkQ29tcGxldGlvblN0ZXB9IGZyb20gJy4uL3V0aWwvd2l6YXJkLWNvbXBsZXRpb24tc3RlcC5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIFRoZSBgYXdFbmFibGVCYWNrTGlua3NgIGRpcmVjdGl2ZSBjYW4gYmUgdXNlZCB0byBhbGxvdyB0aGUgdXNlciB0byBsZWF2ZSBhIFtbV2l6YXJkQ29tcGxldGlvblN0ZXBdXSBhZnRlciBpcyBoYXMgYmVlbiBlbnRlcmVkLlxuICpcbiAqICMjIyBTeW50YXhcbiAqXG4gKiBgYGBodG1sXG4gKiA8YXctd2l6YXJkLWNvbXBsZXRpb24tc3RlcCBhd0VuYWJsZUJhY2tMaW5rcyAoc3RlcEV4aXQpPVwiZXhpdCBmdW5jdGlvblwiPlxuICogICAgIC4uLlxuICogPC9hdy13aXphcmQtY29tcGxldGlvbi1zdGVwPlxuICogYGBgXG4gKlxuICogIyMjIEV4YW1wbGVcbiAqXG4gKiBgYGBodG1sXG4gKiA8YXctd2l6YXJkLWNvbXBsZXRpb24tc3RlcCBzdGVwVGl0bGU9XCJGaW5hbCBzdGVwXCIgYXdFbmFibGVCYWNrTGlua3M+XG4gKiAgICAgLi4uXG4gKiA8L2F3LXdpemFyZC1jb21wbGV0aW9uLXN0ZXA+XG4gKiBgYGBcbiAqXG4gKiBAYXV0aG9yIE1hcmMgQXJuZHRcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2F3RW5hYmxlQmFja0xpbmtzXSdcbn0pXG5leHBvcnQgY2xhc3MgRW5hYmxlQmFja0xpbmtzRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgLyoqXG4gICAqIFRoaXMgRXZlbnRFbWl0dGVyIGlzIGNhbGxlZCB3aGVuIHRoZSBzdGVwIGlzIGV4aXRlZC5cbiAgICogVGhlIGJvdW5kIG1ldGhvZCBjYW4gYmUgdXNlZCB0byBkbyBjbGVhbnVwIHdvcmsuXG4gICAqL1xuICBAT3V0cHV0KClcbiAgcHVibGljIHN0ZXBFeGl0ID0gbmV3IEV2ZW50RW1pdHRlcjxNb3ZpbmdEaXJlY3Rpb24+KCk7XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSBjb21wbGV0aW9uU3RlcCBUaGUgd2l6YXJkIGNvbXBsZXRpb24gc3RlcCwgd2hpY2ggc2hvdWxkIGJlIGV4aXRhYmxlXG4gICAqL1xuICBjb25zdHJ1Y3RvcihASG9zdCgpIHByaXZhdGUgY29tcGxldGlvblN0ZXA6IFdpemFyZENvbXBsZXRpb25TdGVwKSB7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6YXRpb24gd29ya1xuICAgKi9cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY29tcGxldGlvblN0ZXAuY2FuRXhpdCA9IHRydWU7XG4gICAgdGhpcy5jb21wbGV0aW9uU3RlcC5zdGVwRXhpdCA9IHRoaXMuc3RlcEV4aXQ7XG4gIH1cbn1cbiJdfQ==