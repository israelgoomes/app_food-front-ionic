webpackJsonp([2],{

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmCategoriasPageModule", function() { return AdmCategoriasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__adm_categorias__ = __webpack_require__(292);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AdmCategoriasPageModule = /** @class */ (function () {
    function AdmCategoriasPageModule() {
    }
    AdmCategoriasPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__adm_categorias__["a" /* AdmCategoriasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__adm_categorias__["a" /* AdmCategoriasPage */]),
            ],
        })
    ], AdmCategoriasPageModule);
    return AdmCategoriasPageModule;
}());

//# sourceMappingURL=adm-categorias.module.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdmCategoriasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_models_categoriaModel__ = __webpack_require__(293);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AdmCategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdmCategoriasPage = /** @class */ (function () {
    function AdmCategoriasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        var _categ = this.navParams.get('_categoria');
        if (_categ) {
            this.categoria = _categ;
        }
        else {
            this.categoria = new __WEBPACK_IMPORTED_MODULE_2__app_models_categoriaModel__["a" /* categoriaModel */]();
        }
    }
    AdmCategoriasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdmCategoriasPage');
    };
    AdmCategoriasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-adm-categorias',template:/*ion-inline-start:"C:\Users\lsrael\Desktop\Ionic-Projects\NoFood_apk\app_food-front-ionic\src\pages\adm-categoria\adm-categorias.html"*/'<!--\n  Generated template for the AdmCategoriasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Categoria</ion-title>\n    <ion-buttons right>\n        <button ion-button clear>\n          salvar\n        </button>\n        <button ion-button icon-only>\n          <ion-icon name="trash"></ion-icon>\n        </button>  \n    </ion-buttons>\n    \n  </ion-navbar>\n</ion-header>\n\n<ion-content no-padding>\n  <ion-list no-lines>\n   \n    <ion-item>\n      <ion-label floating >Título</ion-label>\n      <ion-input type="text" [(ngModel)]="categoria.titulo" ></ion-input>\n    </ion-item>\n    <ion-item >\n    <ion-textarea [(ngModel)]="categoria.descricao" rows="4" placeholder="Adicione a descrição  da sua categoria"></ion-textarea>\n  </ion-item>\n<ion-item text-center>\n  <button ion-button clear><ion-icon name="camera" item-left></ion-icon> Selecionar Foto</button>\n</ion-item>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\lsrael\Desktop\Ionic-Projects\NoFood_apk\app_food-front-ionic\src\pages\adm-categoria\adm-categorias.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AdmCategoriasPage);
    return AdmCategoriasPage;
}());

//# sourceMappingURL=adm-categorias.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return categoriaModel; });
var categoriaModel = /** @class */ (function () {
    function categoriaModel() {
    }
    return categoriaModel;
}());

//# sourceMappingURL=categoriaModel.js.map

/***/ })

});
//# sourceMappingURL=2.js.map