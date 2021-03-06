export * from './booking.service';
import { BookingService } from './booking.service';
export * from './host.service';
import { HostService } from './host.service';
export * from './stay.service';
import { StayService } from './stay.service';
export * from './stripe.service';
import { StripeService } from './stripe.service';
export * from './template.service';
import { TemplateService } from './template.service';
export * from './user.service';
import { UserService } from './user.service';
export const APIS = [BookingService, HostService, StayService, StripeService, TemplateService, UserService];
