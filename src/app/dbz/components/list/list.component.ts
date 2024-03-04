import { Component, Input, EventEmitter, Output} from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class DbzListComponent {

  @Output()
  public onDelecte: EventEmitter<string> = new EventEmitter();


  @Input()
  public characterList: Character[] = [{
    name: 'Thrunks',
    power: 10
  }];

  onDeleteCharacter(id?: string): void{
    if(! id) return;
    this.onDelecte.emit(id);
    console.log({id});
  }

}
