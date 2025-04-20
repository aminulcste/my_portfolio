import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Already correct

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FormsModule,     // ✅ Enables ngForm, ngModel
    RouterModule     // ✅ Enables RouterOutlet, routerLink, etc.
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  onSubmit(form: any) {
    alert('Thanks ' + form.value.name + '! Your message has been sent.');
    form.reset();
  }
}
