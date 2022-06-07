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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBooks1653874442446 = void 0;
const typeorm_1 = require("typeorm");
class CreateBooks1653874442446 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
            yield queryRunner.createTable(new typeorm_1.Table({
                name: 'books',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                    },
                    {
                        name: 'author',
                        type: 'varchar',
                    },
                    {
                        name: 'year',
                        type: 'int',
                    },
                    {
                        name: 'publisher',
                        type: 'varchar',
                    },
                    {
                        name: 'status',
                        type: 'int',
                    },
                    {
                        name: 'user_cpf',
                        isNullable: true,
                        type: 'varchar',
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp with time zone',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp with time zone',
                        default: 'now()',
                    },
                ],
            }));
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropTable('books');
        });
    }
}
exports.CreateBooks1653874442446 = CreateBooks1653874442446;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTY1Mzg3NDQ0MjQ0Ni1DcmVhdGVCb29rcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zaGFyZWQvdHlwZW9ybS9taWdyYXRpb25zLzE2NTM4NzQ0NDI0NDYtQ3JlYXRlQm9va3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEscUNBQWlFO0FBRWpFLE1BQWEsd0JBQXdCO0lBQ3RCLEVBQUUsQ0FBQyxXQUF3Qjs7WUFDdEMsTUFBTSxXQUFXLENBQUMsS0FBSyxDQUFDLDRDQUE0QyxDQUFDLENBQUM7WUFDdEUsTUFBTSxXQUFXLENBQUMsV0FBVyxDQUMzQixJQUFJLGVBQUssQ0FBQztnQkFDUixJQUFJLEVBQUUsT0FBTztnQkFDYixPQUFPLEVBQUU7b0JBQ1A7d0JBQ0UsSUFBSSxFQUFFLElBQUk7d0JBQ1YsSUFBSSxFQUFFLE1BQU07d0JBQ1osU0FBUyxFQUFFLElBQUk7d0JBQ2Ysa0JBQWtCLEVBQUUsTUFBTTt3QkFDMUIsT0FBTyxFQUFFLG9CQUFvQjtxQkFDOUI7b0JBQ0Q7d0JBQ0UsSUFBSSxFQUFFLE1BQU07d0JBQ1osSUFBSSxFQUFFLFNBQVM7cUJBQ2hCO29CQUNEO3dCQUNFLElBQUksRUFBRSxRQUFRO3dCQUNkLElBQUksRUFBRSxTQUFTO3FCQUNoQjtvQkFDRDt3QkFDRSxJQUFJLEVBQUUsTUFBTTt3QkFDWixJQUFJLEVBQUUsS0FBSztxQkFDWjtvQkFDRDt3QkFDRSxJQUFJLEVBQUUsV0FBVzt3QkFDakIsSUFBSSxFQUFFLFNBQVM7cUJBQ2hCO29CQUNEO3dCQUNFLElBQUksRUFBRSxRQUFRO3dCQUNkLElBQUksRUFBRSxLQUFLO3FCQUNaO29CQUNEO3dCQUNFLElBQUksRUFBRSxVQUFVO3dCQUNoQixVQUFVLEVBQUUsSUFBSTt3QkFDaEIsSUFBSSxFQUFFLFNBQVM7cUJBQ2hCO29CQUNEO3dCQUNFLElBQUksRUFBRSxZQUFZO3dCQUNsQixJQUFJLEVBQUUsMEJBQTBCO3dCQUNoQyxPQUFPLEVBQUUsT0FBTztxQkFDakI7b0JBQ0Q7d0JBQ0UsSUFBSSxFQUFFLFlBQVk7d0JBQ2xCLElBQUksRUFBRSwwQkFBMEI7d0JBQ2hDLE9BQU8sRUFBRSxPQUFPO3FCQUNqQjtpQkFDRjthQUNGLENBQUMsQ0FDSCxDQUFDO1FBQ0osQ0FBQztLQUFBO0lBRVksSUFBSSxDQUFDLFdBQXdCOztZQUN4QyxNQUFNLFdBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkMsQ0FBQztLQUFBO0NBQ0Y7QUF6REQsNERBeURDIn0=