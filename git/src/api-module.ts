
import { Module } from '@nestjs/common';
import { EvUserModule } from './ev-user-registration/ev-user-module';
import { CpUserModule } from './cp-user-registration/cp-user-module';
import { CpSearchModule } from './cp-search/cp.search.module';


@Module({
  imports: [EvUserModule,CpUserModule,CpSearchModule],
  providers: [],
  exports: [ EvUserModule,CpUserModule,CpSearchModule],
})
export class ApiModule {}