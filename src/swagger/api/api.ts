export * from './host.service';
import { HostService } from './host.service';
export * from './stay.service';
import { StayService } from './stay.service';
export * from './template.service';
import { TemplateService } from './template.service';
export const APIS = [HostService, StayService, TemplateService];
