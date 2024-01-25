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
const express_1 = __importDefault(require("express"));
const prisma_1 = require("./prisma/prisma");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.send("Hello");
}));
app.get("/projects", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.status(200).json(yield prisma_1.prisma.projects.findMany());
}));
app.get("/projects/new", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.prisma.projects.create({
        data: {
            id: "teste-teste",
            name: "Teste Teste",
            description: "Descrição teste",
            github: "github",
            project: "project",
        },
    });
    return res.send("Criou");
}));
app.listen(8080, () => {
    console.log("entrou");
});
module.exports = app;
