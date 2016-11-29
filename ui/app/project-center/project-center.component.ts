import { Component } from '@angular/core';

@Component({
    selector: 'ct-project-center',
    templateUrl: 'app/project-center/project-center.component.html',
    styles: [`
        .glyphicon {
            margin-top: 5px;
            margin-bottom: 5px;
        }
        a .glyphicon {
            font-size: 9px;
        }
        .form-group {
            margin-right: 10px;
        }
        .btn-group {
            margin-right: 10px;
        }
    `]
})
export class ProjectCenterComponent {
    title: string = 'Project Center';
    dropAction: string;
    showColSettings = false;
    panelStates = {};
    setState(state: string): void {
        this.dropAction = state;
    }

    toggleColSettings(): void {
        this.showColSettings = !this.showColSettings;
    }
    toggleView(panel_id: string): void {
        console.log('Toggle panel: ' + panel_id);
        if (!this.panelStates[panel_id]) {
            this.panelStates[panel_id] = true;
        } else {
            this.panelStates[panel_id] = !this.panelStates[panel_id];
        }
        console.log(this.panelStates);
    }
 }