/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventEmitter } from '@angular/core';
import { WizardStep } from './wizard-step.interface';
/**
 * Basic functionality every wizard completion step needs to provide
 *
 * @author Marc Arndt
 * @abstract
 */
var /**
 * Basic functionality every wizard completion step needs to provide
 *
 * @author Marc Arndt
 * @abstract
 */
WizardCompletionStep = /** @class */ (function (_super) {
    tslib_1.__extends(WizardCompletionStep, _super);
    function WizardCompletionStep() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * @inheritDoc
         */
        _this.stepExit = new EventEmitter();
        /**
         * @inheritDoc
         */
        _this.canExit = false;
        return _this;
    }
    /**
     * @inheritDoc
     */
    /**
     * @inheritDoc
     * @param {?} direction
     * @return {?}
     */
    WizardCompletionStep.prototype.enter = /**
     * @inheritDoc
     * @param {?} direction
     * @return {?}
     */
    function (direction) {
        this.completed = true;
        this.stepEnter.emit(direction);
    };
    /**
     * @inheritDoc
     */
    /**
     * @inheritDoc
     * @param {?} direction
     * @return {?}
     */
    WizardCompletionStep.prototype.exit = /**
     * @inheritDoc
     * @param {?} direction
     * @return {?}
     */
    function (direction) {
        // set this completion step as incomplete (unless it happens to be initiallyCompleted)
        this.completed = this.initiallyCompleted;
        this.stepExit.emit(direction);
    };
    return WizardCompletionStep;
}(WizardStep));
/**
 * Basic functionality every wizard completion step needs to provide
 *
 * @author Marc Arndt
 * @abstract
 */
export { WizardCompletionStep };
if (false) {
    /**
     * @inheritDoc
     * @type {?}
     */
    WizardCompletionStep.prototype.stepExit;
    /**
     * @inheritDoc
     * @type {?}
     */
    WizardCompletionStep.prototype.canExit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLWNvbXBsZXRpb24tc3RlcC5pbnRlcmZhY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvIiwic291cmNlcyI6WyJsaWIvdXRpbC93aXphcmQtY29tcGxldGlvbi1zdGVwLmludGVyZmFjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHlCQUF5QixDQUFDOzs7Ozs7O0FBUW5EOzs7Ozs7O0lBQW1ELGdEQUFVO0lBQTdEO1FBQUEscUVBMkJDOzs7O1FBdkJRLGNBQVEsR0FBRyxJQUFJLFlBQVksRUFBbUIsQ0FBQzs7OztRQUsvQyxhQUFPLEdBQXdELEtBQUssQ0FBQzs7SUFrQjlFLENBQUM7SUFoQkM7O09BRUc7Ozs7OztJQUNJLG9DQUFLOzs7OztJQUFaLFVBQWEsU0FBMEI7UUFDckMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVEOztPQUVHOzs7Ozs7SUFDSSxtQ0FBSTs7Ozs7SUFBWCxVQUFZLFNBQTBCO1FBQ3BDLHNGQUFzRjtRQUN0RixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztRQUN6QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBQ0gsMkJBQUM7QUFBRCxDQUFDLEFBM0JELENBQW1ELFVBQVUsR0EyQjVEOzs7Ozs7Ozs7Ozs7O0lBdkJDLHdDQUFzRDs7Ozs7SUFLdEQsdUNBQTRFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtXaXphcmRTdGVwfSBmcm9tICcuL3dpemFyZC1zdGVwLmludGVyZmFjZSc7XG5pbXBvcnQge01vdmluZ0RpcmVjdGlvbn0gZnJvbSAnLi9tb3ZpbmctZGlyZWN0aW9uLmVudW0nO1xuXG4vKipcbiAqIEJhc2ljIGZ1bmN0aW9uYWxpdHkgZXZlcnkgd2l6YXJkIGNvbXBsZXRpb24gc3RlcCBuZWVkcyB0byBwcm92aWRlXG4gKlxuICogQGF1dGhvciBNYXJjIEFybmR0XG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBXaXphcmRDb21wbGV0aW9uU3RlcCBleHRlbmRzIFdpemFyZFN0ZXAge1xuICAvKipcbiAgICogQGluaGVyaXREb2NcbiAgICovXG4gIHB1YmxpYyBzdGVwRXhpdCA9IG5ldyBFdmVudEVtaXR0ZXI8TW92aW5nRGlyZWN0aW9uPigpO1xuXG4gIC8qKlxuICAgKiBAaW5oZXJpdERvY1xuICAgKi9cbiAgcHVibGljIGNhbkV4aXQ6ICgoZGlyZWN0aW9uOiBNb3ZpbmdEaXJlY3Rpb24pID0+IGJvb2xlYW4pIHwgYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBAaW5oZXJpdERvY1xuICAgKi9cbiAgcHVibGljIGVudGVyKGRpcmVjdGlvbjogTW92aW5nRGlyZWN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5jb21wbGV0ZWQgPSB0cnVlO1xuICAgIHRoaXMuc3RlcEVudGVyLmVtaXQoZGlyZWN0aW9uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaW5oZXJpdERvY1xuICAgKi9cbiAgcHVibGljIGV4aXQoZGlyZWN0aW9uOiBNb3ZpbmdEaXJlY3Rpb24pOiB2b2lkIHtcbiAgICAvLyBzZXQgdGhpcyBjb21wbGV0aW9uIHN0ZXAgYXMgaW5jb21wbGV0ZSAodW5sZXNzIGl0IGhhcHBlbnMgdG8gYmUgaW5pdGlhbGx5Q29tcGxldGVkKVxuICAgIHRoaXMuY29tcGxldGVkID0gdGhpcy5pbml0aWFsbHlDb21wbGV0ZWQ7XG4gICAgdGhpcy5zdGVwRXhpdC5lbWl0KGRpcmVjdGlvbik7XG4gIH1cbn1cbiJdfQ==