import { Directive, TemplateRef, EventEmitter, ContentChild, Input, Output, HostBinding, Component, forwardRef, ContentChildren, Host, Optional, HostListener, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The `awWizardStepSymbol` directive can be used as an alternative to the `navigationSymbol` input of a [[WizardStep]]
 * to define the step symbol inside the navigation bar.  This way step symbol may contain arbitrary content.
 *
 * ### Syntax
 *
 * ```html
 * <ng-template awWizardStepSymbol>
 *     ...
 * </ng-template>
 * ```
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

const _c0 = ["*"];
const _c1 = function (a0, a1, a2, a3, a4, a5, a6) { return { vertical: a0, horizontal: a1, small: a2, "large-filled": a3, "large-filled-symbols": a4, "large-empty": a5, "large-empty-symbols": a6 }; };
function WizardComponent_aw_wizard_navigation_bar_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "aw-wizard-navigation-bar", 2);
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("direction", ctx_r0.navBarDirection)("ngClass", ɵngcc0.ɵɵpureFunction7(2, _c1, ctx_r0.navBarLocation == "left", ctx_r0.navBarLocation == "top", ctx_r0.navBarLayout == "small", ctx_r0.navBarLayout == "large-filled", ctx_r0.navBarLayout == "large-filled-symbols", ctx_r0.navBarLayout == "large-empty", ctx_r0.navBarLayout == "large-empty-symbols"));
} }
function WizardComponent_aw_wizard_navigation_bar_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "aw-wizard-navigation-bar", 2);
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("direction", ctx_r1.navBarDirection)("ngClass", ɵngcc0.ɵɵpureFunction7(2, _c1, ctx_r1.navBarLocation == "right", ctx_r1.navBarLocation == "bottom", ctx_r1.navBarLayout == "small", ctx_r1.navBarLayout == "large-filled", ctx_r1.navBarLayout == "large-filled-symbols", ctx_r1.navBarLayout == "large-empty", ctx_r1.navBarLayout == "large-empty-symbols"));
} }
const _c2 = function (a1, a2) { return { "wizard-steps": true, vertical: a1, horizontal: a2 }; };
function WizardNavigationBarComponent_li_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0, 7);
} if (rf & 2) {
    const step_r3 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", step_r3.stepTitleTemplate.templateRef);
} }
function WizardNavigationBarComponent_li_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const step_r3 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(step_r3.stepTitle);
} }
function WizardNavigationBarComponent_li_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0, 7);
} if (rf & 2) {
    const step_r3 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", step_r3.stepSymbolTemplate.templateRef);
} }
function WizardNavigationBarComponent_li_1_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const step_r3 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(step_r3.navigationSymbol.symbol);
} }
const _c3 = function (a0, a1, a2, a3, a4, a5) { return { current: a0, editing: a1, done: a2, optional: a3, completed: a4, navigable: a5 }; };
const _c4 = function (a0) { return { "font-family": a0 }; };
function WizardNavigationBarComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 1);
    ɵngcc0.ɵɵelementStart(1, "a", 2);
    ɵngcc0.ɵɵelementStart(2, "div", 3);
    ɵngcc0.ɵɵtemplate(3, WizardNavigationBarComponent_li_1_ng_container_3_Template, 1, 1, "ng-container", 4);
    ɵngcc0.ɵɵtemplate(4, WizardNavigationBarComponent_li_1_ng_container_4_Template, 2, 1, "ng-container", 5);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(5, "div", 6);
    ɵngcc0.ɵɵtemplate(6, WizardNavigationBarComponent_li_1_ng_container_6_Template, 1, 1, "ng-container", 4);
    ɵngcc0.ɵɵtemplate(7, WizardNavigationBarComponent_li_1_ng_container_7_Template, 2, 1, "ng-container", 5);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const step_r3 = ctx.$implicit;
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction6(8, _c3, ctx_r2.isCurrent(step_r3), ctx_r2.isEditing(step_r3), ctx_r2.isDone(step_r3), ctx_r2.isOptional(step_r3), ctx_r2.isCompleted(step_r3), ctx_r2.isNavigable(step_r3)));
    ɵngcc0.ɵɵattribute("id", step_r3.stepId);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("awGoToStep", step_r3);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", step_r3.stepTitleTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !step_r3.stepTitleTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction1(15, _c4, step_r3.stepSymbolTemplate ? "" : step_r3.navigationSymbol.fontFamily));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", step_r3.stepSymbolTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !step_r3.stepSymbolTemplate);
} }
class WizardStepSymbolDirective {
    /**
     * Constructor
     *
     * @param {?} templateRef A reference to the content of the `ng-template` that contains this [[WizardStepSymbolDirective]]
     */
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
WizardStepSymbolDirective.ɵfac = function WizardStepSymbolDirective_Factory(t) { return new (t || WizardStepSymbolDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.TemplateRef)); };
WizardStepSymbolDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: WizardStepSymbolDirective, selectors: [["ng-template", "awStepSymbol", ""], ["ng-template", "awWizardStepSymbol", ""]] });
/** @nocollapse */
WizardStepSymbolDirective.ctorParameters = () => [
    { type: TemplateRef }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(WizardStepSymbolDirective, [{
        type: Directive,
        args: [{
                selector: 'ng-template[awStepSymbol], ng-template[awWizardStepSymbol]'
            }]
    }], function () { return [{ type: ɵngcc0.TemplateRef }]; }, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The `awWizardStepTitle` directive can be used as an alternative to the `stepTitle` input of a [[WizardStep]]
 * to define the content of a step title inside the navigation bar.
 * This step title can be freely created and can contain more than only plain text
 *
 * ### Syntax
 *
 * ```html
 * <ng-template awWizardStepTitle>
 *     ...
 * </ng-template>
 * ```
 *
 * @author Marc Arndt
 */
class WizardStepTitleDirective {
    /**
     * Constructor
     *
     * @param {?} templateRef A reference to the content of the `ng-template` that contains this [[WizardStepTitleDirective]]
     */
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
WizardStepTitleDirective.ɵfac = function WizardStepTitleDirective_Factory(t) { return new (t || WizardStepTitleDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.TemplateRef)); };
WizardStepTitleDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: WizardStepTitleDirective, selectors: [["ng-template", "awStepTitle", ""], ["ng-template", "awWizardStepTitle", ""]] });
/** @nocollapse */
WizardStepTitleDirective.ctorParameters = () => [
    { type: TemplateRef }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(WizardStepTitleDirective, [{
        type: Directive,
        args: [{
                selector: 'ng-template[awStepTitle], ng-template[awWizardStepTitle]'
            }]
    }], function () { return [{ type: ɵngcc0.TemplateRef }]; }, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Basic functionality every type of wizard step needs to provide
 *
 * @author Marc Arndt
 * @abstract
 */
class WizardStep {
    constructor() {
        /**
         * A symbol property, which contains an optional symbol for the step inside the navigation bar.
         * Takes effect when `stepSymbolTemplate` is not defined or null.
         */
        this.navigationSymbol = { symbol: '' };
        /**
         * A boolean describing if the wizard step is currently selected
         */
        this.selected = false;
        /**
         * A boolean describing if the wizard step has been completed
         */
        this.completed = false;
        /**
         * A boolean describing if the wizard step is shown as completed when the wizard is presented to the user
         *
         * Users will typically use `CompletedStepDirective` to set this flag
         */
        this.initiallyCompleted = false;
        /**
         * A boolean describing if the wizard step is being edited after being competed
         *
         * This flag can only be true when `selected` is true.
         */
        this.editing = false;
        /**
         * A boolean describing, if the wizard step should be selected by default, i.e. after the wizard has been initialized as the initial step
         */
        this.defaultSelected = false;
        /**
         * A boolean describing if the wizard step is an optional step
         */
        this.optional = false;
        /**
         * A function or boolean deciding, if this step can be entered
         */
        this.canEnter = true;
        /**
         * A function or boolean deciding, if this step can be exited
         */
        this.canExit = true;
        /**
         * This [[EventEmitter]] is called when the step is entered.
         * The bound method should be used to do initialization work.
         */
        this.stepEnter = new EventEmitter();
        /**
         * This [[EventEmitter]] is called when the step is exited.
         * The bound method can be used to do cleanup work.
         */
        this.stepExit = new EventEmitter();
    }
    /**
     * Returns if this wizard step should be visible to the user.
     * If the step should be visible to the user false is returned, otherwise true
     * @return {?}
     */
    get hidden() {
        return !this.selected;
    }
    /**
     * This method returns true, if this wizard step can be transitioned with a given direction.
     * Transitioned in this case means either entered or exited, depending on the given `condition` parameter.
     *
     * @throws An `Error` is thrown if `condition` is neither a function nor a boolean
     * @private
     * @param {?} condition A condition variable, deciding if the step can be transitioned
     * @param {?} direction The direction in which this step should be transitioned
     * @return {?} A [[Promise]] containing `true`, if this step can transitioned in the given direction
     */
    static canTransitionStep(condition, direction) {
        if (typeof (condition) === typeof (true)) {
            return Promise.resolve((/** @type {?} */ (condition)));
        }
        else if (condition instanceof Function) {
            return Promise.resolve(condition(direction));
        }
        else {
            return Promise.reject(new Error(`Input value '${condition}' is neither a boolean nor a function`));
        }
    }
    /**
     * A function called when the step is entered
     *
     * @param {?} direction The direction in which the step is entered
     * @return {?}
     */
    enter(direction) {
        this.stepEnter.emit(direction);
    }
    /**
     * A function called when the step is exited
     *
     * @param {?} direction The direction in which the step is exited
     * @return {?}
     */
    exit(direction) {
        this.stepExit.emit(direction);
    }
    /**
     * This method returns true, if this wizard step can be entered from the given direction.
     * Because this method depends on the value `canEnter`, it will throw an error, if `canEnter` is neither a boolean
     * nor a function.
     *
     * @throws An `Error` is thrown if `anEnter` is neither a function nor a boolean
     * @param {?} direction The direction in which this step should be entered
     * @return {?} A [[Promise]] containing `true`, if the step can be entered in the given direction, false otherwise
     */
    canEnterStep(direction) {
        return WizardStep.canTransitionStep(this.canEnter, direction);
    }
    /**
     * This method returns true, if this wizard step can be exited into given direction.
     * Because this method depends on the value `canExit`, it will throw an error, if `canExit` is neither a boolean
     * nor a function.
     *
     * @throws An `Error` is thrown if `canExit` is neither a function nor a boolean
     * @param {?} direction The direction in which this step should be left
     * @return {?} A [[Promise]] containing `true`, if the step can be exited in the given direction, false otherwise
     */
    canExitStep(direction) {
        return WizardStep.canTransitionStep(this.canExit, direction);
    }
}
WizardStep.ɵfac = function WizardStep_Factory(t) { return new (t || WizardStep)(); };
WizardStep.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: WizardStep, contentQueries: function WizardStep_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, WizardStepTitleDirective, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, WizardStepSymbolDirective, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.stepTitleTemplate = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.stepSymbolTemplate = _t.first);
    } }, hostVars: 1, hostBindings: function WizardStep_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵhostProperty("hidden", ctx.hidden);
    } }, inputs: { navigationSymbol: "navigationSymbol", canEnter: "canEnter", canExit: "canExit", stepId: "stepId", stepTitle: "stepTitle" }, outputs: { stepEnter: "stepEnter", stepExit: "stepExit" } });
