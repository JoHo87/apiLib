"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Book_1 = __importDefault(require("../entities/Book"));
let BookRepository = class BookRepository extends typeorm_1.Repository {
    findAvailable(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const book = this.findOne({
                where: {
                    name,
                    status: 0,
                },
            });
            return book;
        });
    }
};
BookRepository = __decorate([
    (0, typeorm_1.EntityRepository)(Book_1.default)
], BookRepository);
exports.default = BookRepository;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm9va3NSZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvYm9va3MvdHlwZW9ybS9yZXBvc2l0b3JpZXMvQm9va3NSZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUNBQXVEO0FBQ3ZELDREQUFvQztBQUdwQyxJQUFNLGNBQWMsR0FBcEIsTUFBTSxjQUFlLFNBQVEsb0JBQWdCO0lBQzlCLGFBQWEsQ0FBQyxJQUFZOztZQUNyQyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUN4QixLQUFLLEVBQUU7b0JBQ0wsSUFBSTtvQkFDSixNQUFNLEVBQUUsQ0FBQztpQkFDVjthQUNGLENBQUMsQ0FBQztZQUVILE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQztLQUFBO0NBQ0YsQ0FBQTtBQVhLLGNBQWM7SUFEbkIsSUFBQSwwQkFBZ0IsRUFBQyxjQUFJLENBQUM7R0FDakIsY0FBYyxDQVduQjtBQUVELGtCQUFlLGNBQWMsQ0FBQyJ9