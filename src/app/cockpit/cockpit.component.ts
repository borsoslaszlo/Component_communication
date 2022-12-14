import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit{
  @Output() serverCreated = new EventEmitter<{serverName:string , serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName:string , serverContent: string}>() ;
  newServerName: string = '';
  newServerContent: string = '';

  constructor (){}

  ngOnInit () {

  }

  onAddServer() {
    this.serverCreated.emit({serverName: this.newServerName,serverContent: this.newServerContent});
  }

  onAddBlueprint() {
    // this.serverElements.push({
    //   type: 'blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
    this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
  }
}
