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
    execute({ id, name, author, year, publisher, status, user_cpf, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const booksRepository = (0, typeorm_1.getCustomRepository)(BooksRepository_1.default);
            const book = yield booksRepository.findOne(id);
            if (!book) {
                throw new AppError_1.default('Book not found!');
            }
            book.name = name;
            book.author = author;
            book.year = year;
            book.publisher = publisher;
            book.status = status;
            book.user_cpf = user_cpf;
            yield booksRepository.save(book);
            return book;
        });
    }
}
exports.default = ListBookService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXBkYXRlQm9va1NlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9ib29rcy9zZXJ2aWNlcy9VcGRhdGVCb29rU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHVFQUErQztBQUMvQyxxQ0FBOEM7QUFFOUMsOEZBQXFFO0FBWXJFLE1BQU0sZUFBZTtJQUNOLE9BQU8sQ0FBQyxFQUNuQixFQUFFLEVBQ0YsSUFBSSxFQUNKLE1BQU0sRUFDTixJQUFJLEVBQ0osU0FBUyxFQUNULE1BQU0sRUFDTixRQUFRLEdBQ0M7O1lBQ1QsTUFBTSxlQUFlLEdBQUcsSUFBQSw2QkFBbUIsRUFBQyx5QkFBYyxDQUFDLENBQUM7WUFFNUQsTUFBTSxJQUFJLEdBQUcsTUFBTSxlQUFlLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRS9DLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ1QsTUFBTSxJQUFJLGtCQUFRLENBQUMsaUJBQWlCLENBQUMsQ0FBQzthQUN2QztZQUVELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1lBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBRXpCLE1BQU0sZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUVqQyxPQUFPLElBQUksQ0FBQztRQUNkLENBQUM7S0FBQTtDQUNGO0FBRUQsa0JBQWUsZUFBZSxDQUFDIn0=