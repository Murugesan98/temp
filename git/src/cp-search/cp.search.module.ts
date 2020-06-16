import {Module} from '@nestjs/common';
import {CpSearchService} from './cp.search.service';
import {CpSearchResolvers} from './cp.search.resolvers'

@Module({
  providers: [CpSearchResolvers,CpSearchService],
})
export class CpSearchModule {}


