"use strict";
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
const BooksRepository_1 = __importDefault(require("../typeorm/repositories/BooksRepository"));
class ListBookService {
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const booksRepository = (0, typeorm_1.getCustomRepository)(BooksRepository_1.default);
            const books = yield booksRepository.find();
            return books;
        });
    }
}
exports.default = ListBookService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlzdEJvb2tTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvYm9va3Mvc2VydmljZXMvTGlzdEJvb2tTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUNBQThDO0FBRTlDLDhGQUFxRTtBQUVyRSxNQUFNLGVBQWU7SUFDTixPQUFPOztZQUNsQixNQUFNLGVBQWUsR0FBRyxJQUFBLDZCQUFtQixFQUFDLHlCQUFjLENBQUMsQ0FBQztZQUU1RCxNQUFNLEtBQUssR0FBRyxNQUFNLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUUzQyxPQUFPLEtBQUssQ0FBQztRQUNmLENBQUM7S0FBQTtDQUNGO0FBRUQsa0JBQWUsZUFBZSxDQUFDIn0=