WizardStep.propDecorators = {
    stepTitleTemplate: [{ type: ContentChild, args: [WizardStepTitleDirective, { static: false },] }],
    stepSymbolTemplate: [{ type: ContentChild, args: [WizardStepSymbolDirective, { static: false },] }],
    stepId: [{ type: Input }],
    stepTitle: [{ type: Input }],
    navigationSymbol: [{ type: Input }],
    canEnter: [{ type: Input }],
    canExit: [{ type: Input }],
    stepEnter: [{ type: Output }],
    stepExit: [{ type: Output }],
    hidden: [{ type: HostBinding, args: ['hidden',] }]
};


/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Basic functionality every wizard completion step needs to provide
 *
 * @author Marc Arndt
 * @abstract
 */
class WizardCompletionStep extends WizardStep {
    constructor() {
        super(...arguments);
        /**
         * @inheritDoc
         */
        this.stepExit = new EventEmitter();
        /**
         * @inheritDoc
         */
        this.canExit = false;
    }
    /**
     * @inheritDoc
     * @param {?} direction
     * @return {?}
     */
    enter(direction) {
        this.completed = true;
        this.stepEnter.emit(direction);
    }
    /**
     * @inheritDoc
     * @param {?} direction
     * @return {?}
     */
    exit(direction) {
        // set this completion step as incomplete (unless it happens to be initiallyCompleted)
        this.completed = this.initiallyCompleted;
        this.stepExit.emit(direction);
    }
}
WizardCompletionStep.ɵfac = function WizardCompletionStep_Factory(t) { return ɵWizardCompletionStep_BaseFactory(t || WizardCompletionStep); };
WizardCompletionStep.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: WizardCompletionStep, features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
const ɵWizardCompletionStep_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(WizardCompletionStep);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The `aw-wizard-completion-step` component can be used to define a completion/success step at the end of your wizard
 * After a `aw-wizard-completion-step` has been entered, it has the characteristic that the user is blocked from
 * leaving it again to a previous step.
 * In addition entering a `aw-wizard-completion-step` automatically sets the `aw-wizard` and all steps inside the `aw-wizard`
 * as completed.
 *
 * ### Syntax
 *
 * ```html
 * <aw-wizard-completion-step [stepTitle]="title of the wizard step"
 *    [navigationSymbol]="{ symbol: 'navigation symbol', fontFamily: 'navigation symbol font family' }"
 *    (stepEnter)="event emitter to be called when the wizard step is entered"
 *    (stepExit)="event emitter to be called when the wizard step is exited">
 *    ...
 * </aw-wizard-completion-step>
 * ```
 *
 * ### Example
 *
 * ```html
 * <aw-wizard-completion-step stepTitle="Step 1" [navigationSymbol]="{ symbol: '1' }">
 *    ...
 * </aw-wizard-completion-step>
 * ```
 *
 * With a navigation symbol from the `font-awesome` font:
 *
 * ```html
 * <aw-wizard-completion-step stepTitle="Step 1" [navigationSymbol]="{ symbol: '&#xf1ba;', fontFamily: 'FontAwesome' }">
 *    ...
 * </aw-wizard-completion-step>
 * ```
 *
 * @author Marc Arndt
 */
class WizardCompletionStepComponent extends WizardCompletionStep {
}
WizardCompletionStepComponent.ɵfac = function WizardCompletionStepComponent_Factory(t) { return ɵWizardCompletionStepComponent_BaseFactory(t || WizardCompletionStepComponent); };
WizardCompletionStepComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: WizardCompletionStepComponent, selectors: [["aw-wizard-completion-step"]], features: [ɵngcc0.ɵɵProvidersFeature([
            { provide: WizardStep, useExisting: forwardRef(( /**
                     * @return {?}
                     */() => WizardCompletionStepComponent)) },
            { provide: WizardCompletionStep, useExisting: forwardRef(( /**
                     * @return {?}
                     */() => WizardCompletionStepComponent)) }
        ]), ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function WizardCompletionStepComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2 });
