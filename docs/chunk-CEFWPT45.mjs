import './polyfills.server.mjs';
import{$ as Pe,A as l,B as u,C as G,D as Ae,E as m,F as we,G as p,H,I as ie,J as ne,K as re,L as N,M as Fe,O as Ie,U as Se,V as oe,X as xe,Y as Ne,Z as b,_ as Oe,a as ve,b as _e,c as Ce,ca as ke,d as j,e as C,f as I,g as V,h,i as v,ia as se,j as Ve,k as De,l as Y,m as J,n as f,o as E,p as S,q as be,r as Q,s as _,t as a,u as ee,v as Me,w as D,x as Ee,y as x,z as te}from"./chunk-DDZSR5KZ.mjs";import{a as y,b as M}from"./chunk-VVCT4QZE.mjs";var vt=[],Te=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=h({type:e}),e.\u0275inj=f({imports:[se.forRoot(vt),se]});let t=e;return t})();var je=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=h({type:e}),e.\u0275inj=f({imports:[b]});let t=e;return t})();var Ge=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=h({type:e}),e.\u0275inj=f({imports:[b]});let t=e;return t})();var ze=(()=>{let e=class e{constructor(i,r){this._renderer=i,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(i,r){this._renderer.setProperty(this._elementRef.nativeElement,i,r)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}};e.\u0275fac=function(r){return new(r||e)(a(ee),a(Y))},e.\u0275dir=v({type:e});let t=e;return t})(),qe=(()=>{let e=class e extends ze{};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=Q(e)))(o||e)}})(),e.\u0275dir=v({type:e,features:[D]});let t=e;return t})(),le=new E("");var _t={provide:le,useExisting:S(()=>z),multi:!0};function Ct(){let t=oe()?oe().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var Vt=new E(""),z=(()=>{let e=class e extends ze{constructor(i,r,o){super(i,r),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!Ct())}writeValue(i){let r=i??"";this.setProperty("value",r)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}};e.\u0275fac=function(r){return new(r||e)(a(ee),a(Y),a(Vt,8))},e.\u0275dir=v({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){r&1&&m("input",function(s){return o._handleInput(s.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(s){return o._compositionEnd(s.target.value)})},features:[N([_t]),D]});let t=e;return t})();var Ze=new E(""),Xe=new E("");function Ke(t){return t!=null}function Ye(t){return Ie(t)?ve(t):t}function Je(t){let e={};return t.forEach(n=>{e=n!=null?y(y({},e),n):e}),Object.keys(e).length===0?null:e}function Qe(t,e){return e.map(n=>n(t))}function Dt(t){return!t.validate}function et(t){return t.map(e=>Dt(e)?e:n=>e.validate(n))}function bt(t){if(!t)return null;let e=t.filter(Ke);return e.length==0?null:function(n){return Je(Qe(n,e))}}function ue(t){return t!=null?bt(et(t)):null}function Mt(t){if(!t)return null;let e=t.filter(Ke);return e.length==0?null:function(n){let i=Qe(n,e).map(Ye);return Ce(i).pipe(_e(Je))}}function ce(t){return t!=null?Mt(et(t)):null}function He(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function Et(t){return t._rawValidators}function At(t){return t._rawAsyncValidators}function ae(t){return t?Array.isArray(t)?t:[t]:[]}function B(t,e){return Array.isArray(t)?t.includes(e):t===e}function Ue(t,e){let n=ae(e);return ae(t).forEach(r=>{B(n,r)||n.push(r)}),n}function Be(t,e){return ae(e).filter(n=>!B(t,n))}var R=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=ue(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=ce(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},w=class extends R{get formDirective(){return null}get path(){return null}},T=class extends R{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},L=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},wt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Gi=M(y({},wt),{"[class.ng-submitted]":"isSubmitted"}),tt=(()=>{let e=class e extends L{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(a(T,2))},e.\u0275dir=v({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){r&2&&te("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[D]});let t=e;return t})(),it=(()=>{let e=class e extends L{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(a(w,10))},e.\u0275dir=v({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,o){r&2&&te("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},features:[D]});let t=e;return t})();var O="VALID",U="INVALID",A="PENDING",P="DISABLED";function nt(t){return(q(t)?t.validators:t)||null}function Ft(t){return Array.isArray(t)?ue(t):t||null}function rt(t,e){return(q(e)?e.asyncValidators:t)||null}function It(t){return Array.isArray(t)?ce(t):t||null}function q(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function St(t,e,n){let i=t.controls;if(!(e?Object.keys(i):i).length)throw new j(1e3,"");if(!i[n])throw new j(1001,"")}function xt(t,e,n){t._forEachChild((i,r)=>{if(n[r]===void 0)throw new j(1002,"")})}var W=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===O}get invalid(){return this.status===U}get pending(){return this.status==A}get disabled(){return this.status===P}get enabled(){return this.status!==P}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Ue(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Ue(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Be(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Be(e,this._rawAsyncValidators))}hasValidator(e){return B(this._rawValidators,e)}hasAsyncValidator(e){return B(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=A,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=P,this.errors=null,this._forEachChild(i=>{i.disable(M(y({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(M(y({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=O,this._forEachChild(i=>{i.enable(M(y({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(M(y({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===O||this.status===A)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?P:O}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=A,this._hasOwnPendingAsyncValidator=!0;let n=Ye(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(e,n){let i=n?this.get(n):this;return i&&i.errors?i.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new C,this.statusChanges=new C}_calculateStatus(){return this._allControlsDisabled()?P:this.errors?U:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(A)?A:this._anyControlsHaveStatus(U)?U:O}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){q(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Ft(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=It(this._rawAsyncValidators)}},$=class extends W{constructor(e,n,i){super(nt(n),rt(i,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,n){return this.controls[e]?this.controls[e]:(this.controls[e]=n,n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange),n)}addControl(e,n,i={}){this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(e,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}setControl(e,n,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],n&&this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,n={}){xt(this,!0,e),Object.keys(e).forEach(i=>{St(this,!0,i),this.controls[i].setValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(Object.keys(e).forEach(i=>{let r=this.controls[i];r&&r.patchValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e={},n={}){this._forEachChild((i,r)=>{i.reset(e?e[r]:null,{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this._reduceChildren({},(e,n,i)=>(e[i]=n.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(n,i)=>i._syncPendingControls()?!0:n);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(n=>{let i=this.controls[n];i&&e(i,n)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[n,i]of Object.entries(this.controls))if(this.contains(n)&&e(i))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(n,i,r)=>((i.enabled||this.disabled)&&(n[r]=i.value),n))}_reduceChildren(e,n){let i=e;return this._forEachChild((r,o)=>{i=n(i,r,o)}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var de=new E("CallSetDisabledState",{providedIn:"root",factory:()=>he}),he="always";function Nt(t,e){return[...e.path,t]}function ot(t,e,n=he){st(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),Pt(t,e),Tt(t,e),kt(t,e),Ot(t,e)}function Re(t,e){t.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function Ot(t,e){if(e.valueAccessor.setDisabledState){let n=i=>{e.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}function st(t,e){let n=Et(t);e.validator!==null?t.setValidators(He(n,e.validator)):typeof n=="function"&&t.setValidators([n]);let i=At(t);e.asyncValidator!==null?t.setAsyncValidators(He(i,e.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();Re(e._rawValidators,r),Re(e._rawAsyncValidators,r)}function Pt(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&at(t,e)})}function kt(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&at(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function at(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Tt(t,e){let n=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}function jt(t,e){t==null,st(t,e)}function Gt(t,e){if(!t.hasOwnProperty("model"))return!1;let n=t.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function Ht(t){return Object.getPrototypeOf(t.constructor)===qe}function Ut(t,e){t._syncPendingControls(),e.forEach(n=>{let i=n.control;i.updateOn==="submit"&&i._pendingChange&&(n.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function Bt(t,e){if(!e)return null;Array.isArray(e);let n,i,r;return e.forEach(o=>{o.constructor===z?n=o:Ht(o)?i=o:r=o}),r||i||n||null}var Rt={provide:w,useExisting:S(()=>fe)},k=Promise.resolve(),fe=(()=>{let e=class e extends w{constructor(i,r,o){super(),this.callSetDisabledState=o,this.submitted=!1,this._directives=new Set,this.ngSubmit=new C,this.form=new $({},ue(i),ce(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(i){k.then(()=>{let r=this._findContainer(i.path);i.control=r.registerControl(i.name,i.control),ot(i.control,i,this.callSetDisabledState),i.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(i)})}getControl(i){return this.form.get(i.path)}removeControl(i){k.then(()=>{let r=this._findContainer(i.path);r&&r.removeControl(i.name),this._directives.delete(i)})}addFormGroup(i){k.then(()=>{let r=this._findContainer(i.path),o=new $({});jt(o,i),r.registerControl(i.name,o),o.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(i){k.then(()=>{let r=this._findContainer(i.path);r&&r.removeControl(i.name)})}getFormGroup(i){return this.form.get(i.path)}updateModel(i,r){k.then(()=>{this.form.get(i.path).setValue(r)})}setValue(i){this.control.setValue(i)}onSubmit(i){return this.submitted=!0,Ut(this.form,this._directives),this.ngSubmit.emit(i),i?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(i=void 0){this.form.reset(i),this.submitted=!1}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(i){return i.pop(),i.length?this.form.get(i):this.form}};e.\u0275fac=function(r){return new(r||e)(a(Ze,10),a(Xe,10),a(de,8))},e.\u0275dir=v({type:e,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(r,o){r&1&&m("submit",function(s){return o.onSubmit(s)})("reset",function(){return o.onReset()})},inputs:{options:[I.None,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[N([Rt]),D]});let t=e;return t})();function Le(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function We(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var Lt=class extends W{constructor(e=null,n,i){super(nt(n),rt(i,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),q(n)&&(n.nonNullable||n.initialValueIsDefault)&&(We(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Le(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Le(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){We(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Wt={provide:T,useExisting:S(()=>pe)},$e=Promise.resolve(),pe=(()=>{let e=class e extends T{constructor(i,r,o,d,s,yt){super(),this._changeDetectorRef=s,this.callSetDisabledState=yt,this.control=new Lt,this._registered=!1,this.name="",this.update=new C,this._parent=i,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=Bt(this,d)}ngOnChanges(i){if(this._checkForErrors(),!this._registered||"name"in i){if(this._registered&&(this._checkName(),this.formDirective)){let r=i.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in i&&this._updateDisabled(i),Gt(i,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){ot(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(i){$e.then(()=>{this.control.setValue(i,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(i){let r=i.isDisabled.currentValue,o=r!==0&&Se(r);$e.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(i){return this._parent?Nt(i,this._parent):[i]}};e.\u0275fac=function(r){return new(r||e)(a(w,9),a(Ze,10),a(Xe,10),a(le,10),a(Me,8),a(de,8))},e.\u0275dir=v({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[I.None,"disabled","isDisabled"],model:[I.None,"ngModel","model"],options:[I.None,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[N([Wt]),D,be]});let t=e;return t})(),lt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=v({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let t=e;return t})(),$t={provide:le,useExisting:S(()=>me),multi:!0},me=(()=>{let e=class e extends qe{writeValue(i){let r=i??"";this.setProperty("value",r)}registerOnChange(i){this.onChange=r=>{i(r==""?null:parseFloat(r))}}};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=Q(e)))(o||e)}})(),e.\u0275dir=v({type:e,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(r,o){r&1&&m("input",function(s){return o.onChange(s.target.value)})("blur",function(){return o.onTouched()})},features:[N([$t]),D]});let t=e;return t})();var zt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=h({type:e}),e.\u0275inj=f({});let t=e;return t})();var ut=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:de,useValue:i.callSetDisabledState??he}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=h({type:e}),e.\u0275inj=f({imports:[zt]});let t=e;return t})();import Zt from"crypto";var X=new Uint8Array(256),Z=X.length;function ge(){return Z>X.length-16&&(Zt.randomFillSync(X),Z=0),X.slice(Z,Z+=16)}var c=[];for(let t=0;t<256;++t)c.push((t+256).toString(16).slice(1));function ct(t,e=0){return c[t[e+0]]+c[t[e+1]]+c[t[e+2]]+c[t[e+3]]+"-"+c[t[e+4]]+c[t[e+5]]+"-"+c[t[e+6]]+c[t[e+7]]+"-"+c[t[e+8]]+c[t[e+9]]+"-"+c[t[e+10]]+c[t[e+11]]+c[t[e+12]]+c[t[e+13]]+c[t[e+14]]+c[t[e+15]]}import Xt from"crypto";var ye={randomUUID:Xt.randomUUID};function Kt(t,e,n){if(ye.randomUUID&&!e&&!t)return ye.randomUUID();t=t||{};let i=t.random||(t.rng||ge)();if(i[6]=i[6]&15|64,i[8]=i[8]&63|128,e){n=n||0;for(let r=0;r<16;++r)e[n+r]=i[r];return e}return ct(i)}var F=Kt;var dt=(()=>{let e=class e{addCharacter(i){let r=y({id:F()},i);this.character.push(r)}deleteCharacterById(i){this.character=this.character.filter(r=>r.id!==i)}constructor(){this.character=[{id:F(),name:"Krillin",power:1e3},{id:F(),name:"Goku",power:9500},{id:F(),name:"Vegeta",power:7500}]}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=J({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var Jt=(t,e)=>({"list-group-item-dark":t,"list-group-item-primary":e});function Qt(t,e){if(t&1){let n=Ae();l(0,"li",2)(1,"div")(2,"span",3),p(3),u(),l(4,"span"),p(5),u(),l(6,"strong"),p(7,"Power: "),u(),l(8,"span"),p(9),u()(),l(10,"button",4),m("click",function(){let o=Ve(n).$implicit,d=we();return De(d.onDeleteCharacter(o.id))}),p(11," X "),u()()}if(t&2){let n=e.$implicit,i=e.index,r=e.last,o=e.even;x("ngClass",Fe(4,Jt,r,o)),_(3),H(" ",i+1,". "),_(2),H(" ",n.name," - "),_(4),H(" ",n.power," ")}}var ht=(()=>{let e=class e{constructor(){this.onDelecte=new C,this.characterList=[{name:"Thrunks",power:10}]}onDeleteCharacter(i){i&&(this.onDelecte.emit(i),console.log({id:i}))}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=V({type:e,selectors:[["dbz-list"]],inputs:{characterList:"characterList"},outputs:{onDelecte:"onDelecte"},decls:4,vars:1,consts:[[1,"list-group"],["class","list-group-item d-flex justify-content-between align-items-center","style","font-size:large;",3,"ngClass",4,"ngFor","ngForOf"],[1,"list-group-item","d-flex","justify-content-between","align-items-center",2,"font-size","large",3,"ngClass"],[1,"text-primary"],[1,"btn","btn-danger",3,"click"]],template:function(r,o){r&1&&(l(0,"h2"),p(1,"Listado"),u(),l(2,"ul",0),Ee(3,Qt,12,7,"li",1),u()),r&2&&(_(3),x("ngForOf",o.characterList))},dependencies:[xe,Ne]});let t=e;return t})();var ft=(()=>{let e=class e{constructor(){this.onNewCharacter=new C,this.character={name:"",power:0}}emitCharacter(){console.log(this.character),this.character.name.length!==0&&(this.onNewCharacter.emit(this.character),this.character={name:"",power:0})}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=V({type:e,selectors:[["dbz-add-character"]],outputs:{onNewCharacter:"onNewCharacter"},decls:7,vars:2,consts:[[1,"row",3,"ngSubmit"],["type","text","name","name","placeholder","Nombre",1,"form-control","mb-2",3,"ngModel","ngModelChange"],["type","number","name","power","placeholder","Poder",1,"form-control","mb-2",3,"ngModel","ngModelChange"],["type","submit",1,"btn","btn-primary"]],template:function(r,o){r&1&&(l(0,"h2"),p(1,"Agregar personaje"),u(),l(2,"form",0),m("ngSubmit",function(){return o.emitCharacter()}),l(3,"input",1),re("ngModelChange",function(s){return ne(o.character.name,s)||(o.character.name=s),s}),u(),l(4,"input",2),re("ngModelChange",function(s){return ne(o.character.power,s)||(o.character.power=s),s}),u(),l(5,"button",3),p(6," Agregar "),u()()),r&2&&(_(3),ie("ngModel",o.character.name),_(),ie("ngModel",o.character.power))},dependencies:[lt,z,me,tt,it,pe,fe]});let t=e;return t})();var pt=(()=>{let e=class e{constructor(i){this.DbzService=i}get characters(){return[...this.DbzService.character]}onDeleteCharacter(i){this.DbzService.deleteCharacterById(i)}onNewCharacter(i){this.DbzService.addCharacter(i)}};e.\u0275fac=function(r){return new(r||e)(a(dt))},e.\u0275cmp=V({type:e,selectors:[["app-dbz-main-page"]],decls:8,vars:1,consts:[[1,"row"],[1,"col"],[3,"characterList","onDelecte"],[3,"onNewCharacter"]],template:function(r,o){r&1&&(l(0,"h1"),p(1,"DBZ Personajes"),u(),G(2,"hr"),l(3,"div",0)(4,"div",1)(5,"dbz-list",2),m("onDelecte",function(s){return o.onDeleteCharacter(s)}),u()(),l(6,"div",1)(7,"dbz-add-character",3),m("onNewCharacter",function(s){return o.onNewCharacter(s)}),u()()()),r&2&&(_(5),x("characterList",o.characters))},dependencies:[ht,ft],encapsulation:2});let t=e;return t})();var mt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=h({type:e}),e.\u0275inj=f({imports:[b,ut]});let t=e;return t})();var K=(()=>{let e=class e{constructor(){this.title="Hola mundo"}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=V({type:e,selectors:[["app-root"]],decls:1,vars:0,template:function(r,o){r&1&&G(0,"app-dbz-main-page")},dependencies:[pt]});let t=e;return t})();var gt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=h({type:e,bootstrap:[K]}),e.\u0275inj=f({providers:[Pe()],imports:[Te,Oe,b,je,Ge,mt]});let t=e;return t})();var ni=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=h({type:e,bootstrap:[K]}),e.\u0275inj=f({imports:[gt,ke]});let t=e;return t})();export{ni as a};