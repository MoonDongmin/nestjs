import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './boards.model';
import { request, response } from 'express';
import { CreateBoardsDto } from "./dto/create-boards.dto";

@Controller('boards')
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) {}

  @Get('/')
  getAllBoard(
  ): Board[] {
    return this.boardsService.getAllBoards();
  }

  @Post()
  createBoard(
    @Body() createBoardDto:CreateBoardsDto
  ): Board {
    return this.boardsService.createBoard(createBoardDto);
  }
}
