var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
var FlightHistoryComponent = /** @class */ (function () {
    function FlightHistoryComponent() {
    }
    FlightHistoryComponent = __decorate([
        Component({
            template: "\n<div class=\"list-group\">\n  <a href=\"#\" class=\"list-group-item disabled\">\n    History\n  </a>\n  <a class=\"list-group-item\">Graz - Hamburg</a>\n  <a class=\"list-group-item\">Graz - Frankfurt</a>\n  <a class=\"list-group-item\">Hamburg - Graz</a>\n  <a class=\"list-group-item\">Frankfurt - Graz</a>\n</div>\n    "
        })
    ], FlightHistoryComponent);
    return FlightHistoryComponent;
}());
export { FlightHistoryComponent };
//# sourceMappingURL=flight-history.component.js.map