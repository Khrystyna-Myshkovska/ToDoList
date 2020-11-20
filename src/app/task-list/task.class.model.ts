import { IUserTask } from './task.interface';

export class UserTask implements IUserTask{
    constructor(
        public task: string,
        public check:boolean,
        public status:string
    ){}
}