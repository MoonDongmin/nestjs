import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './boards.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardsDto } from './dto/create-boards.dto';

@Injectable()
export class BoardsService {
  private boards: Board[] = [];

  getAllBoards(): Board[] {
    return this.boards;
  }

  createBoard(creatBoardDto: CreateBoardsDto) {
    const { title, description } = creatBoardDto;

    const board: Board = {
      // id는 하드코딩되어서 우리가 정의할 수 없음 그래서 uuid를 통해서 유니크한 값을 줌
      id: uuid(), // 유니크한 아이디 줌
      title: title,
      description: description,
      status: BoardStatus.PUBLIC,
    };
    this.boards.push(board);
    return board;
  }
}
