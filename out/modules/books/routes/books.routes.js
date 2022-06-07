"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const BooksController_1 = __importDefault(require("../controllers/BooksController"));
const celebrate_1 = require("celebrate");
const booksRouter = (0, express_1.Router)();
const booksController = new BooksController_1.default();
booksRouter.get('/', booksController.index);
booksRouter.get('/:id', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: {
        id: celebrate_1.Joi.string().uuid().required(),
    },
}), booksController.show);
booksRouter.post('/', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
        name: celebrate_1.Joi.string().required(),
        author: celebrate_1.Joi.string().required(),
        year: celebrate_1.Joi.number().required(),
        publisher: celebrate_1.Joi.string().required(),
        quantity: celebrate_1.Joi.number().required(),
    },
}), booksController.create);
booksRouter.put('/:id', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
        name: celebrate_1.Joi.string(),
        author: celebrate_1.Joi.string(),
        year: celebrate_1.Joi.number(),
        publisher: celebrate_1.Joi.string(),
        status: celebrate_1.Joi.number().max(2).positive(),
        user_cpf: celebrate_1.Joi.string(),
    },
    [celebrate_1.Segments.PARAMS]: {
        id: celebrate_1.Joi.string().uuid().required(),
    },
}), booksController.update);
booksRouter.delete('/:id', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: {
        id: celebrate_1.Joi.string().uuid().required(),
    },
}), booksController.delete);
exports.default = booksRouter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9va3Mucm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvYm9va3Mvcm91dGVzL2Jvb2tzLnJvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFDQUFpQztBQUNqQyxxRkFBNkQ7QUFDN0QseUNBQXFEO0FBRXJELE1BQU0sV0FBVyxHQUFHLElBQUEsZ0JBQU0sR0FBRSxDQUFDO0FBQzdCLE1BQU0sZUFBZSxHQUFHLElBQUkseUJBQWUsRUFBRSxDQUFDO0FBRTlDLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUU1QyxXQUFXLENBQUMsR0FBRyxDQUNiLE1BQU0sRUFDTixJQUFBLHFCQUFTLEVBQUM7SUFDUixDQUFDLG9CQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDakIsRUFBRSxFQUFFLGVBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUU7S0FDbkM7Q0FDRixDQUFDLEVBQ0YsZUFBZSxDQUFDLElBQUksQ0FDckIsQ0FBQztBQUVGLFdBQVcsQ0FBQyxJQUFJLENBQ2QsR0FBRyxFQUNILElBQUEscUJBQVMsRUFBQztJQUNSLENBQUMsb0JBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNmLElBQUksRUFBRSxlQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFO1FBQzdCLE1BQU0sRUFBRSxlQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFO1FBQy9CLElBQUksRUFBRSxlQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFO1FBQzdCLFNBQVMsRUFBRSxlQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFO1FBQ2xDLFFBQVEsRUFBRSxlQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFO0tBQ2xDO0NBQ0YsQ0FBQyxFQUNGLGVBQWUsQ0FBQyxNQUFNLENBQ3ZCLENBQUM7QUFFRixXQUFXLENBQUMsR0FBRyxDQUNiLE1BQU0sRUFDTixJQUFBLHFCQUFTLEVBQUM7SUFDUixDQUFDLG9CQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDZixJQUFJLEVBQUUsZUFBRyxDQUFDLE1BQU0sRUFBRTtRQUNsQixNQUFNLEVBQUUsZUFBRyxDQUFDLE1BQU0sRUFBRTtRQUNwQixJQUFJLEVBQUUsZUFBRyxDQUFDLE1BQU0sRUFBRTtRQUNsQixTQUFTLEVBQUUsZUFBRyxDQUFDLE1BQU0sRUFBRTtRQUN2QixNQUFNLEVBQUUsZUFBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUU7UUFDdEMsUUFBUSxFQUFFLGVBQUcsQ0FBQyxNQUFNLEVBQUU7S0FDdkI7SUFDRCxDQUFDLG9CQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDakIsRUFBRSxFQUFFLGVBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUU7S0FDbkM7Q0FDRixDQUFDLEVBQ0YsZUFBZSxDQUFDLE1BQU0sQ0FDdkIsQ0FBQztBQUVGLFdBQVcsQ0FBQyxNQUFNLENBQ2hCLE1BQU0sRUFDTixJQUFBLHFCQUFTLEVBQUM7SUFDUixDQUFDLG9CQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDakIsRUFBRSxFQUFFLGVBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUU7S0FDbkM7Q0FDRixDQUFDLEVBQ0YsZUFBZSxDQUFDLE1BQU0sQ0FDdkIsQ0FBQztBQUVGLGtCQUFlLFdBQVcsQ0FBQyJ9