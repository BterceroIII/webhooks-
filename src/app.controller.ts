import { Body, Controller, Post } from '@nestjs/common';
import { HttpService } from '@nestjs/axios'; 
import { AppService } from './app.service';

@Controller('app')
export class AppController {
    constructor(
        private readonly appService: AppService,
        private readonly httpService: HttpService
    ){}
    
    @Post('/order')
    createOrder(@Body() data){
        const createOrder = this.appService.createOrder(data);

        this.httpService
            .post('https://webhook.site/c0a67fb2-6f70-4e74-b24e-a8d9959f52e0',data)
            .subscribe({
                complete: () => {
                    console.log('completed')
                },
                error: (err) =>{
                    // you can handle error request here
                }
            })

        return createOrder;
    }
}
