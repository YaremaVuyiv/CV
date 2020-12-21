import { Component, Input } from '@angular/core';

@Component({
    selector: 'work',
    templateUrl: './work.component.html',
    styleUrls: ['./work.component.css']
})

export class WorkComponent {

    @Input('work-id') workId: string;

    @Input('work-description') workDescription: string;

    @Input('work-name') workName: string;

    @Input('work-technologies') workTechnologies: string;

    @Input('work-responsibilities') workResponsibilities: string;
}
