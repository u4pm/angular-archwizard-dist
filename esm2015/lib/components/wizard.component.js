/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChildren, HostBinding, Input, QueryList, } from '@angular/core';
import { WizardStep } from '../util/wizard-step.interface';
import { MovingDirection } from '../util/moving-direction.enum';
import { ConfigurableNavigationMode } from '../navigation/configurable-navigation-mode';
/**
 * The `aw-wizard` component defines the root component of a wizard.
 * Through the setting of input parameters for the `aw-wizard` component it's possible to change the location and size
 * of its navigation bar.
 *
 * ### Syntax
 * ```html
 * <aw-wizard [navBarLocation]="location of navigation bar" [navBarLayout]="layout of navigation bar">
 *     ...
 * </aw-wizard>
 * ```
 *
 * ### Example
 *
 * Without completion step:
 *
 * ```html
 * <aw-wizard navBarLocation="top" navBarLayout="small">
 *     <aw-wizard-step>...</aw-wizard-step>
 *     <aw-wizard-step>...</aw-wizard-step>
 * </aw-wizard>
 * ```
 *
 * With completion step:
 *
 * ```html
 * <aw-wizard navBarLocation="top" navBarLayout="small">
 *     <aw-wizard-step>...</aw-wizard-step>
 *     <aw-wizard-step>...</aw-wizard-step>
 *     <aw-wizard-completion-step>...</aw-wizard-completion-step>
 * </aw-wizard>
 * ```
 *
 * @author Marc Arndt
 */
