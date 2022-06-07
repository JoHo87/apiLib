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
const AppError_1 = __importDefault(require("@shared/errors/AppError"));
const typeorm_1 = require("typeorm");
const BooksRepository_1 = __importDefault(require("../typeorm/repositories/BooksRepository"));
class ListBookService {
    execute({ id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const booksRepository = (0, typeorm_1.getCustomRepository)(BooksRepository_1.default);
            const book = yield booksRepository.findOne(id);
            if (!book) {
                throw new AppError_1.default('Book not found!');
            }
            return book;
        });
    }
}
exports.default = ListBookService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2hvd0Jvb2tTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvYm9va3Mvc2VydmljZXMvU2hvd0Jvb2tTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUVBQStDO0FBQy9DLHFDQUE4QztBQUU5Qyw4RkFBcUU7QUFNckUsTUFBTSxlQUFlO0lBQ04sT0FBTyxDQUFDLEVBQUUsRUFBRSxFQUFZOztZQUNuQyxNQUFNLGVBQWUsR0FBRyxJQUFBLDZCQUFtQixFQUFDLHlCQUFjLENBQUMsQ0FBQztZQUU1RCxNQUFNLElBQUksR0FBRyxNQUFNLGVBQWUsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7WUFFL0MsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDVCxNQUFNLElBQUksa0JBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2FBQ3ZDO1lBRUQsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO0tBQUE7Q0FDRjtBQUVELGtCQUFlLGVBQWUsQ0FBQyJ9