const ɵWizardCompletionStepComponent_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(WizardCompletionStepComponent);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(WizardCompletionStepComponent, [{
        type: Component,
        args: [{
                selector: 'aw-wizard-completion-step',
                template: "<ng-content></ng-content>\n",
                providers: [
                    { provide: WizardStep, useExisting: forwardRef(( /**
                             * @return {?}
                             */() => WizardCompletionStepComponent)) },
                    { provide: WizardCompletionStep, useExisting: forwardRef(( /**
                             * @return {?}
                             */() => WizardCompletionStepComponent)) }
                ]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The direction in which a step transition was made
 *
 * @author Marc Arndt
 */
/** @enum {number} */
const MovingDirection = {
    /**
     * A forward step transition
     */
    Forwards: 0,
    /**
     * A backward step transition
     */
    Backwards: 1,
    /**
     * No step transition was done
     */
    Stay: 2,
};
MovingDirection[MovingDirection.Forwards] = 'Forwards';
MovingDirection[MovingDirection.Backwards] = 'Backwards';
MovingDirection[MovingDirection.Stay] = 'Stay';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Base implementation of [[NavigationMode]]
 *
 * Note: Built-in [[NavigationMode]] classes should be stateless, allowing the library user to easily create
 * an instance of a particular [[NavigationMode]] class and pass it to `<aw-wizard [navigationMode]="...">`.
 *
 * @author Marc Arndt
 * @abstract
 */
class BaseNavigationMode {
    /**
     * Checks, whether a wizard step, as defined by the given destination index, can be transitioned to.
     *
     * This method controls navigation by [[goToStep]], [[goToPreviousStep]], and [[goToNextStep]] directives.
     * Navigation by navigation bar is governed by [[isNavigable]].
     *
     * In this implementation, a destination wizard step can be entered if:
     * - it exists
     * - the current step can be exited in the direction of the destination step
     * - the destination step can be entered in the direction from the current step
     *
     * Subclasses can impose additional restrictions, see [[canTransitionToStep]].
     *
     * @param {?} wizard The wizard component to operate on
     * @param {?} destinationIndex The index of the destination step
     * @return {?} A [[Promise]] containing `true`, if the destination step can be transitioned to and `false` otherwise
     */
    canGoToStep(wizard, destinationIndex) {
        /** @type {?} */
        const hasStep = wizard.hasStep(destinationIndex);
        /** @type {?} */
        const movingDirection = wizard.getMovingDirection(destinationIndex);
        /** @type {?} */
        const canExitCurrentStep = (/**
         * @param {?} previous
         * @return {?}
         */
        (previous) => {
            return previous && wizard.currentStep.canExitStep(movingDirection);
        });
        /** @type {?} */
        const canEnterDestinationStep = (/**
         * @param {?} previous
         * @return {?}
         */
        (previous) => {
            return previous && wizard.getStepAtIndex(destinationIndex).canEnterStep(movingDirection);
        });
        /** @type {?} */
        const canTransitionToStep = (/**
         * @param {?} previous
         * @return {?}
         */
        (previous) => {
            return previous && this.canTransitionToStep(wizard, destinationIndex);
        });
        return Promise.resolve(hasStep)
            .then(canTransitionToStep)
            // Apply user-defined checks at the end.  They can involve user interaction
            // which is better to be avoided if navigation mode does not actually allow the transition
            // (`canTransitionToStep` returns `false`).
            .then(canExitCurrentStep)
            .then(canEnterDestinationStep);
    }
    /**
     * Imposes additional restrictions for `canGoToStep` in current navigation mode.
     *
     * The base implementation allows transition iff the given step is navigable from the navigation bar (see `isNavigable`).
     * However, in some navigation modes `canTransitionToStep` can be more relaxed to allow navigation to certain steps
     * by previous/next buttons, but not using the navigation bar.
     *
     * @protected
     * @param {?} wizard The wizard component to operate on
     * @param {?} destinationIndex The index of the destination step
     * @return {?} `true`, if the destination step can be transitioned to and `false` otherwise
     */
    canTransitionToStep(wizard, destinationIndex) {
        return this.isNavigable(wizard, destinationIndex);
    }
    /**
     * Tries to transition to the wizard step, as denoted by the given destination index.
     *
     * When entering the destination step, the following actions are done:
     * - the old current step is set as completed
     * - the old current step is set as unselected
     * - the old current step is exited
     * - the destination step is set as selected
     * - the destination step is entered
     *
     * When the destination step couldn't be entered, the following actions are done:
     * - the current step is exited and entered in the direction `MovingDirection.Stay`
     *
     * @param {?} wizard The wizard component to operate on
     * @param {?} destinationIndex The index of the destination wizard step, which should be entered
     * @param {?=} preFinalize An event emitter, to be called before the step has been transitioned
     * @param {?=} postFinalize An event emitter, to be called after the step has been transitioned
     * @return {?}
     */
    goToStep(wizard, destinationIndex, preFinalize, postFinalize) {
        this.canGoToStep(wizard, destinationIndex).then((/**
         * @param {?} navigationAllowed
         * @return {?}
         */
        navigationAllowed => {
            if (navigationAllowed) {
                // the current step can be exited in the given direction
                /** @type {?} */
                const movingDirection = wizard.getMovingDirection(destinationIndex);
                /* istanbul ignore if */
                if (preFinalize) {
                    preFinalize.emit();
                }
                // leave current step
                wizard.currentStep.completed = true;
                wizard.currentStep.exit(movingDirection);
                wizard.currentStep.editing = false;
                wizard.currentStep.selected = false;
                this.transition(wizard, destinationIndex);
                // remember if the next step is already completed before entering it to properly set `editing` flag
                /** @type {?} */
                const wasCompleted = wizard.completed || wizard.currentStep.completed;
                // go to next step
                wizard.currentStep.enter(movingDirection);
                wizard.currentStep.selected = true;
                if (wasCompleted) {
                    wizard.currentStep.editing = true;
                }
                /* istanbul ignore if */
                if (postFinalize) {
                    postFinalize.emit();
                }
            }
            else {
                // if the current step can't be left, reenter the current step
                wizard.currentStep.exit(MovingDirection.Stay);
                wizard.currentStep.enter(MovingDirection.Stay);
            }
        }));
    }
    /**
     * Transitions the wizard to the given step index.
     *
     * Can perform additional actions in particular navigation mode implementations.
     *
     * @protected
     * @param {?} wizard The wizard component to operate on
     * @param {?} destinationIndex The index of the destination wizard step
     * @return {?}
     */
    transition(wizard, destinationIndex) {
        wizard.currentStepIndex = destinationIndex;
    }
    /**
     * Resets the state of this wizard.
     *
     * A reset transitions the wizard automatically to the first step and sets all steps as incomplete.
     * In addition the whole wizard is set as incomplete.
     *
     * @param {?} wizard The wizard component to operate on
     * @return {?}
     */
    reset(wizard) {
        this.ensureCanReset(wizard);
        // reset the step internal state
        wizard.wizardSteps.forEach((/**
         * @param {?} step
         * @return {?}
         */
        step => {
            step.completed = step.initiallyCompleted;
            step.selected = false;
            step.editing = false;
        }));
        // set the first step as the current step
        wizard.currentStepIndex = wizard.defaultStepIndex;
        wizard.currentStep.selected = true;
        wizard.currentStep.enter(MovingDirection.Forwards);
    }
    /**
     * Checks if wizard configuration allows to perform reset.
     *
     * A check failure is indicated by throwing an `Error` with the message discribing the discovered misconfiguration issue.
     *
     * Can include additional checks in particular navigation mode implementations.
     *
     * @throws An `Error` is thrown, if a micconfiguration issue is discovered.
     * @protected
     * @param {?} wizard The wizard component to operate on
     * @return {?}
     */
    ensureCanReset(wizard) {
        // the wizard doesn't contain a step with the default step index
        if (!wizard.hasStep(wizard.defaultStepIndex)) {
            throw new Error(`The wizard doesn't contain a step with index ${wizard.defaultStepIndex}`);
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The default navigation mode used by [[WizardComponent]] and [[NavigationModeDirective]].
 *
 * It is parameterized with two navigation policies passed to constructor:
 *
 * - [[navigateBackward]] policy controls whether wizard steps before the current step are navigable:
 *
 *   - `"deny"` -- the steps are not navigable
 *   - `"allow"` -- the steps are navigable
 *   - If the corresponding constructor argument is omitted or is `null` or `undefined`,
 *     then the default value is applied which is `"deny"`
 *
 * - [[navigateForward]] policy controls whether wizard steps after the current step are navigable:
 *
 *   - `"deny"` -- the steps are not navigable
 *   - `"allow"` -- the steps are navigable
 *   - `"visited"` -- a step is navigable iff it was already visited before
 *   - If the corresponding constructor argument is omitted or is `null` or `undefined`,
 *     then the default value is applied which is `"allow"`
 */
class ConfigurableNavigationMode extends BaseNavigationMode {
    /**
     * Constructor
     *
     * @param {?=} navigateBackward Controls whether wizard steps before the current step are navigable
     * @param {?=} navigateForward Controls whether wizard steps before the current step are navigable
     */
    constructor(navigateBackward = null, navigateForward = null) {
        super();
        this.navigateBackward = navigateBackward;
        this.navigateForward = navigateForward;
        this.navigateBackward = this.navigateBackward || 'allow';
        this.navigateForward = this.navigateForward || 'deny';
    }
    /**
     * @inheritDoc
     * @protected
     * @param {?} wizard
     * @param {?} destinationIndex
     * @return {?}
     */
    canTransitionToStep(wizard, destinationIndex) {
        // if the destination step can be navigated to using the navigation bar,
        // it should be accessible with [goToStep] as well
        if (this.isNavigable(wizard, destinationIndex)) {
            return true;
        }
        // navigation with [goToStep] is permitted if all previous steps
        // to the destination step have been completed or are optional
        return wizard.wizardSteps
            .filter((/**
         * @param {?} step
         * @param {?} index
         * @return {?}
         */
        (step, index) => index < destinationIndex && index !== wizard.currentStepIndex))
            .every((/**
         * @param {?} step
         * @return {?}
         */
        step => step.completed || step.optional));
    }
    /**
     * @inheritDoc
     * @protected
     * @param {?} wizard
     * @param {?} destinationIndex
     * @return {?}
     */
    transition(wizard, destinationIndex) {
        if (this.navigateForward === 'deny') {
            // set all steps after the destination step to incomplete
            wizard.wizardSteps
                .filter((/**
             * @param {?} step
             * @param {?} index
             * @return {?}
             */
            (step, index) => wizard.currentStepIndex > destinationIndex && index > destinationIndex))
                .forEach((/**
             * @param {?} step
             * @return {?}
             */
            step => step.completed = false));
        }
        super.transition(wizard, destinationIndex);
    }
    /**
     * @inheritDoc
     * @param {?} wizard
     * @param {?} destinationIndex
     * @return {?}
     */
    isNavigable(wizard, destinationIndex) {
        // Check if the destination step can be navigated to
        /** @type {?} */
        const destinationStep = wizard.getStepAtIndex(destinationIndex);
        if (destinationStep instanceof WizardCompletionStep) {
            // A completion step can only be entered, if all previous steps have been completed, are optional, or selected
            /** @type {?} */
            const previousStepsCompleted = wizard.wizardSteps
                .filter((/**
             * @param {?} step
             * @param {?} index
             * @return {?}
             */
            (step, index) => index < destinationIndex))
                .every((/**
             * @param {?} step
             * @return {?}
             */
            step => step.completed || step.optional || step.selected));
            if (!previousStepsCompleted) {
                return false;
            }
        }
        // Apply navigation pocicies
        if (destinationIndex < wizard.currentStepIndex) {
            // If the destination step is before current, apply the `navigateBackward` policy
            switch (this.navigateBackward) {
                case 'allow': return true;
                case 'deny': return false;
                default:
                    throw new Error(`Invalid value for navigateBackward: ${this.navigateBackward}`);
            }
        }
        else if (destinationIndex > wizard.currentStepIndex) {
            // If the destination step is after current, apply the `navigateForward` policy
            switch (this.navigateForward) {
                case 'allow': return true;
                case 'deny': return false;
                case 'visited': return destinationStep.completed;
                default:
                    throw new Error(`Invalid value for navigateForward: ${this.navigateForward}`);
            }
        }
        else {
            // Re-entering the current step is not allowed
            return false;
        }
    }
    /**
     * @inheritDoc
     * @protected
     * @param {?} wizard
     * @return {?}
     */
    ensureCanReset(wizard) {
        super.ensureCanReset(wizard);
        // the default step is a completion step and the wizard contains more than one step
        /** @type {?} */
        const defaultWizardStep = wizard.getStepAtIndex(wizard.defaultStepIndex);
        /** @type {?} */
        const defaultCompletionStep = defaultWizardStep instanceof WizardCompletionStep;
        if (defaultCompletionStep && wizard.wizardSteps.length !== 1) {
            throw new Error(`The default step index ${wizard.defaultStepIndex} references a completion step`);
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
class WizardComponent {
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
WizardComponent.ɵfac = function WizardComponent_Factory(t) { return new (t || WizardComponent)(); };
WizardComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: WizardComponent, selectors: [["aw-wizard"]], contentQueries: function WizardComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, WizardStep, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.wizardStepsQueryList = _t);
    } }, hostVars: 4, hostBindings: function WizardComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("horizontal", ctx.horizontalOrientation)("vertical", ctx.verticalOrientation);
    } }, inputs: { navBarLocation: "navBarLocation", navBarLayout: "navBarLayout", navBarDirection: "navBarDirection", disableNavigationBar: "disableNavigationBar", defaultStepIndex: "defaultStepIndex" }, ngContentSelectors: _c0, decls: 4, vars: 6, consts: [[3, "direction", "ngClass", 4, "ngIf"], [3, "ngClass"], [3, "direction", "ngClass"]], template: function WizardComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, WizardComponent_aw_wizard_navigation_bar_0_Template, 1, 10, "aw-wizard-navigation-bar", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵprojection(2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(3, WizardComponent_aw_wizard_navigation_bar_3_Template, 1, 10, "aw-wizard-navigation-bar", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.navBarLocation == "top" || ctx.navBarLocation == "left");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(3, _c2, ctx.navBarLocation == "left" || ctx.navBarLocation == "right", ctx.navBarLocation == "top" || ctx.navBarLocation == "bottom"));
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.navBarLocation == "bottom" || ctx.navBarLocation == "right");
    } }, directives: function () { return [ɵngcc1.NgIf, ɵngcc1.NgClass, WizardNavigationBarComponent]; }, encapsulation: 2 });
/** @nocollapse */
WizardComponent.ctorParameters = () => [];
WizardComponent.propDecorators = {
    wizardStepsQueryList: [{ type: ContentChildren, args: [WizardStep,] }],
    navBarLocation: [{ type: Input }],
    navBarLayout: [{ type: Input }],
    navBarDirection: [{ type: Input }],
    defaultStepIndex: [{ type: Input }],
    disableNavigationBar: [{ type: Input }],
    horizontalOrientation: [{ type: HostBinding, args: ['class.horizontal',] }],
    verticalOrientation: [{ type: HostBinding, args: ['class.vertical',] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(WizardComponent, [{
        type: Component,
        args: [{
                selector: 'aw-wizard',
                template: "<aw-wizard-navigation-bar\n  [direction]=\"navBarDirection\"\n  *ngIf=\"navBarLocation == 'top' || navBarLocation == 'left'\"\n  [ngClass]=\"{\n    vertical: navBarLocation == 'left',\n    horizontal: navBarLocation == 'top',\n    small: navBarLayout == 'small',\n    'large-filled': navBarLayout == 'large-filled',\n    'large-filled-symbols': navBarLayout == 'large-filled-symbols',\n    'large-empty': navBarLayout == 'large-empty',\n    'large-empty-symbols': navBarLayout == 'large-empty-symbols'\n  }\">\n</aw-wizard-navigation-bar>\n\n<div [ngClass]=\"{\n  'wizard-steps': true,\n  vertical: navBarLocation == 'left' || navBarLocation == 'right',\n  horizontal: navBarLocation == 'top' || navBarLocation == 'bottom'\n}\">\n  <ng-content></ng-content>\n</div>\n\n<aw-wizard-navigation-bar\n  [direction]=\"navBarDirection\"\n  *ngIf=\"navBarLocation == 'bottom' || navBarLocation == 'right'\"\n  [ngClass]=\"{\n    vertical: navBarLocation == 'right',\n    horizontal: navBarLocation == 'bottom',\n    small: navBarLayout == 'small',\n    'large-filled': navBarLayout == 'large-filled',\n    'large-filled-symbols': navBarLayout == 'large-filled-symbols',\n    'large-empty': navBarLayout == 'large-empty',\n    'large-empty-symbols': navBarLayout == 'large-empty-symbols'\n  }\">\n</aw-wizard-navigation-bar>\n"
            }]
    }], function () { return []; }, { navBarLocation: [{
            type: Input
        }], navBarLayout: [{
            type: Input
        }], navBarDirection: [{
            type: Input
        }], disableNavigationBar: [{
            type: Input
        }], defaultStepIndex: [{
            type: Input
        }], horizontalOrientation: [{
            type: HostBinding,
            args: ['class.horizontal']
        }], verticalOrientation: [{
            type: HostBinding,
            args: ['class.vertical']
        }], wizardStepsQueryList: [{
            type: ContentChildren,
            args: [WizardStep]
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The `aw-wizard-navigation-bar` component contains the navigation bar inside a [[WizardComponent]].
 * To correctly display the navigation bar, it's required to set the right css classes for the navigation bar,
 * otherwise it will look like a normal `ul` component.
 *
 * ### Syntax
 *
 * ```html
 * <aw-wizard-navigation-bar></aw-wizard-navigation-bar>
 * ```
 *
 * @author Marc Arndt
 */
class WizardNavigationBarComponent {
    /**
     * Constructor
     *
     * @param {?} wizard The state the wizard currently resides in
     */
    constructor(wizard) {
        this.wizard = wizard;
        /**
         * The direction in which the wizard steps should be shown in the navigation bar.
         * This value can be either `left-to-right` or `right-to-left`
         */
        this.direction = 'left-to-right';
    }
    /**
     * Returns all [[WizardStep]]s contained in the wizard
     *
     * @return {?} An array containing all [[WizardStep]]s
     */
    get wizardSteps() {
        switch (this.direction) {
            case 'right-to-left':
                return this.wizard.wizardSteps.slice().reverse();
            case 'left-to-right':
            default:
                return this.wizard.wizardSteps;
        }
    }
    /**
     * Returns the number of wizard steps, that need to be displaced in the navigation bar
     *
     * @return {?} The number of wizard steps to be displayed
     */
    get numberOfWizardSteps() {
        return this.wizard.wizardSteps.length;
    }
    /**
     * Checks, whether a [[WizardStep]] can be marked as `current` in the navigation bar
     *
     * @param {?} wizardStep The wizard step to be checked
     * @return {?} True if the step can be marked as `current`
     */
    isCurrent(wizardStep) {
        return wizardStep.selected;
    }
    /**
     * Checks, whether a [[WizardStep]] can be marked as `editing` in the navigation bar
     *
     * @param {?} wizardStep The wizard step to be checked
     * @return {?} True if the step can be marked as `editing`
     */
    isEditing(wizardStep) {
        return wizardStep.editing;
    }
    /**
     * Checks, whether a [[WizardStep]] can be marked as `done` in the navigation bar
     *
     * @param {?} wizardStep The wizard step to be checked
     * @return {?} True if the step can be marked as `done`
     */
    isDone(wizardStep) {
        return wizardStep.completed;
    }
    /**
     * Checks, whether a [[WizardStep]] can be marked as `optional` in the navigation bar
     *
     * @param {?} wizardStep The wizard step to be checked
     * @return {?} True if the step can be marked as `optional`
     */
    isOptional(wizardStep) {
        return wizardStep.optional;
    }
    /**
     * Checks, whether a [[WizardStep]] can be marked as `completed` in the navigation bar.
     *
     * The `completed` class is only applied to completion steps.
     *
     * @param {?} wizardStep The wizard step to be checked
     * @return {?} True if the step can be marked as `completed`
     */
    isCompleted(wizardStep) {
        return wizardStep instanceof WizardCompletionStep && this.wizard.completed;
    }
    /**
     * Checks, whether a [[WizardStep]] can be marked as `navigable` in the navigation bar.
     * A wizard step can be navigated to if:
     * - the step is currently not selected
     * - the navigation bar isn't disabled
     * - the navigation mode allows navigation to the step
     *
     * @param {?} wizardStep The wizard step to be checked
     * @return {?} True if the step can be marked as navigable
     */
    isNavigable(wizardStep) {
        return !wizardStep.selected && !this.wizard.disableNavigationBar &&
            this.wizard.isNavigable(this.wizard.getIndexOfStep(wizardStep));
    }
}
WizardNavigationBarComponent.ɵfac = function WizardNavigationBarComponent_Factory(t) { return new (t || WizardNavigationBarComponent)(ɵngcc0.ɵɵdirectiveInject(WizardComponent)); };
WizardNavigationBarComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: WizardNavigationBarComponent, selectors: [["aw-wizard-navigation-bar"]], inputs: { direction: "direction" }, decls: 2, vars: 4, consts: [[3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [3, "awGoToStep"], [1, "label"], [3, "ngTemplateOutlet", 4, "ngIf"], [4, "ngIf"], [1, "step-indicator", 3, "ngStyle"], [3, "ngTemplateOutlet"]], template: function WizardNavigationBarComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ul");
        ɵngcc0.ɵɵtemplate(1, WizardNavigationBarComponent_li_1_Template, 8, 17, "li", 0);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMapInterpolate1("steps-indicator steps-", ctx.numberOfWizardSteps, "");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.wizardSteps);
    } }, directives: function () { return [ɵngcc1.NgForOf, ɵngcc1.NgClass, GoToStepDirective, ɵngcc1.NgIf, ɵngcc1.NgStyle, ɵngcc1.NgTemplateOutlet]; }, encapsulation: 2 });
/** @nocollapse */
WizardNavigationBarComponent.ctorParameters = () => [
    { type: WizardComponent }
];
WizardNavigationBarComponent.propDecorators = {
    direction: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(WizardNavigationBarComponent, [{
        type: Component,
        args: [{
                selector: 'aw-wizard-navigation-bar',
                template: "<ul class=\"steps-indicator steps-{{numberOfWizardSteps}}\">\n  <li [attr.id]=\"step.stepId\" *ngFor=\"let step of wizardSteps\"\n      [ngClass]=\"{\n        current: isCurrent(step),\n        editing: isEditing(step),\n        done: isDone(step),\n        optional: isOptional(step),\n        completed: isCompleted(step),\n        navigable: isNavigable(step)\n  }\">\n    <a [awGoToStep]=\"step\">\n      <div class=\"label\">\n        <ng-container *ngIf=\"step.stepTitleTemplate\" [ngTemplateOutlet]=\"step.stepTitleTemplate.templateRef\"></ng-container>\n        <ng-container *ngIf=\"!step.stepTitleTemplate\">{{step.stepTitle}}</ng-container>\n      </div>\n      <div class=\"step-indicator\" [ngStyle]=\"{ 'font-family': step.stepSymbolTemplate ? '' : step.navigationSymbol.fontFamily }\">\n        <ng-container *ngIf=\"step.stepSymbolTemplate\" [ngTemplateOutlet]=\"step.stepSymbolTemplate.templateRef\"></ng-container>\n        <ng-container *ngIf=\"!step.stepSymbolTemplate\">{{step.navigationSymbol.symbol}}</ng-container>\n      </div>\n    </a>\n  </li>\n</ul>\n"
            }]
    }], function () { return [{ type: WizardComponent }]; }, { direction: [{
            type: Input
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
class WizardStepComponent extends WizardStep {
}
WizardStepComponent.ɵfac = function WizardStepComponent_Factory(t) { return ɵWizardStepComponent_BaseFactory(t || WizardStepComponent); };
WizardStepComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: WizardStepComponent, selectors: [["aw-wizard-step"]], features: [ɵngcc0.ɵɵProvidersFeature([
            { provide: WizardStep, useExisting: forwardRef(( /**
                     * @return {?}
                     */() => WizardStepComponent)) }
        ]), ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function WizardStepComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2 });
const ɵWizardStepComponent_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(WizardStepComponent);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(WizardStepComponent, [{
        type: Component,
        args: [{
                selector: 'aw-wizard-step',
                template: "<ng-content></ng-content>\n",
                providers: [
                    { provide: WizardStep, useExisting: forwardRef(( /**
                             * @return {?}
                             */() => WizardStepComponent)) }
                ]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
class EnableBackLinksDirective {
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
EnableBackLinksDirective.ɵfac = function EnableBackLinksDirective_Factory(t) { return new (t || EnableBackLinksDirective)(ɵngcc0.ɵɵdirectiveInject(WizardCompletionStep, 1)); };
EnableBackLinksDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: EnableBackLinksDirective, selectors: [["", "awEnableBackLinks", ""]], outputs: { stepExit: "stepExit" } });
/** @nocollapse */
EnableBackLinksDirective.ctorParameters = () => [
    { type: WizardCompletionStep, decorators: [{ type: Host }] }
];
EnableBackLinksDirective.propDecorators = {
    stepExit: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(EnableBackLinksDirective, [{
        type: Directive,
        args: [{
                selector: '[awEnableBackLinks]'
            }]
    }], function () { return [{ type: WizardCompletionStep, decorators: [{
                type: Host
            }] }]; }, { stepExit: [{
            type: Output
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Checks whether the given `value` implements the interface [[StepId]].
 *
 * @param {?} value The value to be checked
 * @return {?} True if the given value implements [[StepId]] and false otherwise
 */
function isStepId(value) {
    return value.hasOwnProperty('stepId') && !(value instanceof WizardStep);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Checks whether the given `value` implements the interface [[StepIndex]].
 *
 * @param {?} value The value to be checked
 * @return {?} True if the given value implements [[StepIndex]] and false otherwise
 */
function isStepIndex(value) {
    return value.hasOwnProperty('stepIndex');
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Checks whether the given `value` implements the interface [[StepOffset]].
 *
 * @param {?} value The value to be checked
 * @return {?} True if the given value implements [[StepOffset]] and false otherwise
 */
function isStepOffset(value) {
    return value.hasOwnProperty('stepOffset');
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The `awGoToStep` directive can be used to navigate to a given step.
 * This step can be defined in one of multiple formats
 *
 * ### Syntax
 *
 * With absolute step index:
 *
 * ```html
 * <button [awGoToStep]="{ stepIndex: absolute step index }" (finalize)="finalize method">...</button>
 * ```
 *
 * With unique step id:
 *
 * ```html
 * <button [awGoToStep]="{ stepId: 'step id of destination step' }" (finalize)="finalize method">...</button>
 * ```
 *
 * With a wizard step object:
 *
 * ```html
 * <button [awGoToStep]="wizard step object" (finalize)="finalize method">...</button>
 * ```
 *
 * With an offset to the defining step:
 *
 * ```html
 * <button [awGoToStep]="{ stepOffset: offset }" (finalize)="finalize method">...</button>
 * ```
 *
 * @author Marc Arndt
 */
class GoToStepDirective {
    /**
     * Constructor
     *
     * @param {?} wizard The wizard component
     * @param {?} wizardStep The wizard step, which contains this [[GoToStepDirective]]
     */
    constructor(wizard, wizardStep) {
        this.wizard = wizard;
        this.wizardStep = wizardStep;
        /**
         * This [[EventEmitter]] is called directly before the current step is exited during a transition through a component with this directive.
         */
        this.preFinalize = new EventEmitter();
        /**
         * This [[EventEmitter]] is called directly after the current step is exited during a transition through a component with this directive.
         */
        this.postFinalize = new EventEmitter();
    }
    /**
     * A convenience field for `preFinalize`
     * @return {?}
     */
    get finalize() {
        return this.preFinalize;
    }
    /**
     * A convenience name for `preFinalize`
     *
     * @param {?} emitter The [[EventEmitter]] to be set
     * @return {?}
     */
    set finalize(emitter) {
        /* istanbul ignore next */
        this.preFinalize = emitter;
    }
    /**
     * Returns the destination step of this directive as an absolute step index inside the wizard
     *
     * @throws If `targetStep` is of an unknown type an `Error` is thrown
     * @return {?} The index of the destination step
     */
    get destinationStep() {
        /** @type {?} */
        let destinationStep;
        if (isStepIndex(this.targetStep)) {
            destinationStep = this.targetStep.stepIndex;
        }
        else if (isStepId(this.targetStep)) {
            destinationStep = this.wizard.getIndexOfStepWithId(this.targetStep.stepId);
        }
        else if (isStepOffset(this.targetStep) && this.wizardStep !== null) {
            destinationStep = this.wizard.getIndexOfStep(this.wizardStep) + this.targetStep.stepOffset;
        }
        else if (this.targetStep instanceof WizardStep) {
            destinationStep = this.wizard.getIndexOfStep(this.targetStep);
        }
        else {
            throw new Error(`Input 'targetStep' is neither a WizardStep, StepOffset, StepIndex or StepId`);
        }
        return destinationStep;
    }
    /**
     * Listener method for `click` events on the component with this directive.
     * After this method is called the wizard will try to transition to the `destinationStep`
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        this.wizard.goToStep(this.destinationStep, this.preFinalize, this.postFinalize);
    }
}
GoToStepDirective.ɵfac = function GoToStepDirective_Factory(t) { return new (t || GoToStepDirective)(ɵngcc0.ɵɵdirectiveInject(WizardComponent), ɵngcc0.ɵɵdirectiveInject(WizardStep, 8)); };
GoToStepDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: GoToStepDirective, selectors: [["", "awGoToStep", ""]], hostBindings: function GoToStepDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function GoToStepDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } }, inputs: { targetStep: ["awGoToStep", "targetStep"] }, outputs: { preFinalize: "preFinalize", postFinalize: "postFinalize", finalize: "finalize" } });
/** @nocollapse */
GoToStepDirective.ctorParameters = () => [
    { type: WizardComponent },
    { type: WizardStep, decorators: [{ type: Optional }] }
];
GoToStepDirective.propDecorators = {
    preFinalize: [{ type: Output }],
    postFinalize: [{ type: Output }],
    targetStep: [{ type: Input, args: ['awGoToStep',] }],
    finalize: [{ type: Output }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GoToStepDirective, [{
        type: Directive,
        args: [{
                selector: '[awGoToStep]'
            }]
    }], function () { return [{ type: WizardComponent }, { type: WizardStep, decorators: [{
                type: Optional
            }] }]; }, { preFinalize: [{
            type: Output
        }], postFinalize: [{
            type: Output
        }], finalize: [{
            type: Output
        }], onClick: [{
            type: HostListener,
            args: ['click', ['$event']]
        }], targetStep: [{
            type: Input,
            args: ['awGoToStep']
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The `awNextStep` directive can be used to navigate to the next step.
 *
 * ### Syntax
 *
 * ```html
 * <button awNextStep (finalize)="finalize method">...</button>
 * ```
 *
 * @author Marc Arndt
 */
class NextStepDirective {
    /**
     * Constructor
     *
     * @param {?} wizard The state of the wizard
     */
    constructor(wizard) {
        this.wizard = wizard;
        /**
         * This [[EventEmitter]] is called directly before the current step is exited during a transition through a component with this directive.
         */
        this.preFinalize = new EventEmitter();
        /**
         * This [[EventEmitter]] is called directly after the current step is exited during a transition through a component with this directive.
         */
        this.postFinalize = new EventEmitter();
    }
    /**
     * A convenience field for `preFinalize`
     * @return {?}
     */
    get finalize() {
        return this.preFinalize;
    }
    /**
     * A convenience name for `preFinalize`
     *
     * @param {?} emitter The [[EventEmitter]] to be set
     * @return {?}
     */
    set finalize(emitter) {
        /* istanbul ignore next */
        this.preFinalize = emitter;
    }
    /**
     * Listener method for `click` events on the component with this directive.
     * After this method is called the wizard will try to transition to the next step
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        this.wizard.goToNextStep(this.preFinalize, this.postFinalize);
    }
}
NextStepDirective.ɵfac = function NextStepDirective_Factory(t) { return new (t || NextStepDirective)(ɵngcc0.ɵɵdirectiveInject(WizardComponent)); };
NextStepDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NextStepDirective, selectors: [["", "awNextStep", ""]], hostBindings: function NextStepDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function NextStepDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } }, outputs: { preFinalize: "preFinalize", postFinalize: "postFinalize", finalize: "finalize" } });
/** @nocollapse */
NextStepDirective.ctorParameters = () => [
    { type: WizardComponent }
];
NextStepDirective.propDecorators = {
    preFinalize: [{ type: Output }],
    postFinalize: [{ type: Output }],
    finalize: [{ type: Output }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NextStepDirective, [{
        type: Directive,
        args: [{
                selector: '[awNextStep]'
            }]
    }], function () { return [{ type: WizardComponent }]; }, { preFinalize: [{
            type: Output
        }], postFinalize: [{
            type: Output
        }], finalize: [{
            type: Output
        }], onClick: [{
            type: HostListener,
            args: ['click', ['$event']]
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The `awOptionalStep` directive can be used to define an optional `wizard-step`.
 * An optional wizard step is a [[WizardStep]] that doesn't need to be completed to transition to later wizard steps.
 *
 * ### Syntax
 *
 * ```html
 * <aw-wizard-step awOptionalStep>
 *     ...
 * </aw-wizard-step>
 * ```
 *
 * ### Example
 *
 * ```html
 * <aw-wizard-step stepTitle="Second step" awOptionalStep>
 *     ...
 * </aw-wizard-step>
 * ```
 *
 * @author Marc Arndt
 */
class OptionalStepDirective {
    /**
     * Constructor
     *
     * @param {?} wizardStep The wizard step, which contains this [[OptionalStepDirective]]
     */
    constructor(wizardStep) {
        this.wizardStep = wizardStep;
    }
    /**
     * Initialization work
     * @return {?}
     */
    ngOnInit() {
        this.wizardStep.optional = true;
    }
}
OptionalStepDirective.ɵfac = function OptionalStepDirective_Factory(t) { return new (t || OptionalStepDirective)(ɵngcc0.ɵɵdirectiveInject(WizardStep, 1)); };
OptionalStepDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: OptionalStepDirective, selectors: [["", "awOptionalStep", ""]] });
/** @nocollapse */
OptionalStepDirective.ctorParameters = () => [
    { type: WizardStep, decorators: [{ type: Host }] }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(OptionalStepDirective, [{
        type: Directive,
        args: [{
                selector: '[awOptionalStep]'
            }]
    }], function () { return [{ type: WizardStep, decorators: [{
                type: Host
            }] }]; }, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The `awPreviousStep` directive can be used to navigate to the previous step.
 * Compared to the [[NextStepDirective]] it's important to note, that this directive doesn't contain a `finalize` output method.
 *
 * ### Syntax
 *
 * ```html
 * <button awPreviousStep>...</button>
 * ```
 *
 * @author Marc Arndt
 */
class PreviousStepDirective {
    /**
     * Constructor
     *
     * @param {?} wizard The state of the wizard
     */
    constructor(wizard) {
        this.wizard = wizard;
        /**
         * This [[EventEmitter]] is called directly before the current step is exited during a transition through a component with this directive.
         */
        this.preFinalize = new EventEmitter();
        /**
         * This [[EventEmitter]] is called directly after the current step is exited during a transition through a component with this directive.
         */
        this.postFinalize = new EventEmitter();
    }
    /**
     * A convenience field for `preFinalize`
     * @return {?}
     */
    get finalize() {
        return this.preFinalize;
    }
    /**
     * A convenience field for `preFinalize`
     *
     * @param {?} emitter The [[EventEmitter]] to be set
     * @return {?}
     */
    set finalize(emitter) {
        /* istanbul ignore next */
        this.preFinalize = emitter;
    }
    /**
     * Listener method for `click` events on the component with this directive.
     * After this method is called the wizard will try to transition to the previous step
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        this.wizard.goToPreviousStep(this.preFinalize, this.postFinalize);
    }
}
PreviousStepDirective.ɵfac = function PreviousStepDirective_Factory(t) { return new (t || PreviousStepDirective)(ɵngcc0.ɵɵdirectiveInject(WizardComponent)); };
PreviousStepDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: PreviousStepDirective, selectors: [["", "awPreviousStep", ""]], hostBindings: function PreviousStepDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function PreviousStepDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } }, outputs: { preFinalize: "preFinalize", postFinalize: "postFinalize", finalize: "finalize" } });
/** @nocollapse */
PreviousStepDirective.ctorParameters = () => [
    { type: WizardComponent }
];
PreviousStepDirective.propDecorators = {
    preFinalize: [{ type: Output }],
    postFinalize: [{ type: Output }],
    finalize: [{ type: Output }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PreviousStepDirective, [{
        type: Directive,
        args: [{
                selector: '[awPreviousStep]'
            }]
    }], function () { return [{ type: WizardComponent }]; }, { preFinalize: [{
            type: Output
        }], postFinalize: [{
            type: Output
        }], finalize: [{
            type: Output
        }], onClick: [{
            type: HostListener,
            args: ['click', ['$event']]
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The `awResetWizard` directive can be used to reset the wizard to its initial state.
 * This directive accepts an output, which can be used to specify some custom cleanup work during the reset process.
 *
 * ### Syntax
 *
 * ```html
 * <button awResetWizard (finalize)="custom reset task">...</button>
 * ```
 *
 * @author Marc Arndt
 */
class ResetWizardDirective {
    /**
     * Constructor
     *
     * @param {?} wizard The wizard component
     */
    constructor(wizard) {
        this.wizard = wizard;
        /**
         * An [[EventEmitter]] containing some tasks to be done, directly before the wizard is being reset
         */
        this.finalize = new EventEmitter();
    }
    /**
     * Resets the wizard
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        // do some optional cleanup work
        this.finalize.emit();
        // reset the wizard to its initial state
        this.wizard.reset();
    }
}
ResetWizardDirective.ɵfac = function ResetWizardDirective_Factory(t) { return new (t || ResetWizardDirective)(ɵngcc0.ɵɵdirectiveInject(WizardComponent)); };
ResetWizardDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: ResetWizardDirective, selectors: [["", "awResetWizard", ""]], hostBindings: function ResetWizardDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function ResetWizardDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } }, outputs: { finalize: "finalize" } });
/** @nocollapse */
ResetWizardDirective.ctorParameters = () => [
    { type: WizardComponent }
];
ResetWizardDirective.propDecorators = {
    finalize: [{ type: Output }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ResetWizardDirective, [{
        type: Directive,
        args: [{
                selector: '[awResetWizard]'
            }]
    }], function () { return [{ type: WizardComponent }]; }, { finalize: [{
            type: Output
        }], onClick: [{
            type: HostListener,
            args: ['click', ['$event']]
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
class SelectedStepDirective {
    /**
     * Constructor
     *
     * @param {?} wizardStep The wizard step, which should be selected by default
     */
    constructor(wizardStep) {
        this.wizardStep = wizardStep;
    }
    /**
     * Initialization work
     * @return {?}
     */
    ngOnInit() {
        this.wizardStep.defaultSelected = true;
    }
}
SelectedStepDirective.ɵfac = function SelectedStepDirective_Factory(t) { return new (t || SelectedStepDirective)(ɵngcc0.ɵɵdirectiveInject(WizardStep, 1)); };
SelectedStepDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: SelectedStepDirective, selectors: [["", "awSelectedStep", ""]] });
/** @nocollapse */
SelectedStepDirective.ctorParameters = () => [
    { type: WizardStep, decorators: [{ type: Host }] }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SelectedStepDirective, [{
        type: Directive,
        args: [{
                selector: '[awSelectedStep]'
            }]
    }], function () { return [{ type: WizardStep, decorators: [{
                type: Host
            }] }]; }, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The `awWizardCompletionStep` directive can be used to define a completion/success step at the end of your wizard
 * After a [[WizardCompletionStep]] has been entered, it has the characteristic that the user is blocked from
 * leaving it again to a previous step.
 * In addition entering a [[WizardCompletionStep]] automatically sets the `wizard`, and all steps inside the `wizard`,
 * as completed.
 *
 * ### Syntax
 *
 * ```html
 * <div awWizardCompletionStep [stepTitle]="title of the wizard step"
 *    [navigationSymbol]="{ symbol: 'navigation symbol', fontFamily: 'font-family' }"
 *    (stepEnter)="event emitter to be called when the wizard step is entered"
 *    (stepExit)="event emitter to be called when the wizard step is exited">
 *    ...
 * </div>
 * ```
 *
 * ### Example
 *
 * ```html
 * <div awWizardCompletionStep stepTitle="Step 1" [navigationSymbol]="{ symbol: '1' }">
 *    ...
 * </div>
 * ```
 *
 * With a navigation symbol from the `font-awesome` font:
 *
 * ```html
 * <div awWizardCompletionStep stepTitle="Step 1" [navigationSymbol]="{ symbol: '&#xf1ba;', fontFamily: 'FontAwesome' }">
 *    ...
 * </div>
 * ```
 *
 * @author Marc Arndt
 */
class WizardCompletionStepDirective extends WizardCompletionStep {
}
WizardCompletionStepDirective.ɵfac = function WizardCompletionStepDirective_Factory(t) { return ɵWizardCompletionStepDirective_BaseFactory(t || WizardCompletionStepDirective); };
WizardCompletionStepDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: WizardCompletionStepDirective, selectors: [["", "awWizardCompletionStep", ""]], features: [ɵngcc0.ɵɵProvidersFeature([
            { provide: WizardStep, useExisting: forwardRef(( /**
                     * @return {?}
                     */() => WizardCompletionStepDirective)) },
            { provide: WizardCompletionStep, useExisting: forwardRef(( /**
                     * @return {?}
                     */() => WizardCompletionStepDirective)) }
        ]), ɵngcc0.ɵɵInheritDefinitionFeature] });
const ɵWizardCompletionStepDirective_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(WizardCompletionStepDirective);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(WizardCompletionStepDirective, [{
        type: Directive,
        args: [{
                selector: '[awWizardCompletionStep]',
                providers: [
                    { provide: WizardStep, useExisting: forwardRef(( /**
                             * @return {?}
                             */() => WizardCompletionStepDirective)) },
                    { provide: WizardCompletionStep, useExisting: forwardRef(( /**
                             * @return {?}
                             */() => WizardCompletionStepDirective)) }
                ]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The `awWizardStep` directive can be used to define a normal step inside a wizard.
 *
 * ### Syntax
 *
 * With `stepTitle` and `navigationSymbol` inputs:
 *
 * ```html
 * <div awWizardStep [stepTitle]="step title" [navigationSymbol]="{ symbol: 'symbol', fontFamily: 'font-family' }"
 *    [canExit]="deciding function" (stepEnter)="enter function" (stepExit)="exit function">
 *    ...
 * </div>
 * ```
 *
 * With `awWizardStepTitle` and `awWizardStepSymbol` directives:
 *
 * ```html
 * <div awWizardStep [canExit]="deciding function" (stepEnter)="enter function" (stepExit)="exit function">
 *    <ng-template awWizardStepTitle>
 *        step title
 *    </ng-template>
 *    <ng-template awWizardStepSymbol>
 *        symbol
 *    </ng-template>
 *    ...
 * </div>
 * ```
 *
 * ### Example
 *
 * With `stepTitle` and `navigationSymbol` inputs:
 *
 * ```html
 * <div awWizardStep stepTitle="Address information" [navigationSymbol]="{ symbol: '&#xf1ba;', fontFamily: 'FontAwesome' }">
 *    ...
 * </div>
 * ```
 *
 * With `awWizardStepTitle` and `awWizardStepSymbol` directives:
 *
 * ```html
 * <div awWizardStep>
 *    <ng-template awWizardStepTitle>
 *        Address information
 *    </ng-template>
 *    <ng-template awWizardStepSymbol>
 *        <i class="fa fa-taxi"></i>
 *    </ng-template>
 * </div>
 * ```
 *
 * @author Marc Arndt
 */
class WizardStepDirective extends WizardStep {
}
WizardStepDirective.ɵfac = function WizardStepDirective_Factory(t) { return ɵWizardStepDirective_BaseFactory(t || WizardStepDirective); };
WizardStepDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: WizardStepDirective, selectors: [["", "awWizardStep", ""]], features: [ɵngcc0.ɵɵProvidersFeature([
            { provide: WizardStep, useExisting: forwardRef(( /**
                     * @return {?}
                     */() => WizardStepDirective)) }
        ]), ɵngcc0.ɵɵInheritDefinitionFeature] });
const ɵWizardStepDirective_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(WizardStepDirective);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(WizardStepDirective, [{
        type: Directive,
        args: [{
                selector: '[awWizardStep]',
                providers: [
                    { provide: WizardStep, useExisting: forwardRef(( /**
                             * @return {?}
                             */() => WizardStepDirective)) }
                ]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The [[awNavigationMode]] directive can be used to customize wizard'd navigation mode.
 *
 * There are several usage options:
 *
 * ### Option 1. Customize the default navigation mode with [[navigateBackward]] and/or [[navigateForward]] inputs.
 *
 * ```html
 * <aw-wizard [awNavigationMode] navigateBackward="deny" navigateForward="allow">...</aw-wizard>
 * ```
 *
 * ### Option 2. Pass in a custom navigation mode
 *
 * ```typescript
 * import { BaseNavigationMode } from 'angular-archwizard'
 *
 * class CustomNavigationMode extends BaseNavigationMode {
 *
 *   // ...
 * }
 * ```
 *
 * ```typescript
 * \@Component({
 *   // ...
 * })
 * class MyComponent {
 *
 *   navigationMode = new CustomNavigationMode();
 * }
 * ```
 *
 * ```html
 * <aw-wizard [awNavigationMode]="navigationMode">...</aw-wizard>
 * ```
 *
 * ### Additional Notes
 *
 * - Specifying a custom navigation mode takes priority over [[navigateBackward]] and [[navigateForward]] inputs
 *
 * - Omitting the [[awNavigationMode]] directive or, equally, specifying just [[awNavigationMode]] without
 *   any inputs or parameters causes the wizard to use the default "strict" navigation mode equivalent to
 *
 * ```html
 * <aw-wizard [awNavigationMode] navigateBackward="deny" navigateForward="allow">...</aw-wizard>
 * ````
 */
class NavigationModeDirective {
    /**
     * @param {?} wizard
     */
    constructor(wizard) {
        this.wizard = wizard;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.wizard.navigation = this.getNavigationMode();
    }
    /**
     * @private
     * @return {?}
     */
    getNavigationMode() {
        if (this.awNavigationMode) {
            return this.awNavigationMode;
        }
        return new ConfigurableNavigationMode(this.navigateBackward, this.navigateForward);
    }
}
NavigationModeDirective.ɵfac = function NavigationModeDirective_Factory(t) { return new (t || NavigationModeDirective)(ɵngcc0.ɵɵdirectiveInject(WizardComponent)); };
NavigationModeDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NavigationModeDirective, selectors: [["", "awNavigationMode", ""]], inputs: { awNavigationMode: "awNavigationMode", navigateBackward: "navigateBackward", navigateForward: "navigateForward" }, features: [ɵngcc0.ɵɵNgOnChangesFeature()] });
/** @nocollapse */
NavigationModeDirective.ctorParameters = () => [
    { type: WizardComponent }
];
NavigationModeDirective.propDecorators = {
    awNavigationMode: [{ type: Input }],
    navigateBackward: [{ type: Input }],
    navigateForward: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NavigationModeDirective, [{
        type: Directive,
        args: [{
                selector: '[awNavigationMode]'
            }]
    }], function () { return [{ type: WizardComponent }]; }, { awNavigationMode: [{
            type: Input
        }], navigateBackward: [{
            type: Input
        }], navigateForward: [{
            type: Input
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The `awCompletedStep` directive can be used to make a wizard step initially completed.
 *
 * Initially completed steps are shown as completed when the wizard is presented to the user.
 *
 * A typical use case is to make a step initially completed if it is automatically filled with some derived/predefined information.
 *
 * ### Syntax
 *
 * ```html
 * <aw-wizard-step awCompletedStep>
 *     ...
 * </aw-wizard-step>
 * ```
 *
 * An optional boolean condition can be specified:
 *
 * ```html
 * <aw-wizard-step [awCompletedStep]="shouldBeCompleted">
 *     ...
 * </aw-wizard-step>
 * ```
 *
 * ### Example
 *
 * ```html
 * <aw-wizard-step stepTitle="First step" [awCompletedStep]="firstStepPrefilled">
 *     ...
 * </aw-wizard-step>
 * ```
 */
class CompletedStepDirective {
    /**
     * Constructor
     *
     * @param {?} wizardStep The wizard step, which contains this [[CompletedStepDirective]]
     */
    constructor(wizardStep) {
        this.wizardStep = wizardStep;
        // tslint:disable-next-line:no-input-rename
        this.initiallyCompleted = true;
    }
    /**
     * Initialization work
     * @return {?}
     */
    ngOnInit() {
        // The input receives '' when specified in the template without a value.  In this case, apply the default value (`true`).
        this.wizardStep.initiallyCompleted = this.initiallyCompleted || (/** @type {?} */ (this.initiallyCompleted)) === '';
    }
}
CompletedStepDirective.ɵfac = function CompletedStepDirective_Factory(t) { return new (t || CompletedStepDirective)(ɵngcc0.ɵɵdirectiveInject(WizardStep, 1)); };
CompletedStepDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CompletedStepDirective, selectors: [["", "awCompletedStep", ""]], inputs: { initiallyCompleted: ["awCompletedStep", "initiallyCompleted"] } });
/** @nocollapse */
CompletedStepDirective.ctorParameters = () => [
    { type: WizardStep, decorators: [{ type: Host }] }
];
CompletedStepDirective.propDecorators = {
    initiallyCompleted: [{ type: Input, args: ['awCompletedStep',] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CompletedStepDirective, [{
        type: Directive,
        args: [{
                selector: '[awCompletedStep]'
            }]
    }], function () { return [{ type: WizardStep, decorators: [{
                type: Host
            }] }]; }, { initiallyCompleted: [{
            type: Input,
            args: ['awCompletedStep']
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The module defining all the content inside `angular-archwizard`
 *
 * @author Marc Arndt
 */
class ArchwizardModule {
    /* istanbul ignore next */
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: ArchwizardModule,
            providers: [
            // Nothing here yet
            ]
        };
    }
}
ArchwizardModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ArchwizardModule });
ArchwizardModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ArchwizardModule_Factory(t) { return new (t || ArchwizardModule)(); }, imports: [[
            CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ArchwizardModule, { declarations: function () { return [WizardComponent,
        WizardStepComponent,
        WizardNavigationBarComponent,
        WizardCompletionStepComponent,
        GoToStepDirective,
        NextStepDirective,
        PreviousStepDirective,
        OptionalStepDirective,
        WizardStepSymbolDirective,
        WizardStepTitleDirective,
        EnableBackLinksDirective,
        WizardStepDirective,
        WizardCompletionStepDirective,
        SelectedStepDirective,
        ResetWizardDirective,
        NavigationModeDirective,
        CompletedStepDirective]; }, imports: function () { return [CommonModule]; }, exports: function () { return [WizardComponent,
        WizardStepComponent,
        WizardNavigationBarComponent,
        WizardCompletionStepComponent,
        GoToStepDirective,
        NextStepDirective,
        PreviousStepDirective,
        OptionalStepDirective,
        WizardStepSymbolDirective,
        WizardStepTitleDirective,
        EnableBackLinksDirective,
        WizardStepDirective,
        WizardCompletionStepDirective,
        SelectedStepDirective,
        ResetWizardDirective,
        NavigationModeDirective,
        CompletedStepDirective]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ArchwizardModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    WizardComponent,
                    WizardStepComponent,
                    WizardNavigationBarComponent,
                    WizardCompletionStepComponent,
                    GoToStepDirective,
                    NextStepDirective,
                    PreviousStepDirective,
                    OptionalStepDirective,
                    WizardStepSymbolDirective,
                    WizardStepTitleDirective,
                    EnableBackLinksDirective,
                    WizardStepDirective,
                    WizardCompletionStepDirective,
                    SelectedStepDirective,
                    ResetWizardDirective,
                    NavigationModeDirective,
                    CompletedStepDirective,
                ],
                imports: [
                    CommonModule
                ],
                exports: [
                    WizardComponent,
                    WizardStepComponent,
                    WizardNavigationBarComponent,
                    WizardCompletionStepComponent,
                    GoToStepDirective,
                    NextStepDirective,
                    PreviousStepDirective,
                    OptionalStepDirective,
                    WizardStepSymbolDirective,
                    WizardStepTitleDirective,
                    EnableBackLinksDirective,
                    WizardStepDirective,
                    WizardCompletionStepDirective,
                    SelectedStepDirective,
                    ResetWizardDirective,
                    NavigationModeDirective,
                    CompletedStepDirective,
                ]
            }]
    }], null, null); })();

export { ArchwizardModule, BaseNavigationMode, CompletedStepDirective, ConfigurableNavigationMode, EnableBackLinksDirective, GoToStepDirective, MovingDirection, NavigationModeDirective, NextStepDirective, OptionalStepDirective, PreviousStepDirective, ResetWizardDirective, SelectedStepDirective, WizardCompletionStep, WizardCompletionStepComponent, WizardCompletionStepDirective, WizardComponent, WizardNavigationBarComponent, WizardStep, WizardStepComponent, WizardStepDirective, WizardStepTitleDirective, isStepId, isStepIndex, isStepOffset, WizardStepSymbolDirective as ɵa };

//# sourceMappingURL=angular-archwizard.js.map