import { Component } from '@angular/core';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {
  public name = 'Ian Rodrigues';
  public age = 32;
  public condition = this.age > 1 ? "Teste" : "Teste 2"
  public isDisable = false;
  public srcValue = ''
  public isTextDecoration = this.age >= 32 ? 'underline' : 'none'

  public sum(){
    return this.age++;
  }

  public sub(){
    return this.age--;
  }

  public onKeyDown(event: Event) {
    return console.log(event);
  }

  public onMouseMove(event: MouseEvent){
    return console.log({
      clientX: event.clientX,
      clientY: event.clientY
    });
  }
}
