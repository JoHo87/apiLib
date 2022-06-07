"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
let Book = class Book {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Book.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Book.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Book.prototype, "author", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], Book.prototype, "year", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Book.prototype, "publisher", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], Book.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Book.prototype, "user_cpf", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Book.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Book.prototype, "updated_at", void 0);
Book = __decorate([
    (0, typeorm_1.Entity)('books')
], Book);
exports.default = Book;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm9vay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL2Jvb2tzL3R5cGVvcm0vZW50aXRpZXMvQm9vay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHFDQU1pQjtBQUdqQixJQUFNLElBQUksR0FBVixNQUFNLElBQUk7Q0EyQlQsQ0FBQTtBQXpCQztJQURDLElBQUEsZ0NBQXNCLEVBQUMsTUFBTSxDQUFDOztnQ0FDcEI7QUFHWDtJQURDLElBQUEsZ0JBQU0sR0FBRTs7a0NBQ0k7QUFHYjtJQURDLElBQUEsZ0JBQU0sR0FBRTs7b0NBQ007QUFHZjtJQURDLElBQUEsZ0JBQU0sRUFBQyxLQUFLLENBQUM7O2tDQUNEO0FBR2I7SUFEQyxJQUFBLGdCQUFNLEdBQUU7O3VDQUNTO0FBR2xCO0lBREMsSUFBQSxnQkFBTSxFQUFDLEtBQUssQ0FBQzs7b0NBQ0M7QUFHZjtJQURDLElBQUEsZ0JBQU0sR0FBRTs7c0NBQ1E7QUFHakI7SUFEQyxJQUFBLDBCQUFnQixHQUFFOzhCQUNQLElBQUk7d0NBQUM7QUFHakI7SUFEQyxJQUFBLDBCQUFnQixHQUFFOzhCQUNQLElBQUk7d0NBQUM7QUExQmIsSUFBSTtJQURULElBQUEsZ0JBQU0sRUFBQyxPQUFPLENBQUM7R0FDVixJQUFJLENBMkJUO0FBRUQsa0JBQWUsSUFBSSxDQUFDIn0=