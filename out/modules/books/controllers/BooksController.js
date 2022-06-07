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
const CreateBookServise_1 = __importDefault(require("../services/CreateBookServise"));
const DeleteBookService_1 = __importDefault(require("../services/DeleteBookService"));
const ListBookService_1 = __importDefault(require("../services/ListBookService"));
const ShowBookService_1 = __importDefault(require("../services/ShowBookService"));
const UpdateBookService_1 = __importDefault(require("../services/UpdateBookService"));
class BooksController {
    index(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const listBooks = new ListBookService_1.default();
            const books = yield listBooks.execute();
            return response.json(books);
        });
    }
    show(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const showBook = new ShowBookService_1.default();
            const book = yield showBook.execute({ id });
            return response.json(book);
        });
    }
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, author, year, publisher, quantity } = request.body;
            const createBook = new CreateBookServise_1.default();
            const book = yield createBook.execute({
                name,
                author,
                year,
                publisher,
                quantity,
            });
            return response.json(book);
        });
    }
    update(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, author, year, publisher, status, user_cpf } = request.body;
            const { id } = request.params;
            const updateBook = new UpdateBookService_1.default();
            const book = yield updateBook.execute({
                id,
                name,
                author,
                year,
                publisher,
                status,
                user_cpf,
            });
            return response.json(book);
        });
    }
    delete(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const deleteBook = new DeleteBookService_1.default();
            yield deleteBook.execute({ id });
            return response.json([]);
        });
    }
}
exports.default = BooksController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm9va3NDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvYm9va3MvY29udHJvbGxlcnMvQm9va3NDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esc0ZBQThEO0FBQzlELHNGQUE4RDtBQUM5RCxrRkFBMEQ7QUFDMUQsa0ZBQTBEO0FBQzFELHNGQUE4RDtBQUU5RCxNQUFxQixlQUFlO0lBQ3JCLEtBQUssQ0FBQyxPQUFnQixFQUFFLFFBQWtCOztZQUNyRCxNQUFNLFNBQVMsR0FBRyxJQUFJLHlCQUFlLEVBQUUsQ0FBQztZQUV4QyxNQUFNLEtBQUssR0FBRyxNQUFNLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUV4QyxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUIsQ0FBQztLQUFBO0lBRVksSUFBSSxDQUFDLE9BQWdCLEVBQUUsUUFBa0I7O1lBQ3BELE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBRTlCLE1BQU0sUUFBUSxHQUFHLElBQUkseUJBQWUsRUFBRSxDQUFDO1lBRXZDLE1BQU0sSUFBSSxHQUFHLE1BQU0sUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFFNUMsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLENBQUM7S0FBQTtJQUVZLE1BQU0sQ0FBQyxPQUFnQixFQUFFLFFBQWtCOztZQUN0RCxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7WUFFakUsTUFBTSxVQUFVLEdBQUcsSUFBSSwyQkFBaUIsRUFBRSxDQUFDO1lBRTNDLE1BQU0sSUFBSSxHQUFHLE1BQU0sVUFBVSxDQUFDLE9BQU8sQ0FBQztnQkFDcEMsSUFBSTtnQkFDSixNQUFNO2dCQUNOLElBQUk7Z0JBQ0osU0FBUztnQkFDVCxRQUFRO2FBQ1QsQ0FBQyxDQUFDO1lBRUgsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLENBQUM7S0FBQTtJQUVZLE1BQU0sQ0FBQyxPQUFnQixFQUFFLFFBQWtCOztZQUN0RCxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO1lBQ3pFLE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBRTlCLE1BQU0sVUFBVSxHQUFHLElBQUksMkJBQWlCLEVBQUUsQ0FBQztZQUUzQyxNQUFNLElBQUksR0FBRyxNQUFNLFVBQVUsQ0FBQyxPQUFPLENBQUM7Z0JBQ3BDLEVBQUU7Z0JBQ0YsSUFBSTtnQkFDSixNQUFNO2dCQUNOLElBQUk7Z0JBQ0osU0FBUztnQkFDVCxNQUFNO2dCQUNOLFFBQVE7YUFDVCxDQUFDLENBQUM7WUFFSCxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsQ0FBQztLQUFBO0lBRVksTUFBTSxDQUFDLE9BQWdCLEVBQUUsUUFBa0I7O1lBQ3RELE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBRTlCLE1BQU0sVUFBVSxHQUFHLElBQUksMkJBQWlCLEVBQUUsQ0FBQztZQUUzQyxNQUFNLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBRWpDLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMzQixDQUFDO0tBQUE7Q0FDRjtBQS9ERCxrQ0ErREMifQ==