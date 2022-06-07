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
class DeleteBookService {
    execute({ id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const booksRepository = (0, typeorm_1.getCustomRepository)(BooksRepository_1.default);
            const book = yield booksRepository.findOne(id);
            if (!book) {
                throw new AppError_1.default('Book not found.');
            }
            yield booksRepository.remove(book);
        });
    }
}
exports.default = DeleteBookService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVsZXRlQm9va1NlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9ib29rcy9zZXJ2aWNlcy9EZWxldGVCb29rU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHVFQUErQztBQUMvQyxxQ0FBOEM7QUFDOUMsOEZBQXFFO0FBTXJFLE1BQU0saUJBQWlCO0lBQ1IsT0FBTyxDQUFDLEVBQUUsRUFBRSxFQUFZOztZQUNuQyxNQUFNLGVBQWUsR0FBRyxJQUFBLDZCQUFtQixFQUFDLHlCQUFjLENBQUMsQ0FBQztZQUU1RCxNQUFNLElBQUksR0FBRyxNQUFNLGVBQWUsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7WUFFL0MsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDVCxNQUFNLElBQUksa0JBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2FBQ3ZDO1lBRUQsTUFBTSxlQUFlLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLENBQUM7S0FBQTtDQUNGO0FBRUQsa0JBQWUsaUJBQWlCLENBQUMifQ==