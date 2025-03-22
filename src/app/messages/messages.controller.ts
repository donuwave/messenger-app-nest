import {Controller, Get, Query, Req, UseGuards} from '@nestjs/common';
import {MessagesService} from "./messages.service";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";

@Controller('messages')
export class MessagesController {
    constructor(private messagesService: MessagesService) {
    }

    @UseGuards(JwtAuthGuard)
    @Get("")
    getAllMessages(@Query("dialogId") dialogId: number, @Query('page') page: number, @Query('limit') limit: number, @Req() {userId}: any){
        return this.messagesService.getOldMessagesByDialogId({page, dialogId, limit, userId})
    }

    @UseGuards(JwtAuthGuard)
    @Get("/newMessages")
    getAllNewMessages(@Query("dialogId") dialogId: number, @Req() {userId}: any){
        return this.messagesService.getNewMessagesByDialogId(dialogId, userId)
    }
}