export class WizardComponent {
    /**
     * Constructor
     */
    constructor() {
        /**
         * The location of the navigation bar inside the wizard.
         * This location can be either top, bottom, left or right
         */
        this.navBarLocation = 'top';
        /**
         * The layout of the navigation bar inside the wizard.
         * The layout can be either small, large-filled, large-empty or large-symbols
         */
        this.navBarLayout = 'small';
        /**
         * The direction in which the steps inside the navigation bar should be shown.
         * The direction can be either `left-to-right` or `right-to-left`
         */
        this.navBarDirection = 'left-to-right';
        this._defaultStepIndex = 0;
        /**
         * True, if the navigation bar shouldn't be used for navigating
         */
        this.disableNavigationBar = false;
        /**
         * The navigation mode used to navigate inside the wizard
         *
         * For outside access, use the [[navigation]] getter.
         */
        this._navigation = new ConfigurableNavigationMode();
        /**
         * An array representation of all wizard steps belonging to this model
         *
         * For outside access, use the [[wizardSteps]] getter.
         */
        this._wizardSteps = [];
        /**
         * The index of the currently visible and selected step inside the wizardSteps QueryList.
         * If this wizard contains no steps, currentStepIndex is -1
         *
         * Note: Do not modify this field directly.  Instead, use navigation methods:
         * [[goToStep]], [[goToPreviousStep]], [[goToNextStep]].
         */
        this.currentStepIndex = -1;
    }
    /**
     * The initially selected step, represented by its index
     * Beware: This initial default is only used if no wizard step has been enhanced with the `selected` directive
     * @return {?}
     */
    get defaultStepIndex() {
        // This value can be either:
        // - the index of a wizard step with a `selected` directive, or
        // - the default step index, set in the [[WizardComponent]]
        // This value can be either:
        // - the index of a wizard step with a `selected` directive, or
        // - the default step index, set in the [[WizardComponent]]
        /** @type {?} */
        const foundDefaultStep = this.wizardSteps.find((/**
         * @param {?} step
         * @return {?}
         */
        step => step.defaultSelected));
        if (foundDefaultStep) {
            return this.getIndexOfStep(foundDefaultStep);
        }
        else {
            return this._defaultStepIndex;
        }
    }
    /**
     * @param {?} defaultStepIndex
     * @return {?}
     */
    set defaultStepIndex(defaultStepIndex) {
        this._defaultStepIndex = defaultStepIndex;
    }
    /**
     * Returns true if this wizard uses a horizontal orientation.
     * The wizard uses a horizontal orientation, iff the navigation bar is shown at the top or bottom of this wizard
     *
     * @return {?} True if this wizard uses a horizontal orientation
     */
    get horizontalOrientation() {
        return this.navBarLocation === 'top' || this.navBarLocation === 'bottom';
    }
    /**
     * Returns true if this wizard uses a vertical orientation.
     * The wizard uses a vertical orientation, iff the navigation bar is shown at the left or right of this wizard
     *
     * @return {?} True if this wizard uses a vertical orientation
     */
    get verticalOrientation() {
        return this.navBarLocation === 'left' || this.navBarLocation === 'right';
    }
    /**
     * Initialization work
     * @return {?}
     */
    ngAfterContentInit() {
        // add a subscriber to the wizard steps QueryList to listen to changes in the DOM
        this.wizardStepsQueryList.changes.subscribe((/**
         * @param {?} changedWizardSteps
         * @return {?}
         */
        changedWizardSteps => {
            this.updateWizardSteps(changedWizardSteps.toArray());
        }));
        // initialize the model
        this.updateWizardSteps(this.wizardStepsQueryList.toArray());
        // finally reset the whole wizard componennt
        this.reset();
    }
    /**
     * The WizardStep object belonging to the currently visible and selected step.
     * The currentStep is always the currently selected wizard step.
     * The currentStep can be either completed, if it was visited earlier,
     * or not completed, if it is visited for the first time or its state is currently out of date.
     *
     * If this wizard contains no steps, currentStep is null
     * @return {?}
     */
    get currentStep() {
        if (this.hasStep(this.currentStepIndex)) {
            return this.wizardSteps[this.currentStepIndex];
        }
        else {
            return null;
        }
    }
    /**
     * The completeness of the wizard.
     * If the wizard has been completed, i.e. all steps are either completed or optional, this value is true, otherwise it is false
     * @return {?}
     */
    get completed() {
        return this.wizardSteps.every((/**
         * @param {?} step
         * @return {?}
         */
        step => step.completed || step.optional));
    }
    /**
     * An array representation of all wizard steps belonging to this model
     * @return {?}
     */
    get wizardSteps() {
        return this._wizardSteps;
    }
    /**
     * Updates the wizard steps to the new array
     *
     * @private
     * @param {?} wizardSteps The updated wizard steps
     * @return {?}
     */
    updateWizardSteps(wizardSteps) {
        // the wizard is currently not in the initialization phase
        if (this.wizardSteps.length > 0 && this.currentStepIndex > -1) {
            this.currentStepIndex = wizardSteps.indexOf(this.wizardSteps[this.currentStepIndex]);
        }
        this._wizardSteps = wizardSteps;
    }
    /**
     * The navigation mode used to navigate inside the wizard
     * @return {?}
     */
    get navigation() {
        return this._navigation;
    }
    /**
     * Updates the navigation mode for this wizard component
     *
     * @param {?} navigation The updated navigation mode
     * @return {?}
     */
    set navigation(navigation) {
        this._navigation = navigation;
    }
    /**
     * Checks if a given index `stepIndex` is inside the range of possible wizard steps inside this wizard
     *
     * @param {?} stepIndex The to be checked index of a step inside this wizard
     * @return {?} True if the given `stepIndex` is contained inside this wizard, false otherwise
     */
    hasStep(stepIndex) {
        return this.wizardSteps.length > 0 && 0 <= stepIndex && stepIndex < this.wizardSteps.length;
    }
    /**
     * Checks if this wizard has a previous step, compared to the current step
     *
     * @return {?} True if this wizard has a previous step before the current step
     */
    hasPreviousStep() {
        return this.hasStep(this.currentStepIndex - 1);
    }
    /**
     * Checks if this wizard has a next step, compared to the current step
     *
     * @return {?} True if this wizard has a next step after the current step
     */
    hasNextStep() {
        return this.hasStep(this.currentStepIndex + 1);
    }
    /**
     * Checks if this wizard is currently inside its last step
     *
     * @return {?} True if the wizard is currently inside its last step
     */
    isLastStep() {
        return this.wizardSteps.length > 0 && this.currentStepIndex === this.wizardSteps.length - 1;
    }
    /**
     * Finds the [[WizardStep]] at the given index `stepIndex`.
     * If no [[WizardStep]] exists at the given index an Error is thrown
     *
     * @throws An `Error` is thrown, if the given index `stepIndex` doesn't exist
     * @param {?} stepIndex The given index
     * @return {?} The found [[WizardStep]] at the given index `stepIndex`
     */
    getStepAtIndex(stepIndex) {
        if (!this.hasStep(stepIndex)) {
            throw new Error(`Expected a known step, but got stepIndex: ${stepIndex}.`);
        }
        return this.wizardSteps[stepIndex];
    }
    /**
     * Finds the index of the step with the given `stepId`.
     * If no step with the given `stepId` exists, `-1` is returned
     *
     * @param {?} stepId The given step id
     * @return {?} The found index of a step with the given step id, or `-1` if no step with the given id is included in the wizard
     */
    getIndexOfStepWithId(stepId) {
        return this.wizardSteps.findIndex((/**
         * @param {?} step
         * @return {?}
         */
        step => step.stepId === stepId));
    }
    /**
     * Finds the index of the given [[WizardStep]] `step`.
     * If the given [[WizardStep]] is not contained inside this wizard, `-1` is returned
     *
     * @param {?} step The given [[WizardStep]]
     * @return {?} The found index of `step` or `-1` if the step is not included in the wizard
     */
    getIndexOfStep(step) {
        return this.wizardSteps.indexOf(step);
    }
    /**
     * Calculates the correct [[MovingDirection]] value for a given `destinationStep` compared to the `currentStepIndex`.
     *
     * @param {?} destinationStep The given destination step
     * @return {?} The calculated [[MovingDirection]]
     */
    getMovingDirection(destinationStep) {
        /** @type {?} */
        let movingDirection;
        if (destinationStep > this.currentStepIndex) {
            movingDirection = MovingDirection.Forwards;
        }
        else if (destinationStep < this.currentStepIndex) {
            movingDirection = MovingDirection.Backwards;
        }
        else {
            movingDirection = MovingDirection.Stay;
        }
        return movingDirection;
    }
    /**
     * Checks, whether a wizard step, as defined by the given destination index, can be transitioned to.
     *
     * This method controls navigation by [[goToStep]], [[goToPreviousStep]], and [[goToNextStep]] directives.
     * Navigation by navigation bar is governed by [[isNavigable]].
     *
     * @param {?} destinationIndex The index of the destination step
     * @return {?} A [[Promise]] containing `true`, if the destination step can be transitioned to and false otherwise
     */
    canGoToStep(destinationIndex) {
        return this.navigation.canGoToStep(this, destinationIndex);
    }
    /**
     * Tries to transition to the wizard step, as denoted by the given destination index.
     *
     * Note: You do not have to call [[canGoToStep]] before calling [[goToStep]].
     * The [[canGoToStep]] method will be called automatically.
     *
     * @param {?} destinationIndex The index of the destination wizard step, which should be entered
     * @param {?=} preFinalize An event emitter, to be called before the step has been transitioned
     * @param {?=} postFinalize An event emitter, to be called after the step has been transitioned
     * @return {?}
     */
    goToStep(destinationIndex, preFinalize, postFinalize) {
        return this.navigation.goToStep(this, destinationIndex, preFinalize, postFinalize);
    }
    /**
     * Tries to transition the wizard to the previous step
     *
     * @param {?=} preFinalize An event emitter, to be called before the step has been transitioned
     * @param {?=} postFinalize An event emitter, to be called after the step has been transitioned
     * @return {?}
     */
    goToPreviousStep(preFinalize, postFinalize) {
        return this.navigation.goToStep(this, this.currentStepIndex - 1, preFinalize, postFinalize);
    }
    /**
     * Tries to transition the wizard to the next step
     *
     * @param {?=} preFinalize An event emitter, to be called before the step has been transitioned
     * @param {?=} postFinalize An event emitter, to be called after the step has been transitioned
     * @return {?}
     */
    goToNextStep(preFinalize, postFinalize) {
        return this.navigation.goToStep(this, this.currentStepIndex + 1, preFinalize, postFinalize);
    }
    /**
     * Checks, whether the wizard step, located at the given index, can be navigated to using the navigation bar.
     *
     * @param {?} destinationIndex The index of the destination step
     * @return {?} True if the step can be navigated to, false otherwise
     */
    isNavigable(destinationIndex) {
        return this.navigation.isNavigable(this, destinationIndex);
    }
    /**
     * Resets the state of this wizard.
     * @return {?}
     */
    reset() {
        this.navigation.reset(this);
    }
}
WizardComponent.decorators = [
    { type: Component, args: [{
                selector: 'aw-wizard',
                template: "<aw-wizard-navigation-bar\n  [direction]=\"navBarDirection\"\n  *ngIf=\"navBarLocation == 'top' || navBarLocation == 'left'\"\n  [ngClass]=\"{\n    vertical: navBarLocation == 'left',\n    horizontal: navBarLocation == 'top',\n    small: navBarLayout == 'small',\n    'large-filled': navBarLayout == 'large-filled',\n    'large-filled-symbols': navBarLayout == 'large-filled-symbols',\n    'large-empty': navBarLayout == 'large-empty',\n    'large-empty-symbols': navBarLayout == 'large-empty-symbols'\n  }\">\n</aw-wizard-navigation-bar>\n\n<div [ngClass]=\"{\n  'wizard-steps': true,\n  vertical: navBarLocation == 'left' || navBarLocation == 'right',\n  horizontal: navBarLocation == 'top' || navBarLocation == 'bottom'\n}\">\n  <ng-content></ng-content>\n</div>\n\n<aw-wizard-navigation-bar\n  [direction]=\"navBarDirection\"\n  *ngIf=\"navBarLocation == 'bottom' || navBarLocation == 'right'\"\n  [ngClass]=\"{\n    vertical: navBarLocation == 'right',\n    horizontal: navBarLocation == 'bottom',\n    small: navBarLayout == 'small',\n    'large-filled': navBarLayout == 'large-filled',\n    'large-filled-symbols': navBarLayout == 'large-filled-symbols',\n    'large-empty': navBarLayout == 'large-empty',\n    'large-empty-symbols': navBarLayout == 'large-empty-symbols'\n  }\">\n</aw-wizard-navigation-bar>\n"
            }] }
];
/** @nocollapse */
WizardComponent.ctorParameters = () => [];
WizardComponent.propDecorators = {
    wizardStepsQueryList: [{ type: ContentChildren, args: [WizardStep, { descendants: true },] }],
    navBarLocation: [{ type: Input }],
    navBarLayout: [{ type: Input }],
    navBarDirection: [{ type: Input }],
    defaultStepIndex: [{ type: Input }],
    disableNavigationBar: [{ type: Input }],
    horizontalOrientation: [{ type: HostBinding, args: ['class.horizontal',] }],
    verticalOrientation: [{ type: HostBinding, args: ['class.vertical',] }]
};
if (false) {
    /**
     * A QueryList containing all [[WizardStep]]s inside this wizard
     * @type {?}
     */
    WizardComponent.prototype.wizardStepsQueryList;
    /**
     * The location of the navigation bar inside the wizard.
     * This location can be either top, bottom, left or right
     * @type {?}
     */
    WizardComponent.prototype.navBarLocation;
    /**
     * The layout of the navigation bar inside the wizard.
     * The layout can be either small, large-filled, large-empty or large-symbols
     * @type {?}
     */
    WizardComponent.prototype.navBarLayout;
    /**
     * The direction in which the steps inside the navigation bar should be shown.
     * The direction can be either `left-to-right` or `right-to-left`
     * @type {?}
     */
    WizardComponent.prototype.navBarDirection;
    /**
     * @type {?}
     * @private
     */
    WizardComponent.prototype._defaultStepIndex;
    /**
     * True, if the navigation bar shouldn't be used for navigating
     * @type {?}
     */
    WizardComponent.prototype.disableNavigationBar;
    /**
     * The navigation mode used to navigate inside the wizard
     *
     * For outside access, use the [[navigation]] getter.
     * @type {?}
     * @private
     */
    WizardComponent.prototype._navigation;
    /**
     * An array representation of all wizard steps belonging to this model
     *
     * For outside access, use the [[wizardSteps]] getter.
     * @type {?}
     * @private
     */
    WizardComponent.prototype._wizardSteps;
    /**
     * The index of the currently visible and selected step inside the wizardSteps QueryList.
     * If this wizard contains no steps, currentStepIndex is -1
     *
     * Note: Do not modify this field directly.  Instead, use navigation methods:
     * [[goToStep]], [[goToPreviousStep]], [[goToNextStep]].
     * @type {?}
     */
    WizardComponent.prototype.currentStepIndex;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItYXJjaHdpemFyZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3dpemFyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsZUFBZSxFQUNmLFdBQVcsRUFDWCxLQUFLLEVBQ0wsU0FBUyxHQUVWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQUN6RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFDOUQsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0sNENBQTRDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlDdEYsTUFBTSxPQUFPLGVBQWU7Ozs7SUFtRjFCOzs7OztRQXZFTyxtQkFBYyxHQUFHLEtBQUssQ0FBQzs7Ozs7UUFPdkIsaUJBQVksR0FBRyxPQUFPLENBQUM7Ozs7O1FBT3ZCLG9CQUFlLEdBQUcsZUFBZSxDQUFDO1FBdUJqQyxzQkFBaUIsR0FBRyxDQUFDLENBQUM7Ozs7UUFNdkIseUJBQW9CLEdBQUcsS0FBSyxDQUFDOzs7Ozs7UUFPNUIsZ0JBQVcsR0FBbUIsSUFBSSwwQkFBMEIsRUFBRSxDQUFDOzs7Ozs7UUFPL0QsaUJBQVksR0FBaUIsRUFBRSxDQUFDOzs7Ozs7OztRQVNqQyxxQkFBZ0IsR0FBRyxDQUFDLENBQUMsQ0FBQztJQU03QixDQUFDOzs7Ozs7SUFwREQsSUFDVyxnQkFBZ0I7UUFDekIsNEJBQTRCO1FBQzVCLCtEQUErRDtRQUMvRCwyREFBMkQ7Ozs7O2NBRXJELGdCQUFnQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSTs7OztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBQztRQUU1RSxJQUFJLGdCQUFnQixFQUFFO1lB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QkFPTCxLQUFLO21DQXNCTCxLQUFLO29DQXNDTCxXQUFXLFNBQUMsa0JBQWtCO2tDQVc5QixXQUFXLFNBQUMsZ0JBQWdCOzs7Ozs7O0lBbkc3QiwrQ0FDbUQ7Ozs7OztJQU1uRCx5Q0FDOEI7Ozs7OztJQU05Qix1Q0FDOEI7Ozs7OztJQU05QiwwQ0FDeUM7Ozs7O0lBdUJ6Qyw0Q0FBOEI7Ozs7O0lBSzlCLCtDQUNvQzs7Ozs7Ozs7SUFPcEMsc0NBQXVFOzs7Ozs7OztJQU92RSx1Q0FBd0M7Ozs7Ozs7OztJQVN4QywyQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBRdWVyeUxpc3QsXG4gIEV2ZW50RW1pdHRlcixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05hdmlnYXRpb25Nb2RlfSBmcm9tICcuLi9uYXZpZ2F0aW9uL25hdmlnYXRpb24tbW9kZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHtXaXphcmRTdGVwfSBmcm9tICcuLi91dGlsL3dpemFyZC1zdGVwLmludGVyZmFjZSc7XG5pbXBvcnQge01vdmluZ0RpcmVjdGlvbn0gZnJvbSAnLi4vdXRpbC9tb3ZpbmctZGlyZWN0aW9uLmVudW0nO1xuaW1wb3J0IHtDb25maWd1cmFibGVOYXZpZ2F0aW9uTW9kZX0gZnJvbSAnLi4vbmF2aWdhdGlvbi9jb25maWd1cmFibGUtbmF2aWdhdGlvbi1tb2RlJztcblxuLyoqXG4gKiBUaGUgYGF3LXdpemFyZGAgY29tcG9uZW50IGRlZmluZXMgdGhlIHJvb3QgY29tcG9uZW50IG9mIGEgd2l6YXJkLlxuICogVGhyb3VnaCB0aGUgc2V0dGluZyBvZiBpbnB1dCBwYXJhbWV0ZXJzIGZvciB0aGUgYGF3LXdpemFyZGAgY29tcG9uZW50IGl0J3MgcG9zc2libGUgdG8gY2hhbmdlIHRoZSBsb2NhdGlvbiBhbmQgc2l6ZVxuICogb2YgaXRzIG5hdmlnYXRpb24gYmFyLlxuICpcbiAqICMjIyBTeW50YXhcbiAqIGBgYGh0bWxcbiAqIDxhdy13aXphcmQgW25hdkJhckxvY2F0aW9uXT1cImxvY2F0aW9uIG9mIG5hdmlnYXRpb24gYmFyXCIgW25hdkJhckxheW91dF09XCJsYXlvdXQgb2YgbmF2aWdhdGlvbiBiYXJcIj5cbiAqICAgICAuLi5cbiAqIDwvYXctd2l6YXJkPlxuICogYGBgXG4gKlxuICogIyMjIEV4YW1wbGVcbiAqXG4gKiBXaXRob3V0IGNvbXBsZXRpb24gc3RlcDpcbiAqXG4gKiBgYGBodG1sXG4gKiA8YXctd2l6YXJkIG5hdkJhckxvY2F0aW9uPVwidG9wXCIgbmF2QmFyTGF5b3V0PVwic21hbGxcIj5cbiAqICAgICA8YXctd2l6YXJkLXN0ZXA+Li4uPC9hdy13aXphcmQtc3RlcD5cbiAqICAgICA8YXctd2l6YXJkLXN0ZXA+Li4uPC9hdy13aXphcmQtc3RlcD5cbiAqIDwvYXctd2l6YXJkPlxuICogYGBgXG4gKlxuICogV2l0aCBjb21wbGV0aW9uIHN0ZXA6XG4gKlxuICogYGBgaHRtbFxuICogPGF3LXdpemFyZCBuYXZCYXJMb2NhdGlvbj1cInRvcFwiIG5hdkJhckxheW91dD1cInNtYWxsXCI+XG4gKiAgICAgPGF3LXdpemFyZC1zdGVwPi4uLjwvYXctd2l6YXJkLXN0ZXA+XG4gKiAgICAgPGF3LXdpemFyZC1zdGVwPi4uLjwvYXctd2l6YXJkLXN0ZXA+XG4gKiAgICAgPGF3LXdpemFyZC1jb21wbGV0aW9uLXN0ZXA+Li4uPC9hdy13aXphcmQtY29tcGxldGlvbi1zdGVwPlxuICogPC9hdy13aXphcmQ+XG4gKiBgYGBcbiAqXG4gKiBAYXV0aG9yIE1hcmMgQXJuZHRcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXctd2l6YXJkJyxcbiAgdGVtcGxhdGVVcmw6ICd3aXphcmQuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBXaXphcmRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgLyoqXG4gICAqIEEgUXVlcnlMaXN0IGNvbnRhaW5pbmcgYWxsIFtbV2l6YXJkU3RlcF1dcyBpbnNpZGUgdGhpcyB3aXphcmRcbiAgICovXG4gIEBDb250ZW50Q2hpbGRyZW4oV2l6YXJkU3RlcClcbiAgcHVibGljIHdpemFyZFN0ZXBzUXVlcnlMaXN0OiBRdWVyeUxpc3Q8V2l6YXJkU3RlcD47XG5cbiAgLyoqXG4gICAqIFRoZSBsb2NhdGlvbiBvZiB0aGUgbmF2aWdhdGlvbiBiYXIgaW5zaWRlIHRoZSB3aXphcmQuXG4gICAqIFRoaXMgbG9jYXRpb24gY2FuIGJlIGVpdGhlciB0b3AsIGJvdHRvbSwgbGVmdCBvciByaWdodFxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIG5hdkJhckxvY2F0aW9uID0gJ3RvcCc7XG5cbiAgLyoqXG4gICAqIFRoZSBsYXlvdXQgb2YgdGhlIG5hdmlnYXRpb24gYmFyIGluc2lkZSB0aGUgd2l6YXJkLlxuICAgKiBUaGUgbGF5b3V0IGNhbiBiZSBlaXRoZXIgc21hbGwsIGxhcmdlLWZpbGxlZCwgbGFyZ2UtZW1wdHkgb3IgbGFyZ2Utc3ltYm9sc1xuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIG5hdkJhckxheW91dCA9ICdzbWFsbCc7XG5cbiAgLyoqXG4gICAqIFRoZSBkaXJlY3Rpb24gaW4gd2hpY2ggdGhlIHN0ZXBzIGluc2lkZSB0aGUgbmF2aWdhdGlvbiBiYXIgc2hvdWxkIGJlIHNob3duLlxuICAgKiBUaGUgZGlyZWN0aW9uIGNhbiBiZSBlaXRoZXIgYGxlZnQtdG8tcmlnaHRgIG9yIGByaWdodC10by1sZWZ0YFxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIG5hdkJhckRpcmVjdGlvbiA9ICdsZWZ0LXRvLXJpZ2h0JztcblxuICAvKipcbiAgICogVGhlIGluaXRpYWxseSBzZWxlY3RlZCBzdGVwLCByZXByZXNlbnRlZCBieSBpdHMgaW5kZXhcbiAgICogQmV3YXJlOiBUaGlzIGluaXRpYWwgZGVmYXVsdCBpcyBvbmx5IHVzZWQgaWYgbm8gd2l6YXJkIHN0ZXAgaGFzIGJlZW4gZW5oYW5jZWQgd2l0aCB0aGUgYHNlbGVjdGVkYCBkaXJlY3RpdmVcbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBnZXQgZGVmYXVsdFN0ZXBJbmRleCgpOiBudW1iZXIge1xuICAgIC8vIFRoaXMgdmFsdWUgY2FuIGJlIGVpdGhlcjpcbiAgICAvLyAtIHRoZSBpbmRleCBvZiBhIHdpemFyZCBzdGVwIHdpdGggYSBgc2VsZWN0ZWRgIGRpcmVjdGl2ZSwgb3JcbiAgICAvLyAtIHRoZSBkZWZhdWx0IHN0ZXAgaW5kZXgsIHNldCBpbiB0aGUgW1tXaXphcmRDb21wb25lbnRdXVxuXG4gICAgY29uc3QgZm91bmREZWZhdWx0U3RlcCA9IHRoaXMud2l6YXJkU3RlcHMuZmluZChzdGVwID0+IHN0ZXAuZGVmYXVsdFNlbGVjdGVkKTtcblxuICAgIGlmIChmb3VuZERlZmF1bHRTdGVwKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRJbmRleE9mU3RlcChmb3VuZERlZmF1bHRTdGVwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRTdGVwSW5kZXg7XG4gICAgfVxuICB9XG4gIHB1YmxpYyBzZXQgZGVmYXVsdFN0ZXBJbmRleChkZWZhdWx0U3RlcEluZGV4OiBudW1iZXIpIHtcbiAgICB0aGlzLl9kZWZhdWx0U3RlcEluZGV4ID0gZGVmYXVsdFN0ZXBJbmRleDtcbiAgfVxuICBwcml2YXRlIF9kZWZhdWx0U3RlcEluZGV4ID0gMDtcblxuICAvKipcbiAgICogVHJ1ZSwgaWYgdGhlIG5hdmlnYXRpb24gYmFyIHNob3VsZG4ndCBiZSB1c2VkIGZvciBuYXZpZ2F0aW5nXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgZGlzYWJsZU5hdmlnYXRpb25CYXIgPSBmYWxzZTtcblxuICAvKipcbiAgICogVGhlIG5hdmlnYXRpb24gbW9kZSB1c2VkIHRvIG5hdmlnYXRlIGluc2lkZSB0aGUgd2l6YXJkXG4gICAqXG4gICAqIEZvciBvdXRzaWRlIGFjY2VzcywgdXNlIHRoZSBbW25hdmlnYXRpb25dXSBnZXR0ZXIuXG4gICAqL1xuICBwcml2YXRlIF9uYXZpZ2F0aW9uOiBOYXZpZ2F0aW9uTW9kZSA9IG5ldyBDb25maWd1cmFibGVOYXZpZ2F0aW9uTW9kZSgpO1xuXG4gIC8qKlxuICAgKiBBbiBhcnJheSByZXByZXNlbnRhdGlvbiBvZiBhbGwgd2l6YXJkIHN0ZXBzIGJlbG9uZ2luZyB0byB0aGlzIG1vZGVsXG4gICAqXG4gICAqIEZvciBvdXRzaWRlIGFjY2VzcywgdXNlIHRoZSBbW3dpemFyZFN0ZXBzXV0gZ2V0dGVyLlxuICAgKi9cbiAgcHJpdmF0ZSBfd2l6YXJkU3RlcHM6IFdpemFyZFN0ZXBbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBUaGUgaW5kZXggb2YgdGhlIGN1cnJlbnRseSB2aXNpYmxlIGFuZCBzZWxlY3RlZCBzdGVwIGluc2lkZSB0aGUgd2l6YXJkU3RlcHMgUXVlcnlMaXN0LlxuICAgKiBJZiB0aGlzIHdpemFyZCBjb250YWlucyBubyBzdGVwcywgY3VycmVudFN0ZXBJbmRleCBpcyAtMVxuICAgKlxuICAgKiBOb3RlOiBEbyBub3QgbW9kaWZ5IHRoaXMgZmllbGQgZGlyZWN0bHkuICBJbnN0ZWFkLCB1c2UgbmF2aWdhdGlvbiBtZXRob2RzOlxuICAgKiBbW2dvVG9TdGVwXV0sIFtbZ29Ub1ByZXZpb3VzU3RlcF1dLCBbW2dvVG9OZXh0U3RlcF1dLlxuICAgKi9cbiAgcHVibGljIGN1cnJlbnRTdGVwSW5kZXggPSAtMTtcblxuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGlzIHdpemFyZCB1c2VzIGEgaG9yaXpvbnRhbCBvcmllbnRhdGlvbi5cbiAgICogVGhlIHdpemFyZCB1c2VzIGEgaG9yaXpvbnRhbCBvcmllbnRhdGlvbiwgaWZmIHRoZSBuYXZpZ2F0aW9uIGJhciBpcyBzaG93biBhdCB0aGUgdG9wIG9yIGJvdHRvbSBvZiB0aGlzIHdpemFyZFxuICAgKlxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoaXMgd2l6YXJkIHVzZXMgYSBob3Jpem9udGFsIG9yaWVudGF0aW9uXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmhvcml6b250YWwnKVxuICBwdWJsaWMgZ2V0IGhvcml6b250YWxPcmllbnRhdGlvbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5uYXZCYXJMb2NhdGlvbiA9PT0gJ3RvcCcgfHwgdGhpcy5uYXZCYXJMb2NhdGlvbiA9PT0gJ2JvdHRvbSc7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoaXMgd2l6YXJkIHVzZXMgYSB2ZXJ0aWNhbCBvcmllbnRhdGlvbi5cbiAgICogVGhlIHdpemFyZCB1c2VzIGEgdmVydGljYWwgb3JpZW50YXRpb24sIGlmZiB0aGUgbmF2aWdhdGlvbiBiYXIgaXMgc2hvd24gYXQgdGhlIGxlZnQgb3IgcmlnaHQgb2YgdGhpcyB3aXphcmRcbiAgICpcbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGlzIHdpemFyZCB1c2VzIGEgdmVydGljYWwgb3JpZW50YXRpb25cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MudmVydGljYWwnKVxuICBwdWJsaWMgZ2V0IHZlcnRpY2FsT3JpZW50YXRpb24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubmF2QmFyTG9jYXRpb24gPT09ICdsZWZ0JyB8fCB0aGlzLm5hdkJhckxvY2F0aW9uID09PSAncmlnaHQnO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemF0aW9uIHdvcmtcbiAgICovXG4gIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgLy8gYWRkIGEgc3Vic2NyaWJlciB0byB0aGUgd2l6YXJkIHN0ZXBzIFF1ZXJ5TGlzdCB0byBsaXN0ZW4gdG8gY2hhbmdlcyBpbiB0aGUgRE9NXG4gICAgdGhpcy53aXphcmRTdGVwc1F1ZXJ5TGlzdC5jaGFuZ2VzLnN1YnNjcmliZShjaGFuZ2VkV2l6YXJkU3RlcHMgPT4ge1xuICAgICAgdGhpcy51cGRhdGVXaXphcmRTdGVwcyhjaGFuZ2VkV2l6YXJkU3RlcHMudG9BcnJheSgpKTtcbiAgICB9KTtcblxuICAgIC8vIGluaXRpYWxpemUgdGhlIG1vZGVsXG4gICAgdGhpcy51cGRhdGVXaXphcmRTdGVwcyh0aGlzLndpemFyZFN0ZXBzUXVlcnlMaXN0LnRvQXJyYXkoKSk7XG5cbiAgICAvLyBmaW5hbGx5IHJlc2V0IHRoZSB3aG9sZSB3aXphcmQgY29tcG9uZW5udFxuICAgIHRoaXMucmVzZXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgV2l6YXJkU3RlcCBvYmplY3QgYmVsb25naW5nIHRvIHRoZSBjdXJyZW50bHkgdmlzaWJsZSBhbmQgc2VsZWN0ZWQgc3RlcC5cbiAgICogVGhlIGN1cnJlbnRTdGVwIGlzIGFsd2F5cyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHdpemFyZCBzdGVwLlxuICAgKiBUaGUgY3VycmVudFN0ZXAgY2FuIGJlIGVpdGhlciBjb21wbGV0ZWQsIGlmIGl0IHdhcyB2aXNpdGVkIGVhcmxpZXIsXG4gICAqIG9yIG5vdCBjb21wbGV0ZWQsIGlmIGl0IGlzIHZpc2l0ZWQgZm9yIHRoZSBmaXJzdCB0aW1lIG9yIGl0cyBzdGF0ZSBpcyBjdXJyZW50bHkgb3V0IG9mIGRhdGUuXG4gICAqXG4gICAqIElmIHRoaXMgd2l6YXJkIGNvbnRhaW5zIG5vIHN0ZXBzLCBjdXJyZW50U3RlcCBpcyBudWxsXG4gICAqL1xuICBwdWJsaWMgZ2V0IGN1cnJlbnRTdGVwKCk6IFdpemFyZFN0ZXAge1xuICAgIGlmICh0aGlzLmhhc1N0ZXAodGhpcy5jdXJyZW50U3RlcEluZGV4KSkge1xuICAgICAgcmV0dXJuIHRoaXMud2l6YXJkU3RlcHNbdGhpcy5jdXJyZW50U3RlcEluZGV4XTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBjb21wbGV0ZW5lc3Mgb2YgdGhlIHdpemFyZC5cbiAgICogSWYgdGhlIHdpemFyZCBoYXMgYmVlbiBjb21wbGV0ZWQsIGkuZS4gYWxsIHN0ZXBzIGFyZSBlaXRoZXIgY29tcGxldGVkIG9yIG9wdGlvbmFsLCB0aGlzIHZhbHVlIGlzIHRydWUsIG90aGVyd2lzZSBpdCBpcyBmYWxzZVxuICAgKi9cbiAgcHVibGljIGdldCBjb21wbGV0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMud2l6YXJkU3RlcHMuZXZlcnkoc3RlcCA9PiBzdGVwLmNvbXBsZXRlZCB8fCBzdGVwLm9wdGlvbmFsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbiBhcnJheSByZXByZXNlbnRhdGlvbiBvZiBhbGwgd2l6YXJkIHN0ZXBzIGJlbG9uZ2luZyB0byB0aGlzIG1vZGVsXG4gICAqL1xuICBwdWJsaWMgZ2V0IHdpemFyZFN0ZXBzKCk6IFdpemFyZFN0ZXBbXSB7XG4gICAgcmV0dXJuIHRoaXMuX3dpemFyZFN0ZXBzO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIHdpemFyZCBzdGVwcyB0byB0aGUgbmV3IGFycmF5XG4gICAqXG4gICAqIEBwYXJhbSB3aXphcmRTdGVwcyBUaGUgdXBkYXRlZCB3aXphcmQgc3RlcHNcbiAgICovXG4gIHByaXZhdGUgdXBkYXRlV2l6YXJkU3RlcHMod2l6YXJkU3RlcHM6IFdpemFyZFN0ZXBbXSk6IHZvaWQge1xuICAgIC8vIHRoZSB3aXphcmQgaXMgY3VycmVudGx5IG5vdCBpbiB0aGUgaW5pdGlhbGl6YXRpb24gcGhhc2VcbiAgICBpZiAodGhpcy53aXphcmRTdGVwcy5sZW5ndGggPiAwICYmIHRoaXMuY3VycmVudFN0ZXBJbmRleCA+IC0xKSB7XG4gICAgICB0aGlzLmN1cnJlbnRTdGVwSW5kZXggPSB3aXphcmRTdGVwcy5pbmRleE9mKHRoaXMud2l6YXJkU3RlcHNbdGhpcy5jdXJyZW50U3RlcEluZGV4XSk7XG4gICAgfVxuXG4gICAgdGhpcy5fd2l6YXJkU3RlcHMgPSB3aXphcmRTdGVwcztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgbmF2aWdhdGlvbiBtb2RlIHVzZWQgdG8gbmF2aWdhdGUgaW5zaWRlIHRoZSB3aXphcmRcbiAgICovXG4gIHB1YmxpYyBnZXQgbmF2aWdhdGlvbigpOiBOYXZpZ2F0aW9uTW9kZSB7XG4gICAgcmV0dXJuIHRoaXMuX25hdmlnYXRpb247XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgbmF2aWdhdGlvbiBtb2RlIGZvciB0aGlzIHdpemFyZCBjb21wb25lbnRcbiAgICpcbiAgICogQHBhcmFtIG5hdmlnYXRpb24gVGhlIHVwZGF0ZWQgbmF2aWdhdGlvbiBtb2RlXG4gICAqL1xuICBwdWJsaWMgc2V0IG5hdmlnYXRpb24obmF2aWdhdGlvbjogTmF2aWdhdGlvbk1vZGUpIHtcbiAgICB0aGlzLl9uYXZpZ2F0aW9uID0gbmF2aWdhdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgYSBnaXZlbiBpbmRleCBgc3RlcEluZGV4YCBpcyBpbnNpZGUgdGhlIHJhbmdlIG9mIHBvc3NpYmxlIHdpemFyZCBzdGVwcyBpbnNpZGUgdGhpcyB3aXphcmRcbiAgICpcbiAgICogQHBhcmFtIHN0ZXBJbmRleCBUaGUgdG8gYmUgY2hlY2tlZCBpbmRleCBvZiBhIHN0ZXAgaW5zaWRlIHRoaXMgd2l6YXJkXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGdpdmVuIGBzdGVwSW5kZXhgIGlzIGNvbnRhaW5lZCBpbnNpZGUgdGhpcyB3aXphcmQsIGZhbHNlIG90aGVyd2lzZVxuICAgKi9cbiAgcHVibGljIGhhc1N0ZXAoc3RlcEluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy53aXphcmRTdGVwcy5sZW5ndGggPiAwICYmIDAgPD0gc3RlcEluZGV4ICYmIHN0ZXBJbmRleCA8IHRoaXMud2l6YXJkU3RlcHMubGVuZ3RoO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGlzIHdpemFyZCBoYXMgYSBwcmV2aW91cyBzdGVwLCBjb21wYXJlZCB0byB0aGUgY3VycmVudCBzdGVwXG4gICAqXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhpcyB3aXphcmQgaGFzIGEgcHJldmlvdXMgc3RlcCBiZWZvcmUgdGhlIGN1cnJlbnQgc3RlcFxuICAgKi9cbiAgcHVibGljIGhhc1ByZXZpb3VzU3RlcCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5oYXNTdGVwKHRoaXMuY3VycmVudFN0ZXBJbmRleCAtIDEpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGlzIHdpemFyZCBoYXMgYSBuZXh0IHN0ZXAsIGNvbXBhcmVkIHRvIHRoZSBjdXJyZW50IHN0ZXBcbiAgICpcbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGlzIHdpemFyZCBoYXMgYSBuZXh0IHN0ZXAgYWZ0ZXIgdGhlIGN1cnJlbnQgc3RlcFxuICAgKi9cbiAgcHVibGljIGhhc05leHRTdGVwKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmhhc1N0ZXAodGhpcy5jdXJyZW50U3RlcEluZGV4ICsgMSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoaXMgd2l6YXJkIGlzIGN1cnJlbnRseSBpbnNpZGUgaXRzIGxhc3Qgc3RlcFxuICAgKlxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB3aXphcmQgaXMgY3VycmVudGx5IGluc2lkZSBpdHMgbGFzdCBzdGVwXG4gICAqL1xuICBwdWJsaWMgaXNMYXN0U3RlcCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy53aXphcmRTdGVwcy5sZW5ndGggPiAwICYmIHRoaXMuY3VycmVudFN0ZXBJbmRleCA9PT0gdGhpcy53aXphcmRTdGVwcy5sZW5ndGggLSAxO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmRzIHRoZSBbW1dpemFyZFN0ZXBdXSBhdCB0aGUgZ2l2ZW4gaW5kZXggYHN0ZXBJbmRleGAuXG4gICAqIElmIG5vIFtbV2l6YXJkU3RlcF1dIGV4aXN0cyBhdCB0aGUgZ2l2ZW4gaW5kZXggYW4gRXJyb3IgaXMgdGhyb3duXG4gICAqXG4gICAqIEBwYXJhbSBzdGVwSW5kZXggVGhlIGdpdmVuIGluZGV4XG4gICAqIEByZXR1cm5zIFRoZSBmb3VuZCBbW1dpemFyZFN0ZXBdXSBhdCB0aGUgZ2l2ZW4gaW5kZXggYHN0ZXBJbmRleGBcbiAgICogQHRocm93cyBBbiBgRXJyb3JgIGlzIHRocm93biwgaWYgdGhlIGdpdmVuIGluZGV4IGBzdGVwSW5kZXhgIGRvZXNuJ3QgZXhpc3RcbiAgICovXG4gIHB1YmxpYyBnZXRTdGVwQXRJbmRleChzdGVwSW5kZXg6IG51bWJlcik6IFdpemFyZFN0ZXAge1xuICAgIGlmICghdGhpcy5oYXNTdGVwKHN0ZXBJbmRleCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYSBrbm93biBzdGVwLCBidXQgZ290IHN0ZXBJbmRleDogJHtzdGVwSW5kZXh9LmApO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLndpemFyZFN0ZXBzW3N0ZXBJbmRleF07XG4gIH1cblxuICAvKipcbiAgICogRmluZHMgdGhlIGluZGV4IG9mIHRoZSBzdGVwIHdpdGggdGhlIGdpdmVuIGBzdGVwSWRgLlxuICAgKiBJZiBubyBzdGVwIHdpdGggdGhlIGdpdmVuIGBzdGVwSWRgIGV4aXN0cywgYC0xYCBpcyByZXR1cm5lZFxuICAgKlxuICAgKiBAcGFyYW0gc3RlcElkIFRoZSBnaXZlbiBzdGVwIGlkXG4gICAqIEByZXR1cm5zIFRoZSBmb3VuZCBpbmRleCBvZiBhIHN0ZXAgd2l0aCB0aGUgZ2l2ZW4gc3RlcCBpZCwgb3IgYC0xYCBpZiBubyBzdGVwIHdpdGggdGhlIGdpdmVuIGlkIGlzIGluY2x1ZGVkIGluIHRoZSB3aXphcmRcbiAgICovXG4gIHB1YmxpYyBnZXRJbmRleE9mU3RlcFdpdGhJZChzdGVwSWQ6IHN0cmluZyk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMud2l6YXJkU3RlcHMuZmluZEluZGV4KHN0ZXAgPT4gc3RlcC5zdGVwSWQgPT09IHN0ZXBJZCk7XG4gIH1cblxuICAvKipcbiAgICogRmluZHMgdGhlIGluZGV4IG9mIHRoZSBnaXZlbiBbW1dpemFyZFN0ZXBdXSBgc3RlcGAuXG4gICAqIElmIHRoZSBnaXZlbiBbW1dpemFyZFN0ZXBdXSBpcyBub3QgY29udGFpbmVkIGluc2lkZSB0aGlzIHdpemFyZCwgYC0xYCBpcyByZXR1cm5lZFxuICAgKlxuICAgKiBAcGFyYW0gc3RlcCBUaGUgZ2l2ZW4gW1tXaXphcmRTdGVwXV1cbiAgICogQHJldHVybnMgVGhlIGZvdW5kIGluZGV4IG9mIGBzdGVwYCBvciBgLTFgIGlmIHRoZSBzdGVwIGlzIG5vdCBpbmNsdWRlZCBpbiB0aGUgd2l6YXJkXG4gICAqL1xuICBwdWJsaWMgZ2V0SW5kZXhPZlN0ZXAoc3RlcDogV2l6YXJkU3RlcCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMud2l6YXJkU3RlcHMuaW5kZXhPZihzdGVwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGVzIHRoZSBjb3JyZWN0IFtbTW92aW5nRGlyZWN0aW9uXV0gdmFsdWUgZm9yIGEgZ2l2ZW4gYGRlc3RpbmF0aW9uU3RlcGAgY29tcGFyZWQgdG8gdGhlIGBjdXJyZW50U3RlcEluZGV4YC5cbiAgICpcbiAgICogQHBhcmFtIGRlc3RpbmF0aW9uU3RlcCBUaGUgZ2l2ZW4gZGVzdGluYXRpb24gc3RlcFxuICAgKiBAcmV0dXJucyBUaGUgY2FsY3VsYXRlZCBbW01vdmluZ0RpcmVjdGlvbl1dXG4gICAqL1xuICBwdWJsaWMgZ2V0TW92aW5nRGlyZWN0aW9uKGRlc3RpbmF0aW9uU3RlcDogbnVtYmVyKTogTW92aW5nRGlyZWN0aW9uIHtcbiAgICBsZXQgbW92aW5nRGlyZWN0aW9uOiBNb3ZpbmdEaXJlY3Rpb247XG5cbiAgICBpZiAoZGVzdGluYXRpb25TdGVwID4gdGhpcy5jdXJyZW50U3RlcEluZGV4KSB7XG4gICAgICBtb3ZpbmdEaXJlY3Rpb24gPSBNb3ZpbmdEaXJlY3Rpb24uRm9yd2FyZHM7XG4gICAgfSBlbHNlIGlmIChkZXN0aW5hdGlvblN0ZXAgPCB0aGlzLmN1cnJlbnRTdGVwSW5kZXgpIHtcbiAgICAgIG1vdmluZ0RpcmVjdGlvbiA9IE1vdmluZ0RpcmVjdGlvbi5CYWNrd2FyZHM7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1vdmluZ0RpcmVjdGlvbiA9IE1vdmluZ0RpcmVjdGlvbi5TdGF5O1xuICAgIH1cblxuICAgIHJldHVybiBtb3ZpbmdEaXJlY3Rpb247XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzLCB3aGV0aGVyIGEgd2l6YXJkIHN0ZXAsIGFzIGRlZmluZWQgYnkgdGhlIGdpdmVuIGRlc3RpbmF0aW9uIGluZGV4LCBjYW4gYmUgdHJhbnNpdGlvbmVkIHRvLlxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBjb250cm9scyBuYXZpZ2F0aW9uIGJ5IFtbZ29Ub1N0ZXBdXSwgW1tnb1RvUHJldmlvdXNTdGVwXV0sIGFuZCBbW2dvVG9OZXh0U3RlcF1dIGRpcmVjdGl2ZXMuXG4gICAqIE5hdmlnYXRpb24gYnkgbmF2aWdhdGlvbiBiYXIgaXMgZ292ZXJuZWQgYnkgW1tpc05hdmlnYWJsZV1dLlxuICAgKlxuICAgKiBAcGFyYW0gZGVzdGluYXRpb25JbmRleCBUaGUgaW5kZXggb2YgdGhlIGRlc3RpbmF0aW9uIHN0ZXBcbiAgICogQHJldHVybnMgQSBbW1Byb21pc2VdXSBjb250YWluaW5nIGB0cnVlYCwgaWYgdGhlIGRlc3RpbmF0aW9uIHN0ZXAgY2FuIGJlIHRyYW5zaXRpb25lZCB0byBhbmQgZmFsc2Ugb3RoZXJ3aXNlXG4gICAqL1xuICBwdWJsaWMgY2FuR29Ub1N0ZXAoZGVzdGluYXRpb25JbmRleDogbnVtYmVyKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMubmF2aWdhdGlvbi5jYW5Hb1RvU3RlcCh0aGlzLCBkZXN0aW5hdGlvbkluZGV4KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmllcyB0byB0cmFuc2l0aW9uIHRvIHRoZSB3aXphcmQgc3RlcCwgYXMgZGVub3RlZCBieSB0aGUgZ2l2ZW4gZGVzdGluYXRpb24gaW5kZXguXG4gICAqXG4gICAqIE5vdGU6IFlvdSBkbyBub3QgaGF2ZSB0byBjYWxsIFtbY2FuR29Ub1N0ZXBdXSBiZWZvcmUgY2FsbGluZyBbW2dvVG9TdGVwXV0uXG4gICAqIFRoZSBbW2NhbkdvVG9TdGVwXV0gbWV0aG9kIHdpbGwgYmUgY2FsbGVkIGF1dG9tYXRpY2FsbHkuXG4gICAqXG4gICAqIEBwYXJhbSBkZXN0aW5hdGlvbkluZGV4IFRoZSBpbmRleCBvZiB0aGUgZGVzdGluYXRpb24gd2l6YXJkIHN0ZXAsIHdoaWNoIHNob3VsZCBiZSBlbnRlcmVkXG4gICAqIEBwYXJhbSBwcmVGaW5hbGl6ZSBBbiBldmVudCBlbWl0dGVyLCB0byBiZSBjYWxsZWQgYmVmb3JlIHRoZSBzdGVwIGhhcyBiZWVuIHRyYW5zaXRpb25lZFxuICAgKiBAcGFyYW0gcG9zdEZpbmFsaXplIEFuIGV2ZW50IGVtaXR0ZXIsIHRvIGJlIGNhbGxlZCBhZnRlciB0aGUgc3RlcCBoYXMgYmVlbiB0cmFuc2l0aW9uZWRcbiAgICovXG4gIHB1YmxpYyBnb1RvU3RlcChkZXN0aW5hdGlvbkluZGV4OiBudW1iZXIsIHByZUZpbmFsaXplPzogRXZlbnRFbWl0dGVyPHZvaWQ+LCBwb3N0RmluYWxpemU/OiBFdmVudEVtaXR0ZXI8dm9pZD4pOiB2b2lkIHtcbiAgICByZXR1cm4gdGhpcy5uYXZpZ2F0aW9uLmdvVG9TdGVwKHRoaXMsIGRlc3RpbmF0aW9uSW5kZXgsIHByZUZpbmFsaXplLCBwb3N0RmluYWxpemUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyaWVzIHRvIHRyYW5zaXRpb24gdGhlIHdpemFyZCB0byB0aGUgcHJldmlvdXMgc3RlcFxuICAgKlxuICAgKiBAcGFyYW0gcHJlRmluYWxpemUgQW4gZXZlbnQgZW1pdHRlciwgdG8gYmUgY2FsbGVkIGJlZm9yZSB0aGUgc3RlcCBoYXMgYmVlbiB0cmFuc2l0aW9uZWRcbiAgICogQHBhcmFtIHBvc3RGaW5hbGl6ZSBBbiBldmVudCBlbWl0dGVyLCB0byBiZSBjYWxsZWQgYWZ0ZXIgdGhlIHN0ZXAgaGFzIGJlZW4gdHJhbnNpdGlvbmVkXG4gICAqL1xuICBwdWJsaWMgZ29Ub1ByZXZpb3VzU3RlcChwcmVGaW5hbGl6ZT86IEV2ZW50RW1pdHRlcjx2b2lkPiwgcG9zdEZpbmFsaXplPzogRXZlbnRFbWl0dGVyPHZvaWQ+KTogdm9pZCB7XG4gICAgcmV0dXJuIHRoaXMubmF2aWdhdGlvbi5nb1RvU3RlcCh0aGlzLCB0aGlzLmN1cnJlbnRTdGVwSW5kZXggLSAxLCBwcmVGaW5hbGl6ZSwgcG9zdEZpbmFsaXplKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmllcyB0byB0cmFuc2l0aW9uIHRoZSB3aXphcmQgdG8gdGhlIG5leHQgc3RlcFxuICAgKlxuICAgKiBAcGFyYW0gcHJlRmluYWxpemUgQW4gZXZlbnQgZW1pdHRlciwgdG8gYmUgY2FsbGVkIGJlZm9yZSB0aGUgc3RlcCBoYXMgYmVlbiB0cmFuc2l0aW9uZWRcbiAgICogQHBhcmFtIHBvc3RGaW5hbGl6ZSBBbiBldmVudCBlbWl0dGVyLCB0byBiZSBjYWxsZWQgYWZ0ZXIgdGhlIHN0ZXAgaGFzIGJlZW4gdHJhbnNpdGlvbmVkXG4gICAqL1xuICBwdWJsaWMgZ29Ub05leHRTdGVwKHByZUZpbmFsaXplPzogRXZlbnRFbWl0dGVyPHZvaWQ+LCBwb3N0RmluYWxpemU/OiBFdmVudEVtaXR0ZXI8dm9pZD4pOiB2b2lkIHtcbiAgICByZXR1cm4gdGhpcy5uYXZpZ2F0aW9uLmdvVG9TdGVwKHRoaXMsIHRoaXMuY3VycmVudFN0ZXBJbmRleCArIDEsIHByZUZpbmFsaXplLCBwb3N0RmluYWxpemUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcywgd2hldGhlciB0aGUgd2l6YXJkIHN0ZXAsIGxvY2F0ZWQgYXQgdGhlIGdpdmVuIGluZGV4LCBjYW4gYmUgbmF2aWdhdGVkIHRvIHVzaW5nIHRoZSBuYXZpZ2F0aW9uIGJhci5cbiAgICpcbiAgICogQHBhcmFtIGRlc3RpbmF0aW9uSW5kZXggVGhlIGluZGV4IG9mIHRoZSBkZXN0aW5hdGlvbiBzdGVwXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHN0ZXAgY2FuIGJlIG5hdmlnYXRlZCB0bywgZmFsc2Ugb3RoZXJ3aXNlXG4gICAqL1xuICBwdWJsaWMgaXNOYXZpZ2FibGUoZGVzdGluYXRpb25JbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubmF2aWdhdGlvbi5pc05hdmlnYWJsZSh0aGlzLCBkZXN0aW5hdGlvbkluZGV4KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldHMgdGhlIHN0YXRlIG9mIHRoaXMgd2l6YXJkLlxuICAgKi9cbiAgcHVibGljIHJlc2V0KCk6IHZvaWQge1xuICAgIHRoaXMubmF2aWdhdGlvbi5yZXNldCh0aGlzKTtcbiAgfVxufVxuIl19