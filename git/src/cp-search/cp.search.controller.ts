import {
    Controller,
    Get,
  } from '@nestjs/common';
  
//import {CpSearchService} from './cp-user-service';



  @Controller('/evuser')
  export class CpSearchController {

    constructor(){}
  
    @Get()
    search() {

      return "search method is working";
    }
  
  }