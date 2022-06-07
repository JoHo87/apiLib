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
class CreateBookService {
    execute({ name, author, year, publisher, quantity, }) {
        return __awaiter(this, void 0, void 0, function* () {
            let book;
            for (let i = 0; i < quantity; i++) {
                const booksRepository = (0, typeorm_1.getCustomRepository)(BooksRepository_1.default);
                book = booksRepository.create({
                    name,
                    author,
                    year,
                    publisher,
                    status: 0,
                });
                yield booksRepository.save(book);
            }
            return book;
        });
    }
}
exports.default = CreateBookService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3JlYXRlQm9va1NlcnZpc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9ib29rcy9zZXJ2aWNlcy9DcmVhdGVCb29rU2VydmlzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHFDQUE4QztBQUU5Qyw4RkFBcUU7QUFVckUsTUFBTSxpQkFBaUI7SUFDUixPQUFPLENBQUMsRUFDbkIsSUFBSSxFQUNKLE1BQU0sRUFDTixJQUFJLEVBQ0osU0FBUyxFQUNULFFBQVEsR0FDQzs7WUFDVCxJQUFJLElBQUksQ0FBQztZQUNULEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2pDLE1BQU0sZUFBZSxHQUFHLElBQUEsNkJBQW1CLEVBQUMseUJBQWMsQ0FBQyxDQUFDO2dCQUM1RCxJQUFJLEdBQUcsZUFBZSxDQUFDLE1BQU0sQ0FBQztvQkFDNUIsSUFBSTtvQkFDSixNQUFNO29CQUNOLElBQUk7b0JBQ0osU0FBUztvQkFDVCxNQUFNLEVBQUUsQ0FBQztpQkFDVixDQUFDLENBQUM7Z0JBQ0gsTUFBTSxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2xDO1lBRUQsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO0tBQUE7Q0FDRjtBQUVELGtCQUFlLGlCQUFpQixDQUFDIn0=