import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer';
import { IonicModule } from 'ionic-angular'; // es necesario para poder las etiquetas Ionuc
@NgModule({
	declarations: [FooterComponent],
	imports: [IonicModule],
	exports: [FooterComponent]
})
export class ComponentsModule {}
