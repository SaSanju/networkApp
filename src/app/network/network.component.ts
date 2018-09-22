import { Component, OnInit, Renderer } from '@angular/core';
import { AppServiceService } from '.././common/services/app-service.service';


@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit {

  constructor(private appService: AppServiceService,private renderer: Renderer) { }

  terminal = [];
  commands =[]

  errorMessage: String;
  cmdResult;  
  

  ngOnInit() {
  }

  addTerminal() {
    let commands = [];
    let cmdObj =  {
      cmdLine: ''
    }
    commands.push(cmdObj)
    this.terminal.push(commands)
    console.log(this.terminal)
  }

  removeTerminal(index) {
    console.log(index);
    this.terminal.splice(index, 1);
  }

  onKeyUp(cmds, ev) {
    console.log(ev)
    let ln = cmds.length - 1;
    let num = 0;
    while (cmds[num].cmdLine != cmds[ln].cmdLine && ln > num) {
      num++;
      // console.log(num, "len:", ln)
    }
    cmds[ln].cmdLine = cmds[num - 1].cmdLine;
  }

  // onKeyDown(revArr) {
  //   let cmds = revArr;
  //   cmds.reverse();
  //   let ln = cmds.length - 1;
  //   let num = 0;
  //   while (cmds[num].cmdLine != cmds[ln].cmdLine && ln > num) {
  //     num++;
  //     console.log(num, "len:", ln)
  //   }
  //   cmds[ln] = cmds[num - 1];
  //   console.log(cmds)
  // }

  enterCommand(shell, command, ev) {
    console.log(ev)
    let networkObj = {
      command: command.cmdLine,
    };
    
    this.appService.addCommandNetwork(networkObj)
			.subscribe(
			data => {
        console.log(data)
        command.cmdResult = data;
        let cmdObj = {
          cmdLine: ''
        }
        shell.push(cmdObj)
        // cmd = '';
				// if (data.length) {
				// 	this.paperquality = data;

				// 	this.paperquality.forEach(function (element, index) {
				// 		element.isSelected = false;
				// 		if (route.queryParams["value"].search) {
				// 			this.subcateoryOn = true;
				// 			element.isSelected = element.name === this.route.queryParams["value"].search;
				// 		}
				// 	}, this);
				// }
			},
      error => this.errorMessage = <any>error);

  }
  

}
